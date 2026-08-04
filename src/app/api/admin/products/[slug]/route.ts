import { NextResponse } from "next/server";
import { getProducts, saveProducts } from "@/lib/data-store";
import { requireAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const products = await getProducts();
  const product = products.find((p) => p.slug === slug);
  if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(product);
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const unauth = await requireAdmin();
  if (unauth) return unauth;

  const { slug } = await params;
  const body = await request.json();
  const products = await getProducts();
  const index = products.findIndex((p) => p.slug === slug);
  if (index === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });
  products[index] = { ...products[index], ...body, slug };
  await saveProducts(products);
  return NextResponse.json(products[index]);
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const unauth = await requireAdmin();
  if (unauth) return unauth;

  const { slug } = await params;

  // Remove from Supabase directly
  const supabaseUrl = "https://xwchzipgujhughzngolj.supabase.co";
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3Y2h6aXBndWpodWdoem5nb2xqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExNTM5NDMsImV4cCI6MjA5NjcyOTk0M30.JSAINuIET8-j_e_c8oxXNxP-cLxp60q2fwiXgOcXBZQ";
  try {
    await fetch(`${supabaseUrl}/rest/v1/products?slug=eq.${slug}`, {
      method: "DELETE",
      headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}`, Prefer: "return=minimal" },
    });
  } catch (e) { console.error("[supabase] delete product failed:", e); }

  // Remove from local JSON
  let products = await getProducts();
  products = products.filter((p) => p.slug !== slug);
  await saveProducts(products);
  return NextResponse.json({ success: true });
}
