import { NextResponse } from "next/server";
import { getServices, saveServices } from "@/lib/data-store";

export async function GET() {
  return NextResponse.json(getServices());
}

export async function PUT(request: Request) {
  const body = await request.json();
  saveServices(body);
  return NextResponse.json({ success: true });
}
