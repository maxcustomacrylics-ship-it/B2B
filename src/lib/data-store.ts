import "server-only";
import fs from "fs";
import path from "path";
import { getSupabase, getSupabaseAdmin, hasSupabase } from "@/lib/supabase";
import type { Product, Service, CaseStudy, BlogPost, Guide, Testimonial, PricingConfig } from "@/lib/types";

// ─── Seed data ───
import { products as seedProducts } from "@/data/products";
import { services as seedServices } from "@/data/services";
import { caseStudies as seedCaseStudies } from "@/data/cases";
import { blogPosts as seedBlogPosts } from "@/data/blogs";
import { seedGuides } from "@/data/guides";
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
// Vercel read-only FS: use /tmp; local dev: use src/data
const DATA_DIR = process.env.VERCEL ? "/tmp/data" : path.join(process.cwd(), "src", "data");
const MSG_DIR = process.env.VERCEL ? "/tmp/messages" : path.join(process.cwd(), "src", "messages");

// ─── Types ───
export type Settings = Record<string, string>;

const defaultSettings: Settings = {
  companyName: "AcrylicPro Custom",
  phone: "+86 138-0000-0000",
  email: "info@acrylicb2b.com",
  address: "No. 888, Industrial Avenue, Guangzhou, China",
  whatsapp: "8613800000000",
  businessHours: "Mon-Fri: 8:00 AM - 6:00 PM (CST)",
  heroHeadline: "Custom Acrylic Fabrication & Sourcing Solutions",
  heroSubheadline: "We help businesses develop custom acrylic products by connecting engineering expertise, qualified manufacturing partners and strict quality control into one reliable project workflow.",
  heroBadge: "Trusted by 200+ Businesses Worldwide",
  ctaTitle: "Ready to Start Your Custom Acrylic Project?",
  ctaSubtitle: "Get a free quote within 24 hours. No minimum order required.",
  ctaButton: "Request a Quote",
  heroImg1: "", heroImg2: "", heroImg3: "", heroImg4: "",
  whyChooseImg1: "", whyChooseImg2: "", whyChooseImg3: "", whyChooseImg4: "",
  whyChooseImg5: "", whyChooseImg6: "", whyChooseImg7: "", whyChooseImg8: "",
  customImg1: "", customImg2: "", customImg3: "", customImg4: "",
  customImg5: "", customImg6: "", customImg7: "", customImg8: "",
  factoryImg1: "", factoryImg2: "", factoryImg3: "", factoryImg4: "", factoryImg5: "",
  statYears: "15+", statArea: "1,000+", statCountries: "30+", statProducts: "200+",
  heroBtnPrimaryUrl: "/contact", heroBtnSecondaryUrl: "/products",
  factoryTitle: "How We Deliver Your Project", factoryDesc: "From initial inquiry to final delivery — a proven process backed by engineering review, quality inspection, and reliable logistics.",
  blogTitle: "Industry Insights", blogDesc: "Expert articles on acrylic manufacturing, material selection, and industry best practices.",
  rfqTitle: "Request a Free Quote", rfqDesc: "Tell us about your project and receive a detailed quotation within 24 hours. No minimum order — we handle prototypes to mass production.", rfqSuccess: "Thank you! We will get back to you within 24 hours.",
  catImg1: "", catImg2: "", catImg3: "", catImg4: "", catImg5: "", catImg6: "", catImg7: "", catImg8: "", catImg9: "",
  capImg1: "", capImg2: "", capImg3: "", capImg4: "", capImg5: "",
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

/** Convert single image field (string or JSON array string) to images array — for blog posts only */
function blogImageToArray(record: Record<string, unknown>): Record<string, unknown> {
  if ("image" in record) {
    const raw = record.image;
    delete record.image;
    if (typeof raw === "string" && raw.trim().startsWith("[")) {
      try { (record as any).images = JSON.parse(raw as string); } catch { (record as any).images = raw ? [raw as string] : []; }
    } else if (typeof raw === "string" && raw.trim()) {
      (record as any).images = [raw as string];
    } else {
      (record as any).images = [];
    }
  }
  if (!(record as any).images) (record as any).images = [];
  return record;
}

function camelToSnake(record: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(record)) {
    // camelCase to snake_case, skip app-level fields not in Supabase
    if (k === "createdAt" || k === "updatedAt" || k === "sort") continue;
    const snake = k.replace(/[A-Z]/g, (c) => `_${c.toLowerCase()}`);
    out[snake] = v;
  }
  return out;
}

