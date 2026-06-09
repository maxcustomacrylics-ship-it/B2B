import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { caseStudies } from "@/data/cases";
import { blogPosts } from "@/data/blogs";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.acrylicprob2b.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/cases`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  const productRoutes = products.map((p) => ({
    url: `${BASE_URL}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const caseRoutes = caseStudies.map((c) => ({
    url: `${BASE_URL}/cases/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogRoutes = blogPosts.map((b) => ({
    url: `${BASE_URL}/blog/${b.slug}`,
    lastModified: new Date(b.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [
    ...staticRoutes,
    ...productRoutes,
    ...caseRoutes,
    ...blogRoutes,
  ];
}
