import { NextResponse } from "next/server";
import { getBlogPosts, saveBlogPosts } from "@/lib/data-store";
import { requireAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const posts = await getBlogPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(post);
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const unauth = await requireAdmin();
  if (unauth) return unauth;

  const { slug } = await params;
  const body = await request.json();
  const posts = await getBlogPosts();
  const index = posts.findIndex((p) => p.slug === slug);
  if (index === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });

  posts[index] = { ...posts[index], ...body, slug };
  await saveBlogPosts(posts);
  return NextResponse.json(posts[index]);
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const unauth = await requireAdmin();
  if (unauth) return unauth;

  const { slug } = await params;
  let posts = await getBlogPosts();
  posts = posts.filter((p) => p.slug !== slug);
  await saveBlogPosts(posts);
  return NextResponse.json({ success: true });
}
