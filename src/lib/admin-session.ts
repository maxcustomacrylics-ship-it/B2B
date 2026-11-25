import "server-only";
import { createHmac, timingSafeEqual, randomBytes } from "crypto";

/**
 * Signed admin session tokens.
 *
 * The previous implementation used a static cookie value ("authenticated"),
 * which anyone could forge to gain full admin API access. Tokens here are
 * HMAC-SHA256 signed with a server-only secret and carry an expiry, so a
 * cookie cannot be forged without the secret.
 */

const COOKIE_NAME = "admin_session";
const TOKEN_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

function getSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD;
  if (!secret) {
    throw new Error(
      "ADMIN_SESSION_SECRET (or ADMIN_PASSWORD) must be set to sign admin sessions"
    );
  }
  return secret;
}

function hmac(payload: string): string {
  return createHmac("sha256", getSecret()).update(payload).digest("base64url");
}

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

/** Create a signed session token: `<random>.<issuedAt>.<expiryAt>.<signature>` */
export function createSessionToken(): string {
  const now = Date.now();
  const payload = `${randomBytes(16).toString("base64url")}.${now}.${now + TOKEN_TTL_MS}`;
  return `${payload}.${hmac(payload)}`;
}

/** Verify signature and expiry. Returns true only for valid, unexpired tokens. */
export function verifySessionToken(token: string | undefined | null): boolean {
  if (!token) return false;

  const parts = token.split(".");
  if (parts.length !== 4) return false;

  const [nonce, issuedAt, expiryAt, signature] = parts;
  const payload = `${nonce}.${issuedAt}.${expiryAt}`;

  if (!safeEqual(signature, hmac(payload))) return false;

  const expiry = Number(expiryAt);
  if (!Number.isFinite(expiry)) return false;

  return Date.now() < expiry;
}

export const ADMIN_COOKIE_NAME = COOKIE_NAME;
export { COOKIE_NAME as ADMIN_SESSION_COOKIE };
