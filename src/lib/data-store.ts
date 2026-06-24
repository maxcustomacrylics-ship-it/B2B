import "server-only";
import fs from "fs";
import path from "path";
import { getSupabase, hasSupabase } from "@/lib/supabase";
import type { Product, Service, CaseStudy, BlogPost, Testimonial, PricingConfig } from "@/lib/types";

// ─── Seed data ───
import { products as seedProducts } from "@/data/products";
import { services as seedServices } from "@/data/services";
import { caseStudies as seedCaseStudies } from "@/data/cases";
import { blogPosts as seedBlogPosts } from "@/data/blogs";
import { testimonials as seedTestimonials } from "@/data/testimonials";
import { 
  materialRates, 
  complexityRates, 
  edgeTreatmentRates, 
  surfaceFinishRates, 
  leadTimeMultipliers, 
  quantityDiscounts 
} from "@/data/pricing";

// ─── Config ───
const DATA_DIR = path.join(process.cwd(), "src", "data");
const MSG_DIR = path.join(process.cwd(), "src", "messages");

// ─── Types ───
export type Settings = {
  companyName: string;
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
  businessHours: string;
};

const defaultSettings: Settings = {
  companyName: "AcrylicPro Custom",
  phone: "+86 138-0000-0000",
  email: "info@acrylicb2b.com",
  address: "No. 888, Industrial Avenue, Guangzhou, China",
  whatsapp: "8613800000000",
  businessHours: "Mon-Fri: 8:00 AM - 6:00 PM (CST)",
};

const defaultPricingConfig: PricingConfig = {
  materialRates,
  complexityRates,
  edgeTreatmentRates,
  surfaceFinishRates,
  leadTimeMultipliers,
  quantityDiscounts,
};

// ─── Helpers ───
function ensureDir(dir: string): void {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function snakeToCamel(record: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(record)) {
    // snake_case to camelCase
    const camel = k.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
    out[camel] = v;
  }
  return out;
}

function camelToSnake(record: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(record)) {
    // camelCase to snake_case, skip supabase meta fields
    if (k === "createdAt" || k === "updatedAt") continue;
    const snake = k.replace(/[A-Z]/g, (c) => `_${c.toLowerCase()}`);
    out[snake] = v;
  }
  return out;
}

// ═══════════════════════════════════════════
//  PRODUCTS
// ═══════════════════════════════════════════

export async function getProducts(): Promise<Product[]> {
  if (hasSupabase()) {
    const { data, error } = await getSupabase()!.from("products").select("*").order("id", { ascending: false });
    if (error) { console.error("[supabase] getProducts:", error); return []; }
    return (data || []).map((r) => snakeToCamel(r) as unknown as Product);
  }

  // Local fallback
  const fp = path.join(DATA_DIR, "products.json");
  try {
    if (fs.existsSync(fp)) return JSON.parse(fs.readFileSync(fp, "utf-8"));
  } catch { /* fall through */ }
  return seedProducts;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const all = await getProducts();
  return all.find((p) => p.slug === slug);
}

export async function saveProducts(products: Product[]): Promise<void> {
  if (hasSupabase()) {
    // Upsert by slug
    for (const p of products) {
      const row = camelToSnake(p as unknown as Record<string, unknown>);
      row.updated_at = new Date().toISOString();
      const { error } = await getSupabase()!.from("products").upsert(row, { onConflict: "slug" });
      if (error) console.error("[supabase] saveProducts:", error);
    }
    return;
  }

  // Local fallback
  ensureDir(DATA_DIR);
  fs.writeFileSync(path.join(DATA_DIR, "products.json"), JSON.stringify(products, null, 2), "utf-8");
}

// ═══════════════════════════════════════════
//  SERVICES
// ═══════════════════════════════════════════

export async function getServices(): Promise<Service[]> {
  if (hasSupabase()) {
    const { data, error } = await getSupabase()!.from("services").select("*").order("id", { ascending: true });
    if (error) { console.error("[supabase] getServices:", error); return []; }
    return (data || []).map((r) => snakeToCamel(r) as unknown as Service);
  }

  const fp = path.join(DATA_DIR, "services.json");
  try { if (fs.existsSync(fp)) return JSON.parse(fs.readFileSync(fp, "utf-8")); } catch {}
  return seedServices;
}

