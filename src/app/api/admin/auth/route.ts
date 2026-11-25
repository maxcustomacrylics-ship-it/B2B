import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { timingSafeEqual } from "crypto";
import { ADMIN_COOKIE_NAME, createSessionToken, verifySessionToken } from "@/lib/admin-session";

export const dynamic = "force-dynamic";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

function validatePassword(input: string): boolean {
  if (!ADMIN_PASSWORD) {
    console.error("ADMIN_PASSWORD environment variable is not set");
    return false;
  }
  const a = Buffer.from(input);
  const b = Buffer.from(ADMIN_PASSWORD);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

// ── In-memory rate limiter (shared across invocations on warm instances) ──
const MAX_ATTEMPTS = 10;
const LOCKOUT_MS = 5 * 60 * 1000; // 5 minutes
const MAX_LOG_ENTRIES = 10_000;
const attemptLog = new Map<string, { count: number; firstAttempt: number }>();

function getClientIp(request: Request): string {
  // Vercel sets x-vercel-forwarded-for / x-real-ip to the real client address.
  // x-forwarded-for is client-appendable, so take the right-most entry that
  // isn't an attacker-supplied one — Vercel appends the true IP last.
  const vercelIp = request.headers.get("x-vercel-forwarded-for");
  if (vercelIp) return vercelIp.trim();

  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const parts = forwarded.split(",").map((p) => p.trim()).filter(Boolean);
    if (parts.length > 0) return parts[parts.length - 1];
  }

  return "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = attemptLog.get(ip);

  if (!entry || now - entry.firstAttempt > LOCKOUT_MS) {
    // Reset rate limit on success
    attemptLog.set(ip, { count: 1, firstAttempt: now });

    // Bound memory growth if an attacker rotates IPs.
    if (attemptLog.size > MAX_LOG_ENTRIES) {
      const oldest = Array.from(attemptLog.entries()).sort(
        (a, b) => a[1].firstAttempt - b[1].firstAttempt
      )[0];
      if (oldest) attemptLog.delete(oldest[0]);
    }

    return false;
  }

  entry.count++;
  if (entry.count > MAX_ATTEMPTS) {
    return true; // blocked
  }
  return false;
}

export async function POST(request: Request) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many attempts. Try again in 5 minutes." },
      { status: 429 }
    );
  }

  const { password } = await request.json();

  if (validatePassword(password)) {
    // Clear rate limit on success
    attemptLog.delete(ip);

    const cookieStore = await cookies();
    cookieStore.set(ADMIN_COOKIE_NAME, createSessionToken(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
    });
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ error: "Invalid password" }, { status: 401 });
}

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  return NextResponse.json({ authenticated: verifySessionToken(token) });
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE_NAME);
  return NextResponse.json({ success: true });
}
