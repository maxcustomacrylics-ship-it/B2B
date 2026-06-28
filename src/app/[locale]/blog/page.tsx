import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import BlogCard from "@/components/blog/BlogCard";
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
      <section className="relative bg-slate-50 overflow-hidden" aria-labelledby="knowledge-hero">
        <Container className="py-12 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-12 items-center">
            <div className="order-2 lg:order-1" aria-hidden="true">
              <div className="grid grid-cols-2 gap-2">
                <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200/50" />
                <div className="space-y-2">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-100 to-indigo-200/50" />
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-sky-100 to-sky-200/50" />
                </div>
              </div>
              <span className="sr-only">Knowledge Center — practical guides and design resources</span>
            </div>
            <div className="order-1 lg:order-2">
              <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Knowledge Center" }]} />
              <h1 id="knowledge-hero" className="mt-4 text-4xl font-bold tracking-tight text-[#0F2744] sm:text-5xl lg:text-[56px] lg:leading-tight">
                Knowledge Center
              </h1>
              <p className="mt-5 text-base text-gray-500 leading-relaxed sm:text-lg max-w-[560px]">
                Explore practical guides, design ideas, material knowledge and
                manufacturing insights for custom acrylic projects.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/blog" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2">Browse Articles<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#0F2744] bg-white px-6 py-3.5 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2">Request a Quote<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========== FEATURED GUIDES ========== */}
      <section className="bg-gray-50" aria-labelledby="guides-heading">
        <Container className="py-16 lg:py-20">
          <div className="mb-12">
            <h2 id="guides-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Featured Guides</h2>
            <p className="mt-3 text-gray-500 max-w-2xl leading-relaxed">
              Explore our most popular resources to help you plan and specify custom acrylic projects.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { title: "Buying Guides", slug: "buying-guides", desc: "What to look for when sourcing custom acrylic products.", color: "from-blue-100 to-blue-200/50" },
              { title: "Material Guides", slug: "material-guides", desc: "Understand acrylic grades, properties and selection criteria.", color: "from-emerald-100 to-emerald-200/50" },
              { title: "Design Ideas", slug: "design-ideas", desc: "Inspiration and practical concepts for your next project.", color: "from-amber-100 to-amber-200/50" },
              { title: "Manufacturing Tips", slug: "manufacturing-tips", desc: "Practical advice for better fabrication and finishing results.", color: "from-purple-100 to-purple-200/50" },
            ].map((guide) => (
              <Link
                key={guide.slug}
                href="/blog"
                className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className={`aspect-[16/9] bg-gradient-to-br ${guide.color} flex items-center justify-center relative`}>
                  <svg className="w-12 h-12 text-gray-400/25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  </svg>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-[#0F2744] group-hover:text-blue-700 transition-colors">{guide.title}</h3>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-[#0F2744] group-hover:text-blue-700 transition-colors shrink-0">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ========== ARTICLES ========== */}
      <Container className="py-16 lg:py-20">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Latest Articles</h2>
          <p className="mt-3 text-gray-500 max-w-2xl leading-relaxed">
            Practical guides, design insights, and manufacturing knowledge for custom acrylic projects.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>

      {/* ========== FINAL CTA ========== */}
      <section className="bg-white" aria-labelledby="blog-cta">
        <Container className="py-20 lg:py-28">
          <div className="max-w-[640px] mx-auto text-center">
            <h2 id="blog-cta" className="text-3xl font-bold text-[#0F2744] sm:text-4xl lg:text-5xl">
              Need Help With Your Acrylic Project?
            </h2>
            <p className="mt-5 text-base text-gray-500 leading-relaxed sm:text-lg">
              Whether you're planning a new product or looking for technical
              guidance, we're here to help.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center" role="group" aria-label="Call to action buttons">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-8 py-4 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2">
                Request a Quote
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#0F2744] bg-white px-8 py-4 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/></svg>
                Upload Your Drawing
              </Link>
            </div>
            <p className="mt-8 text-sm text-gray-400">
              Our team typically responds within one business day.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
