import { NextResponse } from "next/server";
import { getProducts, saveProducts } from "@/lib/data-store";
import { requireAdmin } from "@/lib/auth";

export async function GET() {
  const list = await getProducts();
  return NextResponse.json(list);
}

export async function POST(request: Request) {
  const unauth = await requireAdmin();
  if (unauth) return unauth;

  const body = await request.json();
  const products = await getProducts();
  const newProduct = { ...body, slug: body.name.toLowerCase().replace(/\s+/g, "-") };
  products.push(newProduct);
  await saveProducts(products);
  return NextResponse.json(newProduct, { status: 201 });
}
