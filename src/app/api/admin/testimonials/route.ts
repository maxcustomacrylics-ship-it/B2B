import { NextResponse } from "next/server";
import { getTestimonials, saveTestimonials } from "@/lib/data-store";
import { requireAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";
export async function GET() {
  const list = await getTestimonials();
  return NextResponse.json(list);
}

export async function PUT(request: Request) {
  const unauth = await requireAdmin();
  if (unauth) return unauth;

  const body = await request.json();
  await saveTestimonials(body);
  return NextResponse.json({ success: true });
}
