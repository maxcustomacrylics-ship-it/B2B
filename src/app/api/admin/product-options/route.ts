import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import {
  getProductSpecOptions,
  saveProductSpecOptions,
} from "@/lib/product-spec-options";
import type { SpecOption } from "@/lib/spec-options";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const unauth = await requireAdmin();
  if (unauth) return unauth;

  const slug = new URL(request.url).searchParams.get("slug");
  if (!slug) {
    return NextResponse.json({ error: "slug is required" }, { status: 400 });
  }

  const options = await getProductSpecOptions(slug);
  return NextResponse.json(options);
}

export async function PUT(request: Request) {
  const unauth = await requireAdmin();
  if (unauth) return unauth;

  const body = await request.json();
  const slug = body?.slug;
  const options = body?.options;

  if (!slug || typeof slug !== "string") {
    return NextResponse.json({ error: "slug is required" }, { status: 400 });
  }
  if (options && typeof options !== "object") {
    return NextResponse.json({ error: "options must be an object" }, { status: 400 });
  }

  // Normalise to { fieldKey: [{ value, label }] } and drop malformed entries.
  const cleaned: Record<string, SpecOption[]> = {};
  for (const [key, raw] of Object.entries(options ?? {})) {
    if (!Array.isArray(raw)) continue;
    const opts: SpecOption[] = [];
    for (const item of raw) {
      if (item && typeof item.value === "string" && typeof item.label === "string") {
        opts.push({ value: item.value.slice(0, 100), label: item.label.slice(0, 200) });
      }
    }
    if (opts.length > 0) cleaned[key] = opts;
  }

  try {
    await saveProductSpecOptions(slug, cleaned);
    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("[product-options] PUT error:", err);
    return NextResponse.json(
      { error: err.message || "Save failed" },
      { status: 500 }
    );
  }
}