/** Convert images array to image JSON string — for blog posts only (Supabase uses text column) */
function blogImagesToSnake(record: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(record)) {
    if (k === "createdAt" || k === "updatedAt" || k === "sort") continue;
    if (k === "images") {
      out.image = JSON.stringify(v);
      continue;
    }
    const snake = k.replace(/[A-Z]/g, (c) => `_${c.toLowerCase()}`);
    out[snake] = v;
  }
  return out;
}

// ═══════════════════════════════════════════
//  PRODUCTS
// ═══════════════════════════════════════════

export async function getProducts(): Promise<Product[]> {
  // Try Supabase REST API first
  const supabaseUrl = SUPABASE_URL;
  const supabaseKey = SUPABASE_ANON_KEY;
  if (supabaseUrl && supabaseKey) {
    try {
      const res = await fetch(`${supabaseUrl}/rest/v1/products?select=*&order=id.desc`, {
        headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` },
        cache: "no-store",
      });
      if (res.ok) {
        const data = await res.json();
        if (data && data.length > 0) return data.map((r: any) => snakeToCamel(r) as unknown as Product);
      }
    } catch {}
  }

  // Read local JSON
  const fp = path.join(DATA_DIR, "products.json");
  try { if (fs.existsSync(fp)) return JSON.parse(fs.readFileSync(fp, "utf-8")); } catch {}

  return seedProducts;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const all = await getProducts();
  return all.find((p) => p.slug === slug);
}

export async function saveProducts(products: Product[]): Promise<void> {
  // Always save to local JSON
  ensureDir(DATA_DIR);
  fs.writeFileSync(path.join(DATA_DIR, "products.json"), JSON.stringify(products, null, 2), "utf-8");

  // Sync to Supabase: PATCH existing (by slug) → if not found, POST new
  const supabaseUrl = SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || SUPABASE_ANON_KEY;
  if (supabaseUrl && supabaseKey) {
    try {
      for (const p of products) {
        const row = { ...camelToSnake(p as unknown as Record<string, unknown>), updated_at: new Date().toISOString() };
        // PATCH by slug — returns 204 even if no rows matched, so check with GET first
        const check = await fetch(`${supabaseUrl}/rest/v1/products?slug=eq.${p.slug}&select=slug`, {
          headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` },
        });
        const exists = await check.json();
        if (exists && Array.isArray(exists) && exists.length > 0) {
          // Update existing
          await fetch(`${supabaseUrl}/rest/v1/products?slug=eq.${p.slug}`, {
            method: "PATCH",
            headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}`, "Content-Type": "application/json", Prefer: "return=minimal" },
            body: JSON.stringify(row),
          });
        } else {
          // Insert new
          await fetch(`${supabaseUrl}/rest/v1/products`, {
            method: "POST",
            headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}`, "Content-Type": "application/json", Prefer: "return=minimal" },
            body: JSON.stringify(row),
          });
        }
      }
    } catch (e) { console.error("[supabase] saveProducts failed:", e); }
  }
}

// ═══════════════════════════════════════════
//  SHARED HELPERS
// ═══════════════════════════════════════════

const SUPABASE_URL = "https://xwchzipgujhughzngolj.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3Y2h6aXBndWpodWdoem5nb2xqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExNTM5NDMsImV4cCI6MjA5NjcyOTk0M30.JSAINuIET8-j_e_c8oxXNxP-cLxp60q2fwiXgOcXBZQ";

function getSupabaseHeaders() {
  return { url: SUPABASE_URL, key: SUPABASE_ANON_KEY };
}

async function supabaseGet(table: string): Promise<any[] | null> {
  const h = getSupabaseHeaders();
  if (!h) return null;
  try {
    const res = await fetch(`${h.url}/rest/v1/${table}?select=*`, {
      headers: { apikey: h.key, Authorization: `Bearer ${h.key}` },
      cache: "no-store",
    });
    if (res.ok) return await res.json();
  } catch {}
  return null;
}

