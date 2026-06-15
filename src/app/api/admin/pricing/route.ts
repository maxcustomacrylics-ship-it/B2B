import { NextResponse } from "next/server";
import { getPricingConfig, savePricingConfig } from "@/lib/data-store";
import { requireAdmin } from "@/lib/auth";
import type { PricingConfig } from "@/lib/types";

export const dynamic = "force-dynamic";

// GET is public — the quote calculator needs pricing rates
export async function GET() {
  try {
    const config = await getPricingConfig();
    return NextResponse.json(config);
  } catch (error) {
    console.error("[api] GET /admin/pricing:", error);
    return NextResponse.json({ error: "Failed to fetch pricing" }, { status: 500 });
  }
}

// PUT requires admin auth
export async function PUT(request: Request) {
  const unauth = await requireAdmin();
  if (unauth) return unauth;

  try {
    const body = await request.json();
    const config: PricingConfig = {
      materialRates: body.materialRates || {},
      complexityRates: body.complexityRates || {},
      edgeTreatmentRates: body.edgeTreatmentRates || {},
      surfaceFinishRates: body.surfaceFinishRates || {},
      leadTimeMultipliers: body.leadTimeMultipliers || {},
      quantityDiscounts: body.quantityDiscounts || [],
    };

    await savePricingConfig(config);
    return NextResponse.json({ message: "Pricing updated successfully", config });
  } catch (error) {
    console.error("[api] PUT /admin/pricing:", error);
    return NextResponse.json({ error: "Failed to update pricing" }, { status: 500 });
  }
}
