import { NextResponse } from "next/server";
import { getProducts, saveProducts } from "@/lib/data-store";

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
  const { slug } = await params;
  let products = await getProducts();
  products = products.filter((p) => p.slug !== slug);
  await saveProducts(products);
  return NextResponse.json({ success: true });
}
