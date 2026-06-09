import { NextResponse } from "next/server";
import { getMessagesData, saveMessagesData } from "@/lib/data-store";

export async function GET() {
  return NextResponse.json(getMessagesData("en"));
}

export async function PUT(request: Request) {
  const body = await request.json();
  saveMessagesData(body, "en");
  return NextResponse.json({ success: true });
}
