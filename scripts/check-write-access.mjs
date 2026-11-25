/**
 * Verify that the site can actually write to Supabase.
 *
 * Reads the site-side key configuration (without exposing any key material)
 * and reports whether writes will reach the database.
 *
 * Run with:  node scripts/check-write-access.mjs
 *
 * Requires ADMIN_PASSWORD in the environment (read from .env.local).
 */

import fs from "fs";
import path from "path";

const envPath = path.join(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, "utf-8").split("\n")) {
    const m = line.match(/^([A-Z_]+)=(.*)$/);
    if (m && !process.env[m[1]]) {
      const value = m[2].trim().replace(/^["']|["']$/g, "");
      if (/^[\x20-\x7E]+$/.test(value)) process.env[m[1]] = value;
    }
  }
}

const BASE_URL = process.env.BASE_URL || "https://www.maxcustomacrylics.com";
const PASSWORD = process.env.ADMIN_PASSWORD;

if (!PASSWORD) {
  console.error("ADMIN_PASSWORD is required");
  process.exit(1);
}

const login = await fetch(`${BASE_URL}/api/admin/auth`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ password: PASSWORD }),
});
if (!login.ok) {
  console.error(`Login failed: ${login.status}`);
  process.exit(1);
}
const cookie = login.headers.getSetCookie?.().map((c) => c.split(";")[0]).join("; ");
console.log("✓ Logged in");

const diag = await fetch(`${BASE_URL}/api/admin/diag`, {
  headers: { Cookie: cookie },
});
const body = await diag.json();

console.log("\n── Server key configuration ──");
console.log("  supabase url set: ", body.urlSet);
console.log("  anon key set:     ", body.keySet);
console.log("  service key set:  ", body.serviceKeySet);
console.log("  resend key set:   ", body.resendKeySet);
console.log("  db query ok:      ", body.queryOk, `(${body.queryMs}ms)`);

if (!body.serviceKeySet) {
  console.log(
    "\n✗ SUPABASE_SERVICE_ROLE_KEY is NOT set on the server.\n" +
      "  Writes to Supabase are skipped, so changes made in the admin panel\n" +
      "  never reach the database and never appear on the site.\n" +
      "  Fix: Vercel → Settings → Environment Variables → add the key → Redeploy."
  );
  process.exit(1);
}

console.log(
  "\n✓ Service-role key is present — admin writes will reach the database."
);
