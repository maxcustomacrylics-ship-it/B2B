import { NextResponse } from "next/server";
import { getBlogPosts, saveBlogPosts } from "@/lib/data-store";

export async function GET() {
  return NextResponse.json(getBlogPosts());
}

export async function PUT(request: Request) {
  const body = await request.json();
  saveBlogPosts(body);
  return NextResponse.json({ success: true });
}
