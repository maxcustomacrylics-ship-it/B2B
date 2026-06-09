import { NextResponse } from "next/server";
import { getTestimonials, saveTestimonials } from "@/lib/data-store";

export async function GET() {
  const list = await getTestimonials();
  return NextResponse.json(list);
}

export async function PUT(request: Request) {
  const body = await request.json();
  await saveTestimonials(body);
  return NextResponse.json({ success: true });
}
