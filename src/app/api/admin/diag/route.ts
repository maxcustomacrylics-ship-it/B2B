import { NextResponse } from "next/server";
import { hasSupabase, getSupabase } from "@/lib/supabase";

export async function GET() {
  const info: Record<string, unknown> = {};

  info.hasSupabase = hasSupabase();
  info.urlSet = Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL);
  info.keySet = Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  info.urlPrefix = process.env.NEXT_PUBLIC_SUPABASE_URL?.substring(0, 20) || "(empty)";

  if (hasSupabase()) {
    const sb = getSupabase();
    const start = Date.now();
    const { data, error } = await sb!.from("settings").select("key").limit(1);
    info.queryMs = Date.now() - start;
    info.queryOk = !error;
    info.queryError = error?.message || null;
    info.rowCount = data?.length || 0;

    // Try a write test
    const testRes = await sb!.from("settings").upsert({ key: "_diag_test", value: "ok", updated_at: new Date().toISOString() }, { onConflict: "key" });
    info.writeOk = !testRes.error;
    info.writeError = testRes.error?.message || null;
  }

  // Auth check
  const { cookies } = await import("next/headers");
  const ck = await cookies();
  const token = ck.get("admin_token");
  info.authCookie = { present: !!token, value: token?.value };

  return NextResponse.json(info);
}
