import { NextResponse } from "next/server";
import { getProducts, saveProducts } from "@/lib/data-store";

export async function GET() {
  return NextResponse.json(getProducts());
}

export async function POST(request: Request) {
  const body = await request.json();
  const products = getProducts();
  const newProduct = { ...body, slug: body.name.toLowerCase().replace(/\s+/g, "-") };
  products.push(newProduct);
  saveProducts(products);
  return NextResponse.json(newProduct, { status: 201 });
}
