import { NextResponse } from "next/server";
import { getServices, saveServices } from "@/lib/data-store";
import { requireAdmin } from "@/lib/auth";

export async function GET() {
  const list = await getServices();
  return NextResponse.json(list);
}

export async function PUT(request: Request) {
  const unauth = await requireAdmin();
  if (unauth) return unauth;

  const body = await request.json();
  await saveServices(body);
  return NextResponse.json({ success: true });
}