async function supabaseUpsert(table: string, rows: Record<string, unknown>[], conflictKey: string): Promise<void> {
  const url = SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || SUPABASE_ANON_KEY;
  try {
    for (const row of rows) {
      const r = { ...row, updated_at: new Date().toISOString() };
      const val = (r as any)[conflictKey];
      // Check if exists
      const check = await fetch(`${url}/rest/v1/${table}?${conflictKey}=eq.${val}&select=${conflictKey}`, {
        headers: { apikey: key, Authorization: `Bearer ${key}` },
      });
      const data = await check.json();
      if (data && Array.isArray(data) && data.length > 0) {
        // Update
        await fetch(`${url}/rest/v1/${table}?${conflictKey}=eq.${val}`, {
          method: "PATCH",
          headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json", Prefer: "return=minimal" },
          body: JSON.stringify(r),
        });
      } else {
        // Insert
        await fetch(`${url}/rest/v1/${table}`, {
          method: "POST",
          headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json", Prefer: "return=minimal" },
          body: JSON.stringify(r),
        });
      }
    }
  } catch (e) { console.error(`[supabase] ${table} upsert failed:`, e); }
}

// ═══════════════════════════════════════════
//  SERVICES
// ═══════════════════════════════════════════

export async function getServices(): Promise<Service[]> {
  const supabase = await supabaseGet("services");
  if (supabase) return supabase.map((r) => snakeToCamel(r) as unknown as Service);
  const fp = path.join(DATA_DIR, "services.json");
  try { if (fs.existsSync(fp)) return JSON.parse(fs.readFileSync(fp, "utf-8")); } catch {}
  return seedServices;
}

export async function saveServices(services: Service[]): Promise<void> {
  ensureDir(DATA_DIR);
  fs.writeFileSync(path.join(DATA_DIR, "services.json"), JSON.stringify(services, null, 2), "utf-8");
  await supabaseUpsert("services", services.map((s) => camelToSnake(s as unknown as Record<string, unknown>)), "slug");
}

// ═══════════════════════════════════════════
//  CASE STUDIES
// ═══════════════════════════════════════════

export async function getCaseStudies(): Promise<CaseStudy[]> {
  const supabase = await supabaseGet("case_studies");
  if (supabase) return supabase.map((r) => snakeToCamel(r) as unknown as CaseStudy);
  const fp = path.join(DATA_DIR, "cases.json");
  try { if (fs.existsSync(fp)) return JSON.parse(fs.readFileSync(fp, "utf-8")); } catch {}
  return seedCaseStudies;
}

export async function getCaseBySlug(slug: string): Promise<CaseStudy | undefined> {
  const all = await getCaseStudies();
  return all.find((c) => c.slug === slug);
}

export async function saveCaseStudies(cases: CaseStudy[]): Promise<void> {
  ensureDir(DATA_DIR);
  fs.writeFileSync(path.join(DATA_DIR, "cases.json"), JSON.stringify(cases, null, 2), "utf-8");
  await supabaseUpsert("case_studies", cases.map((c) => camelToSnake(c as unknown as Record<string, unknown>)), "slug");
}

// ═══════════════════════════════════════════
//  BLOG POSTS
// ═══════════════════════════════════════════

export async function getBlogPosts(): Promise<BlogPost[]> {
  const supabase = await supabaseGet("blog_posts");
  if (supabase) return supabase.map((r) => blogImageToArray(snakeToCamel(r)) as unknown as BlogPost);
  const fp = path.join(DATA_DIR, "blogs.json");
  try { if (fs.existsSync(fp)) return JSON.parse(fs.readFileSync(fp, "utf-8")); } catch {}
  return seedBlogPosts;
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | undefined> {
  const all = await getBlogPosts();
  return all.find((b) => b.slug === slug);
}

export async function saveBlogPosts(posts: BlogPost[]): Promise<void> {
  ensureDir(DATA_DIR);
  fs.writeFileSync(path.join(DATA_DIR, "blogs.json"), JSON.stringify(posts, null, 2), "utf-8");
  await supabaseUpsert("blog_posts", posts.map((p) => blogImagesToSnake(p as unknown as Record<string, unknown>)), "slug");
}

// ═══════════════════════════════════════════
//  GUIDES (Featured Guides)
// ═══════════════════════════════════════════

export async function getGuides(): Promise<Guide[]> {
  // Try Supabase settings table (shared across Vercel instances)
  const supabaseUrl = SUPABASE_URL;
  const supabaseKey = SUPABASE_ANON_KEY;
  if (supabaseUrl && supabaseKey) {
    try {
      const res = await fetch(`${supabaseUrl}/rest/v1/settings?key=eq.guides_data&select=value`, {
        headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` },
        cache: "no-store",
      });
      if (res.ok) {
        const rows = await res.json();
        if (rows && rows.length > 0 && rows[0].value) {
          const parsed = JSON.parse(rows[0].value);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed as Guide[];
        }
      }
    } catch {}
  }

  // Fall back to local JSON
  const fp = path.join(DATA_DIR, "guides.json");
  try { if (fs.existsSync(fp)) return JSON.parse(fs.readFileSync(fp, "utf-8")); } catch {}

  return seedGuides;
}

export async function getGuideBySlug(slug: string): Promise<Guide | undefined> {
  const all = await getGuides();
  return all.find((g) => g.slug === slug);
}

export async function saveGuides(guides: Guide[]): Promise<void> {
  // Always save to local JSON
  ensureDir(DATA_DIR);
  fs.writeFileSync(path.join(DATA_DIR, "guides.json"), JSON.stringify(guides, null, 2), "utf-8");

  // Sync to Supabase settings (shared storage across Vercel instances)
  const supabaseUrl = SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || SUPABASE_ANON_KEY;
  if (supabaseUrl && supabaseKey) {
    try {
      await fetch(`${supabaseUrl}/rest/v1/settings`, {
        method: "POST",
        headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}`, "Content-Type": "application/json", Prefer: "resolution=merge-duplicates" },
        body: JSON.stringify({ key: "guides_data", value: JSON.stringify(guides), updated_at: new Date().toISOString() }),
      });
    } catch (e) { console.error("[supabase] saveGuides failed:", e); }
  }
}

