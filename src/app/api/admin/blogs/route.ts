import { NextResponse } from "next/server";
import { getBlogPosts, saveBlogPosts } from "@/lib/data-store";
import { requireAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";
export async function GET() {
  const posts = await getBlogPosts();
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const unauth = await requireAdmin();
  if (unauth) return unauth;

  const body = await request.json();
  const posts = await getBlogPosts();

  // Auto-generate slug from title
  const slug = body.slug || body.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  // Prevent duplicate slug
  if (posts.some((p) => p.slug === slug)) {
    return NextResponse.json({ error: "A post with this slug already exists" }, { status: 409 });
  }

  const newPost = {
    ...body,
    slug,
    date: body.date || new Date().toISOString().split("T")[0],
    author: body.author || "Admin",
    image: body.image || "",
  };

  posts.unshift(newPost);
  await saveBlogPosts(posts);
  return NextResponse.json(newPost, { status: 201 });
}

export async function PUT(request: Request) {
  const unauth = await requireAdmin();
  if (unauth) return unauth;

  const body = await request.json();
  await saveBlogPosts(body);
  return NextResponse.json({ success: true });
}
