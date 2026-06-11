/**
 * Seed Supabase with initial data.
 * Run: node scripts/seed-supabase.mjs
 */
import { createClient } from "@supabase/supabase-js";
import { createRequire } from "module";
import { readFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const require = createRequire(import.meta.url);

function loadEnv() {
  const envPath = resolve(ROOT, ".env.local");
  if (existsSync(envPath)) {
    const content = readFileSync(envPath, "utf-8");
    for (const line of content.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eqIdx = trimmed.indexOf("=");
      if (eqIdx === -1) continue;
      const key = trimmed.slice(0, eqIdx).trim();
      const val = trimmed.slice(eqIdx + 1).trim();
      if (key && val && !process.env[key]) process.env[key] = val;
    }
  }
}

loadEnv();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

function snake(obj) {
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    out[k.replace(/[A-Z]/g, c => `_${c.toLowerCase()}`)] = v;
  }
  return out;
}

async function main() {
  console.log("Seeding Supabase...\n");

  // Products
  try {
    const { products } = require("../src/data/products.ts");
    const rows = products.map(p => ({
      slug: p.slug, name: p.name, category: p.category,
      description: p.description || "", long_description: p.longDescription || "",
      specs: p.specs || [], applications: p.applications || [],
      images: p.images || [], featured: p.featured || false,
    }));
    const { error } = await supabase.from("products").upsert(rows, { onConflict: "slug" });
    if (error) throw error;
    console.log(`Products: ${rows.length} seeded`);
  } catch (e) { console.error("Products:", e.message); }

  // Services
  try {
    const { services } = require("../src/data/services.ts");
    const rows = services.map(s => ({
      slug: s.slug, title: s.title, icon: s.icon || "package",
      description: s.description || "", long_description: s.longDescription || "",
      features: s.features || [],
    }));
    const { error } = await supabase.from("services").upsert(rows, { onConflict: "slug" });
    if (error) throw error;
    console.log(`Services: ${rows.length} seeded`);
  } catch (e) { console.error("Services:", e.message); }

  // Case Studies
  try {
    const { caseStudies } = require("../src/data/cases.ts");
    const rows = caseStudies.map(c => ({
      slug: c.slug, title: c.title, client: c.client || "",
      industry: c.industry || "", challenge: c.challenge || "",
      solution: c.solution || "", results: c.results || "",
      image: c.image || "", featured: c.featured || false,
    }));
    const { error } = await supabase.from("case_studies").upsert(rows, { onConflict: "slug" });
    if (error) throw error;
    console.log(`Case Studies: ${rows.length} seeded`);
  } catch (e) { console.error("Case Studies:", e.message); }

  // Blog Posts
  try {
    const { blogPosts } = require("../src/data/blogs.ts");
    const rows = blogPosts.map(b => ({
      slug: b.slug, title: b.title, excerpt: b.excerpt || "",
      content: b.content || "", category: b.category || "",
      author: b.author || "Admin", date: b.date || "2026-01-01",
      image: b.image || "",
    }));
    const { error } = await supabase.from("blog_posts").upsert(rows, { onConflict: "slug" });
    if (error) throw error;
    console.log(`Blog Posts: ${rows.length} seeded`);
  } catch (e) { console.error("Blog Posts:", e.message); }

  // Testimonials
  try {
    const { testimonials } = require("../src/data/testimonials.ts");
    const rows = testimonials.map((t, i) => ({
      id: t.id || i + 1,
      name: t.name, company: t.company || "",
      role: t.role || "", content: t.content || "",
      rating: t.rating || 5,
    }));
    const { error } = await supabase.from("testimonials").upsert(rows, { onConflict: "id" });
    if (error) throw error;
    console.log(`Testimonials: ${rows.length} seeded`);
  } catch (e) { console.error("Testimonials:", e.message); }

  // Settings
  try {
    const defaults = {
      companyName: "AcrylicPro Custom",
      phone: "+86 138-0000-0000",
      email: "info@acrylicb2b.com",
      address: "No. 888, Industrial Avenue, Guangzhou, China",
      whatsapp: "8613800000000",
      businessHours: "Mon-Fri: 8:00 AM - 6:00 PM (CST)",
    };
    const rows = Object.entries(defaults).map(([key, value]) => ({ key, value }));
    const { error } = await supabase.from("settings").upsert(rows, { onConflict: "key" });
    if (error) throw error;
    console.log(`Settings: ${rows.length} seeded`);
  } catch (e) { console.error("Settings:", e.message); }

  console.log("\nSeed complete!");
}

main();
