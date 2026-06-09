import { NextResponse } from "next/server";
import { getCaseStudies, saveCaseStudies } from "@/lib/data-store";

export async function GET() {
  const cases = await getCaseStudies();
  return NextResponse.json(cases);
}

export async function PUT(request: Request) {
  const body = await request.json();
  await saveCaseStudies(body);
  return NextResponse.json({ success: true });
}
