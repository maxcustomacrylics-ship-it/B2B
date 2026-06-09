import { NextResponse } from "next/server";
import { getTestimonials, saveTestimonials } from "@/lib/data-store";

export async function GET() {
  return NextResponse.json(getTestimonials());
}

export async function PUT(request: Request) {
  const body = await request.json();
  saveTestimonials(body);
  return NextResponse.json({ success: true });
}
