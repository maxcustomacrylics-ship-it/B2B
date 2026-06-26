import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SchemaOrg from "@/components/shared/SchemaOrg";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";
import { getBlogBySlug } from "@/lib/data-store";
import { SITE_URL } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | AcrylicPro Custom`,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) notFound();

  const t = await getTranslations("blog");

  const articleSchema = generateArticleSchema(post);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: post.title, url: `${SITE_URL}/blog/${post.slug}` },
  ]);

  return (
    <>
      <SchemaOrg data={[articleSchema, breadcrumbSchema]} />
      <Container className="py-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />

        <Link
          href="/blog"
          className="mt-6 inline-flex items-center gap-2 text-sm text-muted hover:text-primary-600 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("backToBlog")}
        </Link>

        {/* Cover Image */}
        {post.image && (
          <div className="mt-8 mx-auto max-w-3xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full rounded-xl object-cover aspect-video"
            />
          </div>
        )}

        <article className="mt-8 mx-auto max-w-3xl">
          <div className="flex items-center gap-3 text-sm">
            <span className="font-medium text-primary-600 uppercase">
              {post.category}
            </span>
            <span className="text-border">|</span>
            <span className="text-muted">{post.date}</span>
          </div>

          <h1 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center gap-3 border-b border-border pb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-sm font-medium text-primary-600">
              {post.author.charAt(0)}
            </div>
            <div>
              <div className="font-medium text-foreground text-sm">
                {post.author}
              </div>
              <div className="text-xs text-muted">Author</div>
            </div>
          </div>

          <div className="mt-8 prose prose-gray max-w-none">
            {post.content.split("\n").map((line, i) => {
              if (line.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-2xl font-bold text-foreground mt-8 mb-4">
                    {line.replace("## ", "")}
                  </h2>
                );
              }
              if (line.startsWith("### ")) {
                return (
                  <h3 key={i} className="text-xl font-semibold text-foreground mt-6 mb-3">
                    {line.replace("### ", "")}
                  </h3>
                );
              }
              if (line.startsWith("**") && line.endsWith("**")) {
                return (
                  <p key={i} className="font-semibold text-foreground mt-4 mb-2">
                    {line.replace(/\*\*/g, "")}
                  </p>
                );
              }
              if (line.startsWith("- ")) {
                return (
                  <li key={i} className="ml-4 text-muted leading-relaxed">
                    {line.replace("- ", "")}
                  </li>
                );
              }
              if (line.startsWith("|")) {
                const cells = line.split("|").filter(Boolean).map((c) => c.trim());
                if (cells.length === 2) {
                  return (
                    <div key={i} className="flex justify-between py-1.5 text-sm border-b border-border">
                      <span className="text-muted">{cells[0]}</span>
                      <span className="font-medium text-foreground">{cells[1]}</span>
                    </div>
                  );
                }
                return null;
              }
              if (line.trim() === "") return <br key={i} />;
              return (
                <p key={i} className="text-muted leading-relaxed mt-2">
                  {line}
                </p>
              );
            })}
          </div>

          {/* Internal Linking — Related Resources */}
          <div className="mt-12 border-t pt-10 max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-[#0F2744] mb-6">Explore Our Capabilities</h2>
            <div className="grid gap-3 sm:grid-cols-3">
              <a href="/services" className="rounded-lg border border-gray-200 bg-white p-4 hover:border-blue-200 hover:shadow-sm transition-all text-sm font-medium text-[#0F2744]">Custom Acrylic Services →</a>
              <a href="/products" className="rounded-lg border border-gray-200 bg-white p-4 hover:border-blue-200 hover:shadow-sm transition-all text-sm font-medium text-[#0F2744]">Product Categories →</a>
              <a href="/projects" className="rounded-lg border border-gray-200 bg-white p-4 hover:border-blue-200 hover:shadow-sm transition-all text-sm font-medium text-[#0F2744]">View Projects →</a>
              <a href="/industries/retail-display" className="rounded-lg border border-gray-200 bg-white p-4 hover:border-blue-200 hover:shadow-sm transition-all text-sm text-gray-500">Retail Display Solutions</a>
              <a href="/industries/cosmetics-display" className="rounded-lg border border-gray-200 bg-white p-4 hover:border-blue-200 hover:shadow-sm transition-all text-sm text-gray-500">Cosmetics Display Solutions</a>
              <a href="/industries/hotel-hospitality" className="rounded-lg border border-gray-200 bg-white p-4 hover:border-blue-200 hover:shadow-sm transition-all text-sm text-gray-500">Hotel Hospitality Solutions</a>
            </div>
          </div>
        </article>

        {/* CTA */}
        <div className="mt-16 rounded-xl bg-[#0F2744] p-8 text-center text-white max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold">Need a Custom Acrylic Solution?</h2>
          <p className="mt-2 text-blue-200 max-w-xl mx-auto">Our engineering team will review your requirements and provide a detailed quotation within 24 hours.</p>
          <div className="mt-6"><Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0F2744] hover:bg-blue-50">Get Free Quote</Link></div>
        </div>
      </Container>
    </>
  );
}
