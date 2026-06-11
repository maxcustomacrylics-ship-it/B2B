import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

function validatePassword(input: string): boolean {
  if (!ADMIN_PASSWORD) {
    console.error("ADMIN_PASSWORD environment variable is not set");
    return false;
  }
  return input === ADMIN_PASSWORD;
}

// ── In-memory rate limiter (shared across invocations on warm instances) ──
const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 5 * 60 * 1000; // 5 minutes
const attemptLog = new Map<string, { count: number; firstAttempt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = attemptLog.get(ip);

  if (!entry || now - entry.firstAttempt > LOCKOUT_MS) {
    // Reset after lockout window
    attemptLog.set(ip, { count: 1, firstAttempt: now });
    return false;
  }

  entry.count++;
  if (entry.count > MAX_ATTEMPTS) {
    return true; // blocked
  }
  return false;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") || "unknown";

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
    cookieStore.set("admin_token", "authenticated", {
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
  const token = cookieStore.get("admin_token");
  return NextResponse.json({ authenticated: token?.value === "authenticated" });
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_token");
  return NextResponse.json({ success: true });
}
