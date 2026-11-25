import { NextResponse } from "next/server";
import { hasSupabase, getSupabase, getSupabaseAdmin } from "@/lib/supabase";
import { requireAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  // Diagnostics expose internal configuration — admin only.
  const unauth = await requireAdmin();
  if (unauth) return unauth;

  const info: Record<string, unknown> = {};

  info.hasSupabase = hasSupabase();
  info.urlSet = Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL);
  info.keySet = Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  info.serviceKeySet = Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY);
  info.serviceKeyLen = process.env.SUPABASE_SERVICE_ROLE_KEY?.length ?? 0;
  // Classify the key format without echoing any part of the secret.
  info.serviceKeyFormat = (() => {
    const k = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!k) return "missing";
    if (k.startsWith("sb_secret_")) return "new-secret-key";
    if (k.startsWith("sb_publishable_")) return "new-publishable-key (not a secret)";
    if (k.startsWith("eyJ")) return "legacy-jwt";
    return "unrecognised";
  })();
  // Fingerprints that reveal copy-paste damage without exposing the secret.
  info.serviceKeyHasWhitespace = /\s/.test(process.env.SUPABASE_SERVICE_ROLE_KEY || "");
  info.serviceKeyHasQuotes = /["']/.test(process.env.SUPABASE_SERVICE_ROLE_KEY || "");
  info.serviceKeyCharClasses = (() => {
    const k = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
    return {
      hasUpper: /[A-Z]/.test(k),
      hasLower: /[a-z]/.test(k),
      hasDigit: /[0-9]/.test(k),
      hasUnderscore: /_/.test(k),
      hasDot: /\./.test(k),
      hasHyphen: /-/.test(k),
    };
  })();
  info.serviceKeyLooksValid = (() => {
    const k = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!k) return false;
    // A Supabase service_role key is a JWT: three dot-separated segments.
    // A quoted or truncated value will not match.
    return k.split(".").length === 3 && !/["'\s]/.test(k);
  })();
  info.resendKeySet = Boolean(process.env.RESEND_API_KEY);

  if (hasSupabase()) {
    const sb = getSupabase();
    const start = Date.now();
    const { data, error } = await sb!.from("settings").select("key").limit(1);
    info.queryMs = Date.now() - start;
    info.queryOk = !error;
    info.queryError = error?.message || null;
    info.rowCount = data?.length || 0;
  }

  // Write probe using the service-role client. Writes a scratch key and
  // removes it again — nothing user-facing is touched.
  const admin = getSupabaseAdmin();
  if (admin) {
    const probeKey = "_diag_write_probe";
    const { error: writeErr } = await admin
      .from("settings")
      .upsert(
        { key: probeKey, value: "ok", updated_at: new Date().toISOString() },
        { onConflict: "key" }
      );
    info.writeOk = !writeErr;
    info.writeError = writeErr?.message || null;

    if (!writeErr) {
      // Confirm the row is really visible to a plain read.
      const { data: probeRow } = await admin
        .from("settings")
        .select("value")
        .eq("key", probeKey)
        .maybeSingle();
      info.writeVisible = probeRow?.value === "ok";

      await admin.from("settings").delete().eq("key", probeKey);
    }
  } else {
    info.writeOk = false;
    info.writeError = "service-role client unavailable";
  }

  return NextResponse.json(info);
}
