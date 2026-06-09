import { NextResponse } from "next/server";
import { getCaseStudies, saveCaseStudies } from "@/lib/data-store";

export async function GET() {
  return NextResponse.json(getCaseStudies());
}

export async function PUT(request: Request) {
  const body = await request.json();
  saveCaseStudies(body);
  return NextResponse.json({ success: true });
}
