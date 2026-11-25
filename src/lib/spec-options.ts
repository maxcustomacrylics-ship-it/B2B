/**
 * Option sets for the product customization spec selector.
 *
 * Kept in one place so the selector, the quote calculator and the backend
 * editor stay in sync. Values are plain strings so they can be posted as
 * form fields and stored in the products table without a schema migration.
 */

export const MATERIAL_OPTIONS = [
  { value: "cell-cast", label: "Cell-cast PMMA (clear, best for machining)" },
  { value: "extruded", label: "Extruded PMMA (cost-effective volume runs)" },
  { value: "frosted", label: "Frosted PMMA" },
  { value: "tinted", label: "Tinted / coloured PMMA" },
  { value: "mirrored", label: "Mirrored PMMA" },
  { value: "other", label: "Other / specialty grade" },
];

export const THICKNESS_OPTIONS = [
  "1.5 mm", "2 mm", "3 mm", "5 mm", "8 mm", "10 mm", "12 mm",
  "15 mm", "20 mm", "25 mm", "Other",
];

export const EDGE_FINISH_OPTIONS = [
  { value: "raw", label: "Raw cut edge" },
  { value: "diamond", label: "Diamond polished" },
  { value: "flame", label: "Flame polished" },
  { value: "beveled", label: "Bevelled" },
  { value: "rounded", label: "Rounded / radiused" },
  { value: "other", label: "Other" },
];

export const LOGO_METHOD_OPTIONS = [
  { value: "none", label: "No branding" },
  { value: "uv-print", label: "UV digital printing (full colour)" },
  { value: "engraving", label: "Laser engraving" },
  { value: "silk-screen", label: "Silk-screen printing" },
  { value: "other", label: "Other" },
];

export const LEAD_TIME_OPTIONS = [
  { value: "sample", label: "Sample / prototype only (3–5 days)" },
  { value: "standard", label: "Standard production (10–18 days)" },
  { value: "express", label: "Express production (7–10 days)" },
  { value: "rush", label: "Rush (4–6 days, subject to confirmation)" },
];

export const QUANTITY_UNIT_OPTIONS = [
  { value: "pcs", label: "pieces" },
  { value: "sets", label: "sets" },
  { value: "cartons", label: "cartons" },
];

export const DESTINATION_OPTIONS = [
  { value: "united-states", label: "United States" },
  { value: "united-kingdom", label: "United Kingdom" },
  { value: "germany", label: "Germany" },
  { value: "france", label: "France" },
  { value: "canada", label: "Canada" },
  { value: "australia", label: "Australia" },
  { value: "japan", label: "Japan" },
  { value: "uae", label: "UAE" },
  { value: "singapore", label: "Singapore" },
  { value: "other", label: "Other" },
];

export const INCOTERMS_OPTIONS = [
  { value: "exw", label: "EXW (Ex Works)" },
  { value: "fob", label: "FOB Shenzhen" },
  { value: "cif", label: "CIF (port of destination)" },
  { value: "ddp", label: "DDP (delivered duty paid)" },
  { value: "other", label: "Other / need advice" },
];

export type SpecOption = { value: string; label: string };

export type SpecField = {
  key: string;
  label: string;
  type: SpecFieldType;
  options?: SpecOption[];
  hint?: string;
  placeholder?: string;
  min?: number;
  max?: number;
  perProduct?: boolean;
};

/**
 * The fields shown in the selector, in order.
 *
 * `key` matches the form field name so values can be handed to the inquiry
 * form without translation. `perProduct` marks fields whose available values
 * can be narrowed per product in the admin panel.
 */
export const SPEC_FIELDS: SpecField[] = [
  {
    key: "material",
    label: "Material & Route",
    type: "select",
    options: MATERIAL_OPTIONS,
    hint: "Cell-cast gives better optical clarity and machining; extruded is more economical for larger runs.",
    perProduct: true,
  },
  {
    key: "thickness",
    label: "Thickness",
    type: "select",
    options: THICKNESS_OPTIONS.map((t) => ({ value: t.toLowerCase().replace(/\s+/g, "-"), label: t })),
    hint: "Nominal thickness. Cast sheet runs ±0.70 mm at 3 mm (ISO 7823-1); extruded ±0.15 mm (ISO 7823-2).",
    perProduct: true,
  },
  {
    key: "length",
    label: "Length (mm)",
    type: "number",
    placeholder: "e.g. 250",
    min: 1,
    max: 3000,
  },
  {
    key: "width",
    label: "Width (mm)",
    type: "number",
    placeholder: "e.g. 180",
    min: 1,
    max: 3000,
  },
  {
    key: "height",
    label: "Height (mm)",
    type: "number",
    placeholder: "e.g. 220",
    min: 1,
    max: 3000,
  },
  {
    key: "quantity",
    label: "Quantity",
    type: "number",
    placeholder: "e.g. 100",
    min: 1,
    max: 10000000,
  },
  {
    key: "quantityUnit",
    label: "Unit",
    type: "select",
    options: QUANTITY_UNIT_OPTIONS,
  },
  {
    key: "edgeFinish",
    label: "Edge Finish",
    type: "select",
    options: EDGE_FINISH_OPTIONS,
    perProduct: true,
  },
  {
    key: "logoMethod",
    label: "Logo / Branding",
    type: "select",
    options: LOGO_METHOD_OPTIONS,
    perProduct: true,
  },
  {
    key: "leadTime",
    label: "Timeline",
    type: "select",
    options: LEAD_TIME_OPTIONS,
    perProduct: true,
  },
  {
    key: "destination",
    label: "Ship To",
    type: "select",
    options: DESTINATION_OPTIONS,
  },
  {
    key: "incoterms",
    label: "Incoterms",
    type: "select",
    options: INCOTERMS_OPTIONS,
  },
  {
    key: "specNotes",
    label: "Anything else we should know?",
    type: "textarea",
    placeholder: "Tolerance, Pantone colour, holes or cut-outs, packaging requirements, target date…",
    hint: "Optional — but the more detail you give, the more accurate the first quotation.",
  },
];

export type SpecFieldKey = string;
export type SpecFieldType = "select" | "number" | "textarea";

/** Human-readable labels used in the inquiry email. */
export const SPEC_FIELD_LABELS: Record<string, string> = Object.fromEntries(
  SPEC_FIELDS.map((f) => [f.key, f.label])
);

/** Fields worth highlighting when the buyer has filled them in. */
export const SPEC_KEY_ORDER: string[] = SPEC_FIELDS.map((f) => f.key);
