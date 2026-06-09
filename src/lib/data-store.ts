import "server-only";
import fs from "fs";
import path from "path";
import type { Product, Service, CaseStudy, BlogPost, Testimonial } from "@/lib/types";

const DATA_DIR = path.join(process.cwd(), "src", "data");
const MSG_DIR = path.join(process.cwd(), "src", "messages");

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

function ensureDir(dir: string): void {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function readJson<T>(filePath: string, fallback: T): T {
  try {
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, "utf-8")) as T;
    }
  } catch {
    console.warn(`Failed to read ${filePath}`);
  }
  return fallback;
}

function writeJson<T>(filePath: string, data: T): void {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}

// === Products ===
const productsPath = () => path.join(DATA_DIR, "products.json");

export function getProducts(): Product[] {
  return readJson<Product[]>(productsPath(), []);
}

export function getProductBySlug(slug: string): Product | undefined {
  return getProducts().find((p) => p.slug === slug);
}

export function saveProducts(products: Product[]): void {
  ensureDir(DATA_DIR);
  writeJson(productsPath(), products);
}

// === Services ===
const servicesPath = () => path.join(DATA_DIR, "services.json");

export function getServices(): Service[] {
  return readJson<Service[]>(servicesPath(), []);
}

export function saveServices(services: Service[]): void {
  ensureDir(DATA_DIR);
  writeJson(servicesPath(), services);
}

// === Case Studies ===
const casesPath = () => path.join(DATA_DIR, "cases.json");

export function getCaseStudies(): CaseStudy[] {
  return readJson<CaseStudy[]>(casesPath(), []);
}

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return getCaseStudies().find((c) => c.slug === slug);
}

export function saveCaseStudies(cases: CaseStudy[]): void {
  ensureDir(DATA_DIR);
  writeJson(casesPath(), cases);
}

// === Blog Posts ===
const blogsPath = () => path.join(DATA_DIR, "blogs.json");

export function getBlogPosts(): BlogPost[] {
  return readJson<BlogPost[]>(blogsPath(), []);
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return getBlogPosts().find((b) => b.slug === slug);
}

export function saveBlogPosts(posts: BlogPost[]): void {
  ensureDir(DATA_DIR);
  writeJson(blogsPath(), posts);
}

// === Testimonials ===
const testimonialsPath = () => path.join(DATA_DIR, "testimonials.json");

export function getTestimonials(): Testimonial[] {
  return readJson<Testimonial[]>(testimonialsPath(), []);
}

export function saveTestimonials(testimonials: Testimonial[]): void {
  ensureDir(DATA_DIR);
  writeJson(testimonialsPath(), testimonials);
}

// === Settings ===
const settingsPath = () => path.join(DATA_DIR, "settings.json");

export function getSettings(): Settings {
  ensureDir(DATA_DIR);
  const sp = settingsPath();
  if (!fs.existsSync(sp)) {
    writeJson(sp, defaultSettings);
    return defaultSettings;
  }
  return readJson<Settings>(sp, defaultSettings);
}

export function saveSettings(settings: Settings): void {
  ensureDir(DATA_DIR);
  writeJson(settingsPath(), settings);
}

// === Messages (i18n) ===
type Messages = Record<string, unknown>;

export function getMessagesData(locale = "en"): Messages {
  const fp = path.join(MSG_DIR, `${locale}.json`);
  return readJson<Messages>(fp, {});
}

export function saveMessagesData(messages: Messages, locale = "en"): void {
  ensureDir(MSG_DIR);
  writeJson(path.join(MSG_DIR, `${locale}.json`), messages);
}
