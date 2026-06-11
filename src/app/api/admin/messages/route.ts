import { NextResponse } from "next/server";
import { getMessagesData, saveMessagesData } from "@/lib/data-store";
import { requireAdmin } from "@/lib/auth";

export async function GET() {
  const data = await getMessagesData("en");
  return NextResponse.json(data);
}

export async function PUT(request: Request) {
  const unauth = await requireAdmin();
  if (unauth) return unauth;

  const body = await request.json();
  await saveMessagesData(body, "en");
  return NextResponse.json({ success: true });
}
