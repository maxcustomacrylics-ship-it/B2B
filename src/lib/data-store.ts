import "server-only";
import fs from "fs";
import path from "path";
import { getStore } from "@netlify/blobs";
import type { Product, Service, CaseStudy, BlogPost, Testimonial } from "@/lib/types";

// ─── Seed data (used as initial values when store is empty) ───
import { products as seedProducts } from "@/data/products";
import { services as seedServices } from "@/data/services";
import { caseStudies as seedCaseStudies } from "@/data/cases";
import { blogPosts as seedBlogPosts } from "@/data/blogs";
import { testimonials as seedTestimonials } from "@/data/testimonials";

// ─── Config ───
const isNetlify = process.env.NETLIFY === "true";
const DATA_DIR = path.join(process.cwd(), "src", "data");
const MSG_DIR = path.join(process.cwd(), "src", "messages");

// ─── Netlify Blobs store ───
const store = isNetlify ? getStore("acrylic-data") : null;

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

// ─── Seed data lookup ───
type SeedKey = "products" | "services" | "cases" | "blogs" | "testimonials";
const seedMap: Record<SeedKey, unknown[]> = {
  products: seedProducts,
  services: seedServices,
  cases: seedCaseStudies,
  blogs: seedBlogPosts,
  testimonials: seedTestimonials,
};

// ─── Helpers ───
function ensureDir(dir: string): void {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function readData<T>(key: string, fallback: T, seed?: unknown[]): Promise<T> {
  if (store) {
    // ── Netlify production: read from Blobs ──
    try {
      const raw = await store.get(key);
      if (raw !== null) {
        const text = typeof raw === "string" ? raw : new TextDecoder().decode(raw);
        return JSON.parse(text) as T;
      }
    } catch (e) {
      console.warn(`[data-store] Failed to read "${key}" from Netlify Blobs:`, e);
    }
    // First-time: seed initial data if available
    if (seed && Array.isArray(fallback)) {
      await store.set(key, JSON.stringify(seed));
      return seed as T;
    }
    return fallback;
  } else {
    // ── Local development: read from JSON file ──
    const filePath = path.join(DATA_DIR, `${key}.json`);
    try {
      if (fs.existsSync(filePath)) {
        return JSON.parse(fs.readFileSync(filePath, "utf-8")) as T;
      }
    } catch {
      console.warn(`[data-store] Failed to read ${filePath}`);
    }
    // First-time: seed from initial data and write to file
    if (seed && Array.isArray(fallback) && fallback.length === 0) {
      ensureDir(DATA_DIR);
      fs.writeFileSync(filePath, JSON.stringify(seed, null, 2), "utf-8");
      return seed as T;
    }
    return fallback;
  }
}

async function writeData<T>(key: string, data: T): Promise<void> {
  if (store) {
    await store.set(key, JSON.stringify(data));
  } else {
    const filePath = path.join(DATA_DIR, `${key}.json`);
    ensureDir(DATA_DIR);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
  }
}

// ═══════════════════════════════════════════
//  Products
// ═══════════════════════════════════════════

export async function getProducts(): Promise<Product[]> {
  return readData<Product[]>("products", [], seedProducts);
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const all = await getProducts();
  return all.find((p) => p.slug === slug);
}

export async function saveProducts(products: Product[]): Promise<void> {
  await writeData("products", products);
}

// ═══════════════════════════════════════════
//  Services
// ═══════════════════════════════════════════

export async function getServices(): Promise<Service[]> {
  return readData<Service[]>("services", [], seedServices);
}

export async function saveServices(services: Service[]): Promise<void> {
  await writeData("services", services);
}

// ═══════════════════════════════════════════
//  Case Studies
// ═══════════════════════════════════════════

export async function getCaseStudies(): Promise<CaseStudy[]> {
  return readData<CaseStudy[]>("cases", [], seedCaseStudies);
}

export async function getCaseBySlug(slug: string): Promise<CaseStudy | undefined> {
  const all = await getCaseStudies();
  return all.find((c) => c.slug === slug);
}

export async function saveCaseStudies(cases: CaseStudy[]): Promise<void> {
  await writeData("cases", cases);
}

// ═══════════════════════════════════════════
//  Blog Posts
// ═══════════════════════════════════════════

export async function getBlogPosts(): Promise<BlogPost[]> {
  return readData<BlogPost[]>("blogs", [], seedBlogPosts);
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | undefined> {
  const all = await getBlogPosts();
  return all.find((b) => b.slug === slug);
}

export async function saveBlogPosts(posts: BlogPost[]): Promise<void> {
  await writeData("blogs", posts);
}

// ═══════════════════════════════════════════
//  Testimonials
// ═══════════════════════════════════════════

export async function getTestimonials(): Promise<Testimonial[]> {
  return readData<Testimonial[]>("testimonials", [], seedTestimonials);
}

export async function saveTestimonials(testimonials: Testimonial[]): Promise<void> {
  await writeData("testimonials", testimonials);
}

// ═══════════════════════════════════════════
//  Settings
// ═══════════════════════════════════════════

export async function getSettings(): Promise<Settings> {
  if (store) {
    try {
      const raw = await store.get("settings");
      if (raw !== null) {
        const text = typeof raw === "string" ? raw : new TextDecoder().decode(raw);
        return JSON.parse(text) as Settings;
      }
    } catch {
      console.warn('[data-store] Failed to read "settings" from Netlify Blobs');
    }
    // Seed default settings
    await store.set("settings", JSON.stringify(defaultSettings));
    return defaultSettings;
  } else {
    ensureDir(DATA_DIR);
    const sp = path.join(DATA_DIR, "settings.json");
    try {
      if (fs.existsSync(sp)) {
        return JSON.parse(fs.readFileSync(sp, "utf-8")) as Settings;
      }
    } catch {
      console.warn("[data-store] Failed to read settings.json");
    }
    // Seed default
    fs.writeFileSync(sp, JSON.stringify(defaultSettings, null, 2), "utf-8");
    return defaultSettings;
  }
}

export async function saveSettings(settings: Settings): Promise<void> {
  await writeData("settings", settings);
}

// ═══════════════════════════════════════════
//  Messages (i18n overrides)
// ═══════════════════════════════════════════

type Messages = Record<string, unknown>;

export async function getMessagesData(locale = "en"): Promise<Messages> {
  const key = `messages:${locale}`;
  if (store) {
    try {
      const raw = await store.get(key);
      if (raw !== null) {
        const text = typeof raw === "string" ? raw : new TextDecoder().decode(raw);
        return JSON.parse(text) as Messages;
      }
    } catch {
      console.warn(`[data-store] Failed to read "${key}" from Netlify Blobs`);
    }
    return {};
  } else {
    const fp = path.join(MSG_DIR, `${locale}.json`);
    try {
      if (fs.existsSync(fp)) {
        return JSON.parse(fs.readFileSync(fp, "utf-8")) as Messages;
      }
    } catch {
      console.warn(`[data-store] Failed to read ${fp}`);
    }
    return {};
  }
}

export async function saveMessagesData(messages: Messages, locale = "en"): Promise<void> {
  const key = `messages:${locale}`;
  if (store) {
    await store.set(key, JSON.stringify(messages));
  } else {
    ensureDir(MSG_DIR);
    const fp = path.join(MSG_DIR, `${locale}.json`);
    fs.writeFileSync(fp, JSON.stringify(messages, null, 2), "utf-8");
  }
}
