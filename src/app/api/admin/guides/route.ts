import { NextResponse } from "next/server";
import { getGuides, saveGuides } from "@/lib/data-store";
import { requireAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  const guides = await getGuides();
  return NextResponse.json(guides);
}

export async function PUT(request: Request) {
  const unauth = await requireAdmin();
  if (unauth) return unauth;

  const body = await request.json();
  await saveGuides(body);
  return NextResponse.json({ success: true });
}
