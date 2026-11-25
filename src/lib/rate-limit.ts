import "server-only";

/**
 * Minimal in-memory rate limiter for public form endpoints.
 *
 * Bounds abuse of the contact/quote forms (mail-bombing, quota exhaustion).
 * In-memory state is per-instance on serverless — good enough to blunt naive
 * scripted abuse; pair with a CAPTCHA/honeypot for stronger guarantees.
 */
const DEFAULT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const DEFAULT_MAX_REQUESTS = 5;
const MAX_TRACKED_IPS = 20_000;

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

function getClientIp(request: Request): string {
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

/**
 * Returns true when the request is allowed. When it returns false, the
 * caller should respond with 429.
 */
export function checkRateLimit(
  request: Request,
  scope: string,
  maxRequests = DEFAULT_MAX_REQUESTS,
  windowMs = DEFAULT_WINDOW_MS
): { allowed: boolean; retryAfterSeconds: number } {
  const ip = getClientIp(request);
  const key = `${scope}:${ip}`;
  const now = Date.now();

  const bucket = buckets.get(key);
  if (!bucket || now > bucket.resetAt) {
    if (buckets.size > MAX_TRACKED_IPS) {
      const oldest = Array.from(buckets.entries()).sort((a, b) => a[1].resetAt - b[1].resetAt)[0];
      if (oldest) buckets.delete(oldest[0]);
    }
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  bucket.count++;
  if (bucket.count > maxRequests) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((bucket.resetAt - now) / 1000)),
    };
  }

  return { allowed: true, retryAfterSeconds: 0 };
}

/**
 * Honeypot check. Forms include a hidden field that real users never fill;
 * bots that fill every input get filtered out.
 */
export function isHoneypotTripped(formData: FormData): boolean {
  const trap = formData.get("website")?.toString() || formData.get("_gotcha")?.toString() || "";
  return trap.trim().length > 0;
}