export async function saveServices(services: Service[]): Promise<void> {
  if (hasSupabase()) {
    for (const s of services) {
      const row = camelToSnake(s as unknown as Record<string, unknown>);
      row.updated_at = new Date().toISOString();
      const { error } = await getSupabase()!.from("services").upsert(row, { onConflict: "slug" });
      if (error) console.error("[supabase] saveServices:", error);
    }
    return;
  }

  ensureDir(DATA_DIR);
  fs.writeFileSync(path.join(DATA_DIR, "services.json"), JSON.stringify(services, null, 2), "utf-8");
}

// ═══════════════════════════════════════════
//  CASE STUDIES
// ═══════════════════════════════════════════

export async function getCaseStudies(): Promise<CaseStudy[]> {
  if (hasSupabase()) {
    const { data, error } = await getSupabase()!.from("case_studies").select("*").order("id", { ascending: false });
    if (error) { console.error("[supabase] getCaseStudies:", error); return []; }
    return (data || []).map((r) => snakeToCamel(r) as unknown as CaseStudy);
  }

  const fp = path.join(DATA_DIR, "cases.json");
  try { if (fs.existsSync(fp)) return JSON.parse(fs.readFileSync(fp, "utf-8")); } catch {}
  return seedCaseStudies;
}

export async function getCaseBySlug(slug: string): Promise<CaseStudy | undefined> {
  const all = await getCaseStudies();
  return all.find((c) => c.slug === slug);
}

export async function saveCaseStudies(cases: CaseStudy[]): Promise<void> {
  if (hasSupabase()) {
    for (const c of cases) {
      const row = camelToSnake(c as unknown as Record<string, unknown>);
      row.updated_at = new Date().toISOString();
      const { error } = await getSupabase()!.from("case_studies").upsert(row, { onConflict: "slug" });
      if (error) console.error("[supabase] saveCaseStudies:", error);
    }
    return;
  }

  ensureDir(DATA_DIR);
  fs.writeFileSync(path.join(DATA_DIR, "cases.json"), JSON.stringify(cases, null, 2), "utf-8");
}

// ═══════════════════════════════════════════
//  BLOG POSTS
// ═══════════════════════════════════════════

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (hasSupabase()) {
    const { data, error } = await getSupabase()!.from("blog_posts").select("*").order("id", { ascending: false });
    if (error) { console.error("[supabase] getBlogPosts:", error); return []; }
    return (data || []).map((r) => snakeToCamel(r) as unknown as BlogPost);
  }

  const fp = path.join(DATA_DIR, "blogs.json");
  try { if (fs.existsSync(fp)) return JSON.parse(fs.readFileSync(fp, "utf-8")); } catch {}
  return seedBlogPosts;
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | undefined> {
  const all = await getBlogPosts();
  return all.find((b) => b.slug === slug);
}

export async function saveBlogPosts(posts: BlogPost[]): Promise<void> {
  if (hasSupabase()) {
    for (const p of posts) {
      const row = camelToSnake(p as unknown as Record<string, unknown>);
      row.updated_at = new Date().toISOString();
      const { error } = await getSupabase()!.from("blog_posts").upsert(row, { onConflict: "slug" });
      if (error) console.error("[supabase] saveBlogPosts:", error);
    }
    return;
  }

  ensureDir(DATA_DIR);
  fs.writeFileSync(path.join(DATA_DIR, "blogs.json"), JSON.stringify(posts, null, 2), "utf-8");
}

// ═══════════════════════════════════════════
//  TESTIMONIALS
// ═══════════════════════════════════════════

export async function getTestimonials(): Promise<Testimonial[]> {
  if (hasSupabase()) {
    const { data, error } = await getSupabase()!.from("testimonials").select("*").order("id", { ascending: true });
    if (error) { console.error("[supabase] getTestimonials:", error); return []; }
    return (data || []).map((r) => snakeToCamel(r) as unknown as Testimonial);
  }

  const fp = path.join(DATA_DIR, "testimonials.json");
  try { if (fs.existsSync(fp)) return JSON.parse(fs.readFileSync(fp, "utf-8")); } catch {}
  return seedTestimonials;
}

