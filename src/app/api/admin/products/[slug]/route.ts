import { NextResponse } from "next/server";
import { getProducts, saveProducts } from "@/lib/data-store";
import { requireAdmin } from "@/lib/auth";
import fs from "fs";
import path from "path";

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

  // 1. Delete from Supabase directly
  // Writes must use the service-role key — never fall back to the public anon key.
  const supabaseUrl = "https://xwchzipgujhughzngolj.supabase.co";
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (supabaseKey) {
    try {
      await fetch(`${supabaseUrl}/rest/v1/products?slug=eq.${encodeURIComponent(slug)}`, {
        method: "DELETE",
        headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}`, Prefer: "return=minimal" },
      });
    } catch (e) { console.error("[supabase] delete product failed:", e); }
  } else {
    console.error("[supabase] SUPABASE_SERVICE_ROLE_KEY not set — skipping direct delete");
  }

  // 2. Update local JSON without heavy Supabase sync
  const DATA_DIR = process.env.VERCEL ? "/tmp/data" : path.join(process.cwd(), "src", "data");
  let products = await getProducts();
  products = products.filter((p) => p.slug !== slug);
  try {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
    fs.writeFileSync(path.join(DATA_DIR, "products.json"), JSON.stringify(products, null, 2), "utf-8");
  } catch {}

  return NextResponse.json({ success: true });
}
