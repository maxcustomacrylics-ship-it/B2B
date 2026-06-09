import { NextResponse } from "next/server";
import { getServices, saveServices } from "@/lib/data-store";

export async function GET() {
  const list = await getServices();
  return NextResponse.json(list);
}

export async function PUT(request: Request) {
  const body = await request.json();
  await saveServices(body);
  return NextResponse.json({ success: true });
}
