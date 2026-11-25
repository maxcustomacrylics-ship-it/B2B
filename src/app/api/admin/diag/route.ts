import { NextResponse } from "next/server";
import { hasSupabase, getSupabase } from "@/lib/supabase";
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

  return NextResponse.json(info);
}
