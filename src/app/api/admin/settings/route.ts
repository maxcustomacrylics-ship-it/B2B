import { NextResponse } from "next/server";
import { getSettings, saveSettings } from "@/lib/data-store";
import { requireAdmin } from "@/lib/auth";

export async function GET() {
  const s = await getSettings();
  return NextResponse.json(s);
}

export async function PUT(request: Request) {
  const unauth = await requireAdmin();
  if (unauth) return unauth;

  const body = await request.json();
  await saveSettings(body);
  return NextResponse.json({ success: true });
}
