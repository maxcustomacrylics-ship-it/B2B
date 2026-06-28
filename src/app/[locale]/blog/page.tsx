import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import BlogCard from "@/components/blog/BlogCard";
import BlogSidebar from "@/components/blog/BlogSidebar";
import SchemaOrg from "@/components/shared/SchemaOrg";
import {
  generateItemListSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";
import { getBlogPosts } from "@/lib/data-store";
import { SITE_URL } from "@/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Knowledge Center | Max Custom Acrylics",
    description: "Explore practical guides, design ideas, material knowledge and manufacturing insights for custom acrylic projects.",
  };
}

export default async function BlogPage() {
  const t = await getTranslations("blog");
  const posts = await getBlogPosts();

  const itemListSchema = generateItemListSchema(
    posts.map((p) => ({
      name: p.title,
      url: `${SITE_URL}/blog/${p.slug}`,
    }))
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Knowledge Center", url: `${SITE_URL}/blog` },
  ]);

  return (
    <>
      <SchemaOrg data={[itemListSchema, breadcrumbSchema]} />

      {/* ========== HERO ========== */}
      <section className="relative bg-white overflow-hidden" aria-labelledby="knowledge-hero">
        <Container className="py-12 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Knowledge Center" }]} />
              <h1 id="knowledge-hero" className="mt-4 text-4xl font-bold tracking-tight text-[#0F2744] sm:text-5xl lg:text-[56px] lg:leading-tight">
                Knowledge Center
              </h1>
              <p className="mt-5 text-base text-gray-500 leading-relaxed sm:text-lg max-w-[560px]">
                Explore practical guides, design ideas, material knowledge and
                manufacturing insights for custom acrylic projects.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/blog" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2">
                  Browse Articles
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#0F2744] bg-white px-6 py-3.5 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2">
                  Request a Quote
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
            <div className="relative" aria-hidden="true">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 flex items-center justify-center shadow-sm">
                <svg className="w-16 h-16 text-gray-300/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
              </div>
              <span className="sr-only">Knowledge Center — practical guides for custom acrylic projects</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ========== ARTICLES ========== */}
      <Container className="pb-16 lg:pb-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
      </Container>
    </>
  );
}
