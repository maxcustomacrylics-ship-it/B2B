import { NextResponse } from "next/server";
import { getSettings, saveSettings } from "@/lib/data-store";

export async function GET() {
  const s = await getSettings();
  return NextResponse.json(s);
}

export async function PUT(request: Request) {
  const body = await request.json();
  await saveSettings(body);
  return NextResponse.json({ success: true });
}
