import { NextResponse } from "next/server";
import { getBlogPosts, saveBlogPosts } from "@/lib/data-store";

export async function GET() {
  const posts = await getBlogPosts();
  return NextResponse.json(posts);
}

export async function PUT(request: Request) {
  const body = await request.json();
  await saveBlogPosts(body);
  return NextResponse.json({ success: true });
}
