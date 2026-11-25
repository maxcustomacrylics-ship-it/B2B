/**
 * Single source of truth for MOQ, lead time and sample policy.
 *
 * These values previously lived in three unrelated places (homepage copy,
 * product spec tables, FAQ answers) and drifted apart — the homepage promised
 * "From 1 Piece / Prototype in 7 Days" while product pages said "Flexible" and
 * "15–20 business days". Every user-facing surface now reads from here.
 */

export const SUPPLY_POLICY = {
  /** Minimum order quantity. */
  moq: {
    /** Short label for hero chips. */
    chip: "From 1 Piece",
    /** Full statement for spec tables. */
    full: "From 1 piece (samples & prototypes) · 50 pcs per design for bulk production · final MOQ confirmed in quotation",
    /** Machine-readable minimum for form hints. */
    minQty: 1,
  },
  /** Lead time, split by phase. */
  leadTime: {
    chip: "Prototype in 7 Days",
    full: "Samples 3–5 days · Production 10–18 business days (quantity-dependent) · lead time starts from PO acceptance and artwork approval",
    sampleDays: "3–5 days",
    productionDays: "10–18 business days",
  },
  /** Sample fee policy. */
  sample: {
    chip: "Sample Fee Credited",
    full: "Sample fees are credited toward your first bulk order",
  },
  /** Quote response time. */
  quote: {
    chip: "24h Quotation",
    full: "Quotation within 24 hours of receiving your specifications",
  },
  /** Material statement. */
  material: {
    chip: "Cast & Extruded PMMA",
    full: "PMMA (acrylic) — cell-cast or extruded, clear / frosted / tinted / mirrored",
  },
  /** Certifications actually held. */
  certification: {
    chip: "ISO 9001:2015",
    full: "ISO 9001:2015 certified manufacturing facility (quality management system). Material compliance documents such as RoHS and REACH are available on request for specific grades.",
  },
} as const;

/**
 * Normalise a per-product spec value against a policy statement.
 *
 * Older product records carry values like "Flexible" (MOQ) or
 * "15–20 business days" (lead time) that contradict the published policy.
 * Those are replaced so the whole site speaks with one voice; genuinely
 * product-specific values (material, thickness, finish) are kept.
 */
export function normalizeSpecValue(label: string, value: string | undefined): string | undefined {
  if (!value) return undefined;
  const l = label.toLowerCase();

  if (l.includes("moq") || l.includes("minimum")) {
    return SUPPLY_POLICY.moq.full;
  }
  if (l.includes("lead")) {
    return SUPPLY_POLICY.leadTime.full;
  }
  if (l.includes("sample")) {
    return SUPPLY_POLICY.sample.full;
  }
  return value;
}