// ═══════════════════════════════════════════
//  TESTIMONIALS
// ═══════════════════════════════════════════

export async function getTestimonials(): Promise<Testimonial[]> {
  const supabase = await supabaseGet("testimonials");
  if (supabase) return supabase.map((r) => snakeToCamel(r) as unknown as Testimonial);
  const fp = path.join(DATA_DIR, "testimonials.json");
  try { if (fs.existsSync(fp)) return JSON.parse(fs.readFileSync(fp, "utf-8")); } catch {}
  return seedTestimonials;
}

export async function saveTestimonials(testimonials: Testimonial[]): Promise<void> {
  ensureDir(DATA_DIR);
  fs.writeFileSync(path.join(DATA_DIR, "testimonials.json"), JSON.stringify(testimonials, null, 2), "utf-8");
  await supabaseUpsert("testimonials", testimonials.map((t) => camelToSnake(t as unknown as Record<string, unknown>)), "id");
}

// ═══════════════════════════════════════════
//  SETTINGS
// ═══════════════════════════════════════════

export async function getSettings(): Promise<Settings> {
  let result: Settings = { ...defaultSettings };

  // Try Supabase first — use direct fetch to avoid client creation issues
  const supabaseUrl = SUPABASE_URL;
  const supabaseKey = SUPABASE_ANON_KEY;
  if (supabaseUrl && supabaseKey) {
    try {
      const res = await fetch(`${supabaseUrl}/rest/v1/settings?select=*`, {
        headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` },
        cache: "no-store",
      });
      if (res.ok) {
        const rows = await res.json();
        for (const row of rows) result[row.key] = row.value;
      }
    } catch { /* fall through to local */ }
  }

  // Merge local JSON
  const sp = path.join(DATA_DIR, "settings.json");
  try { if (fs.existsSync(sp)) { const local = JSON.parse(fs.readFileSync(sp, "utf-8")); result = { ...result, ...local }; } } catch {}

  return result;
}

export async function saveSettings(settings: Settings): Promise<void> {
  // Always try local file first (/tmp on Vercel, src/data locally)
  try {
    ensureDir(DATA_DIR);
    const fp = path.join(DATA_DIR, "settings.json");
    fs.writeFileSync(fp, JSON.stringify(settings, null, 2), "utf-8");
  } catch (e) { console.error("[settings] Local save failed:", e); }

  // Sync to Supabase using direct REST API with UPSERT
  const supabaseUrl = SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || SUPABASE_ANON_KEY;
  if (supabaseUrl && supabaseKey) {
    try {
      const entries = Object.entries(settings);
      for (let i = 0; i < entries.length; i += 50) {
        const batch = entries.slice(i, i + 50).map(([key, value]) => ({
          key, value, updated_at: new Date().toISOString(),
        }));
        // UPSERT: update if exists, insert if not
        await fetch(`${supabaseUrl}/rest/v1/settings`, {
          method: "POST",
          headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}`, "Content-Type": "application/json", Prefer: "resolution=merge-duplicates" },
          body: JSON.stringify(batch),
        });
      }
    } catch (e) { console.error("[settings] Supabase sync failed:", e); }
  }
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
