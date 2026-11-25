import type { MetadataRoute } from "next";
import { getProducts, getCaseStudies, getBlogPosts } from "@/lib/data-store";

const BASE_URL = "https://www.maxcustomacrylics.com";
// The site is served under a mandatory locale prefix ("always"), so every
// sitemap entry must include it — otherwise Google is handed 145 redirecting
// URLs instead of the final ones.
const LOCALE = "en";

/**
 * Next.js renders sitemap URLs into <loc> without XML-escaping, so a slug
 * containing "&" would produce invalid XML and break the whole file.
 * Encode the URL and escape the XML entities that are not allowed raw.
 */
function toLoc(path: string): string {
  return path
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/** Slugs that are not valid public URLs (numeric ids, stray suffixes). */
function isUsableSlug(slug: string | undefined | null): slug is string {
  if (!slug) return false;
  if (/^\d+$/.test(slug)) return false; // numeric database id
  if (slug.includes("meta-description")) return false; // SEO text leaked into slug
  if (slug.startsWith("he-")) return false; // truncated slug
  return true;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    { url: `${BASE_URL}/${LOCALE}`, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${BASE_URL}/${LOCALE}/products`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/${LOCALE}/projects`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/${LOCALE}/blog`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE_URL}/${LOCALE}/materials`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/${LOCALE}/about`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/${LOCALE}/contact`, changeFrequency: "monthly" as const, priority: 0.7 },
    // Product category landing pages
    { url: `${BASE_URL}/${LOCALE}/products/acrylic-displays-2`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE_URL}/${LOCALE}/products/acrylic-boxes-2`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE_URL}/${LOCALE}/products/acrylic-signs-2`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE_URL}/${LOCALE}/products/acrylic-trays-shelves`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE_URL}/${LOCALE}/products/protective-products-2`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE_URL}/${LOCALE}/products/acrylic-furniture`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE_URL}/${LOCALE}/products/acrylic-trophies`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE_URL}/${LOCALE}/products/acrylic-accessories`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE_URL}/${LOCALE}/products/custom-acrylic-products`, changeFrequency: "weekly" as const, priority: 0.8 },
    // Capabilities
    { url: `${BASE_URL}/${LOCALE}/services/laser-cutting`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/${LOCALE}/services/cnc-machining`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/${LOCALE}/services/diamond-polishing`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/${LOCALE}/services/uv-printing`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/${LOCALE}/services/bonding-assembly`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/${LOCALE}/services/oem-project-support`, changeFrequency: "monthly" as const, priority: 0.8 },
    // Legal
    { url: `${BASE_URL}/${LOCALE}/privacy`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE_URL}/${LOCALE}/terms`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE_URL}/${LOCALE}/refund`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE_URL}/${LOCALE}/shipping`, changeFrequency: "yearly" as const, priority: 0.3 },
  ].map((r) => ({ ...r, url: toLoc(r.url), lastModified: new Date() }));

  const products = await getProducts();
  const productRoutes = products
    .filter((p) => isUsableSlug(p.slug))
    .map((p) => ({
      url: toLoc(`${BASE_URL}/${LOCALE}/products/${p.slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  const projects = await getCaseStudies();
  const projectRoutes = projects
    .filter((c) => isUsableSlug(c.slug))
    .map((c) => ({
      url: toLoc(`${BASE_URL}/${LOCALE}/projects/${c.slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  const blogs = await getBlogPosts();
  const blogRoutes = blogs
    .filter((b) => isUsableSlug(b.slug))
    .map((b) => ({
      url: toLoc(`${BASE_URL}/${LOCALE}/blog/${b.slug}`),
      lastModified: new Date(b.date || new Date()),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    }));

  return [...staticRoutes, ...productRoutes, ...projectRoutes, ...blogRoutes];
}