export async function saveTestimonials(testimonials: Testimonial[]): Promise<void> {
  if (hasSupabase()) {
    for (const t of testimonials) {
      const row = camelToSnake(t as unknown as Record<string, unknown>);
      row.updated_at = new Date().toISOString();
      const { error } = await getSupabase()!.from("testimonials").upsert(row, { onConflict: "id" });
      if (error) console.error("[supabase] saveTestimonials:", error);
    }
    return;
  }

  ensureDir(DATA_DIR);
  fs.writeFileSync(path.join(DATA_DIR, "testimonials.json"), JSON.stringify(testimonials, null, 2), "utf-8");
}

// ═══════════════════════════════════════════
//  SETTINGS
// ═══════════════════════════════════════════

export async function getSettings(): Promise<Settings> {
  if (hasSupabase()) {
    const { data, error } = await getSupabase()!.from("settings").select("*");
    if (error) { console.error("[supabase] getSettings:", error); return defaultSettings; }
    const map: Record<string, string> = {};
    for (const row of data || []) map[row.key] = row.value;
    return { ...defaultSettings, ...map };
  }

  const sp = path.join(DATA_DIR, "settings.json");
  try {
    if (fs.existsSync(sp)) return JSON.parse(fs.readFileSync(sp, "utf-8"));
  } catch {}
  return defaultSettings;
}

export async function saveSettings(settings: Settings): Promise<void> {
  if (hasSupabase()) {
    const rows = Object.entries(settings).map(([key, value]) => ({
      key,
      value,
      updated_at: new Date().toISOString(),
    }));

    // Delete all existing, then insert new batch — more reliable than upsert
    const sb = getSupabase()!;
    await sb.from("settings").delete().neq("key", "__never__"); // deletes all
    const { error } = await sb.from("settings").insert(rows);
    if (error) console.error("[supabase] saveSettings:", error);
    return;
  }

  ensureDir(DATA_DIR);
  fs.writeFileSync(path.join(DATA_DIR, "settings.json"), JSON.stringify(settings, null, 2), "utf-8");
}

// ═══════════════════════════════════════════
//  PRICING
// ═══════════════════════════════════════════

export async function getPricingConfig(): Promise<PricingConfig> {
  if (hasSupabase()) {
    const { data, error } = await getSupabase()!
      .from("pricing_config")
      .select("*")
      .order("updated_at", { ascending: false })
      .limit(1)
      .single();
    if (!error && data) {
      const snakeCased = snakeToCamel(data) as unknown as PricingConfig;
      return snakeCased;
    }
  }
  return defaultPricingConfig;
}

export async function savePricingConfig(config: PricingConfig): Promise<void> {
  if (hasSupabase()) {
    const row = camelToSnake(config as unknown as Record<string, unknown>);
    row.id = "default";
    row.updated_at = new Date().toISOString();
    const { error } = await getSupabase()!
      .from("pricing_config")
      .upsert(row, { onConflict: "id" });
    if (error) console.error("[supabase] savePricingConfig:", error);
    return;
  }
}

// ═══════════════════════════════════════════
//  MESSAGES (i18n)
// ═══════════════════════════════════════════

type Messages = Record<string, unknown>;

export async function getMessagesData(locale = "en"): Promise<Messages> {
  if (hasSupabase()) {
    const key = `messages_${locale}`;
    const { data, error } = await getSupabase()!.from("messages").select("*").eq("key", key).single();
    if (error || !data) return {};
    return data.value as Messages;
  }

  const fp = path.join(MSG_DIR, `${locale}.json`);
  try {
    if (fs.existsSync(fp)) return JSON.parse(fs.readFileSync(fp, "utf-8"));
  } catch {}
  return {};
}

export async function saveMessagesData(messages: Messages, locale = "en"): Promise<void> {
  if (hasSupabase()) {
    const key = `messages_${locale}`;
    const { error } = await getSupabase()!.from("messages").upsert({ key, value: messages, updated_at: new Date().toISOString() }, { onConflict: "key" });
    if (error) console.error("[supabase] saveMessagesData:", error);
    return;
  }

  ensureDir(MSG_DIR);
  fs.writeFileSync(path.join(MSG_DIR, `${locale}.json`), JSON.stringify(messages, null, 2), "utf-8");
}
