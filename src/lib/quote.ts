import {
  materialRates,
  complexityRates,
  edgeTreatmentRates,
  surfaceFinishRates,
  leadTimeMultipliers,
  quantityDiscounts,
} from "@/data/pricing";
import type { QuoteEstimate, QuoteInput, PricingConfig } from "@/lib/types";

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const findQuantityDiscount = (quantity: number, discounts: Array<{ min: number; rate: number }>) => {
  const discount = discounts.find((item) => quantity >= item.min);
  return discount?.rate ?? 0;
};

const thicknessMultiplier = (thickness: number) => {
  if (thickness <= 3) return 1.0;
  if (thickness <= 6) return 1.12;
  if (thickness <= 10) return 1.25;
  return 1.4;
};

export function calculateAcrylicQuote(
  input: QuoteInput,
  pricingConfig?: PricingConfig
): QuoteEstimate {
  // Use provided config or fallback to defaults
  const config = pricingConfig || {
    materialRates,
    complexityRates,
    edgeTreatmentRates,
    surfaceFinishRates,
    leadTimeMultipliers,
    quantityDiscounts,
  };

  const width = clamp(input.width, 100, 3000);
  const height = clamp(input.height, 100, 3000);
  const thickness = clamp(input.thickness, 1, 50);
  const quantity = clamp(input.quantity, 1, 10000);

  const materialPrice = config.materialRates[input.materialType] ?? 
    config.materialRates["specialty"] ?? 240;
  const complexityFactor = config.complexityRates[input.complexity] ?? 1.0;
  const edgeRate = config.edgeTreatmentRates[input.edgeFinish] ?? 0;
  const surfaceRate = config.surfaceFinishRates[input.surfaceFinish] ?? 0;
  const leadTimeFactor = config.leadTimeMultipliers[input.leadTime] ?? 1.0;

  const area = Number(((width / 1000) * (height / 1000)).toFixed(4));
  const perimeter = Number((2 * ((width + height) / 1000)).toFixed(3));
  const thicknessFactor = thicknessMultiplier(thickness);

  const materialCost = Number((area * materialPrice * thicknessFactor * quantity).toFixed(2));
  const cuttingCost = Number((perimeter * 18 * complexityFactor * quantity).toFixed(2));
  const edgeCost = Number((edgeRate * perimeter * quantity).toFixed(2));
  const surfaceCost = Number((surfaceRate * area * quantity).toFixed(2));
  const setupCost = Number((Math.max(1, quantity / 50) * 25).toFixed(2));
  const subtotal = materialCost + cuttingCost + edgeCost + surfaceCost + setupCost;
  const discountRate = findQuantityDiscount(quantity, config.quantityDiscounts);
  const discountValue = Number((subtotal * discountRate).toFixed(2));
  const totalBeforeLeadTime = subtotal - discountValue;
  const total = Number((totalBeforeLeadTime * leadTimeFactor).toFixed(2));
  const minEstimate = Number((total * 0.95).toFixed(2));
  const maxEstimate = Number((total * 1.1).toFixed(2));

  return {
    area,
    perimeter,
    materialCost,
    cuttingCost,
    edgeCost,
    surfaceCost,
    setupCost,
    discountRate,
    discountValue,
    total,
    minEstimate,
    maxEstimate,
    pricePerUnit: Number((total / quantity).toFixed(2)),
    quantity,
    leadTimeFactor,
  };
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);
}
