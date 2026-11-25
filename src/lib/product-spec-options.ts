import "server-only";
import { getSupabaseAdmin } from "@/lib/supabase";
import { SPEC_FIELDS, type SpecOption } from "@/lib/spec-options";

/**
 * Per-product overrides for the specification selector.
 *
 * Stored as a single JSON blob in the settings table keyed by product slug,
 * so no database migration is required:
 *
 *   { "acrylic-jewelry-box": { "thickness": [{ "value": "2mm", "label": "2 mm" }] } }
 *
 * A product with no entry simply uses the global option set.
 */

const SETTINGS_KEY = "product_spec_options";

export type ProductSpecOptions = Record<string, Record<string, SpecOption[]>>;

/** Fields whose available values can be narrowed per product. */
export const PER_PRODUCT_FIELDS = SPEC_FIELDS.filter((f) => f.perProduct).map(
  (f) => f.key
);

export const PER_PRODUCT_FIELD_LABELS: Record<string, string> = Object.fromEntries(
  SPEC_FIELDS.filter((f) => f.perProduct).map((f) => [f.key, f.label])
);

/**
 * Read the option overrides for one product.
 * Falls back to an empty object when nothing is configured.
 */
export async function getProductSpecOptions(
  slug: string
): Promise<Record<string, SpecOption[]>> {
  try {
    const admin = getSupabaseAdmin();
    if (!admin) return {};

    const { data, error } = await admin
      .from("settings")
      .select("value")
      .eq("key", SETTINGS_KEY)
      .maybeSingle();

    if (error || !data?.value) return {};

    const all = JSON.parse(data.value) as ProductSpecOptions;
    return all?.[slug] ?? {};
  } catch {
    return {};
  }
}

/**
 * Merge overrides for several products in one query — used by the category
 * and listing pages so we do not fire a request per product.
 */
export async function getProductSpecOptionsMap(): Promise<ProductSpecOptions> {
  try {
    const admin = getSupabaseAdmin();
    if (!admin) return {};

    const { data, error } = await admin
      .from("settings")
      .select("value")
      .eq("key", SETTINGS_KEY)
      .maybeSingle();

    if (error || !data?.value) return {};
    return JSON.parse(data.value) as ProductSpecOptions;
  } catch {
    return {};
  }
}

/**
 * Replace the overrides for one product, leaving other products untouched.
 */
export async function saveProductSpecOptions(
  slug: string,
  options: Record<string, SpecOption[]>
): Promise<void> {
  const admin = getSupabaseAdmin();
  if (!admin) {
    throw new Error(
      "SUPABASE_SERVICE_ROLE_KEY is required to save product spec options"
    );
  }

  const { data, error } = await admin
    .from("settings")
    .select("value")
    .eq("key", SETTINGS_KEY)
    .maybeSingle();

  if (error) throw new Error(error.message);

  let all: ProductSpecOptions = {};
  if (data?.value) {
    try {
      all = JSON.parse(data.value) as ProductSpecOptions;
    } catch {
      all = {};
    }
  }

  // Drop empty field entries so the stored JSON stays small.
  const cleaned: Record<string, SpecOption[]> = {};
  for (const [key, opts] of Object.entries(options)) {
    if (Array.isArray(opts) && opts.length > 0) cleaned[key] = opts;
  }

  if (Object.keys(cleaned).length > 0) {
    all[slug] = cleaned;
  } else {
    delete all[slug];
  }

  await admin.from("settings").upsert(
    { key: SETTINGS_KEY, value: JSON.stringify(all), updated_at: new Date().toISOString() },
    { onConflict: "key" }
  );
}
