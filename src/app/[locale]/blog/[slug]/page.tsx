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
        {post.images?.[0] && (
          <div className="mt-8 mx-auto max-w-3xl">
            <img
              src={post.images[0]}
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
            {(() => {
              // Inline formatter: [text](url) → link, **text** → bold
              function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
                const re = /(\[.+?\]\(.+?\)|\*\*[^*]+\*\*)/g;
                const parts = text.split(re);
                return parts.map((part, j) => {
                  if (!part) return null;
                  // Link: [text](url)
                  if (part.startsWith("[")) {
                    const m = part.match(/^\[(.+?)\]\((.+?)\)$/);
                    if (m) {
                      return (
                        <a key={`${keyPrefix}-a-${j}`} href={m[2]} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">
                          {renderInline(m[1], `${keyPrefix}-a-${j}`)}
                        </a>
                      );
                    }
                  }
                  // Bold: **text**
                  if (part.startsWith("**") && part.endsWith("**")) {
                    return <strong key={`${keyPrefix}-b-${j}`}>{renderInline(part.slice(2, -2), `${keyPrefix}-b-${j}`)}</strong>;
                  }
                  // Plain text
                  return <span key={`${keyPrefix}-s-${j}`}>{part}</span>;
                });
              }

              return post.content.split("\n").map((line, i) => {
                // ── Image markers: {{image:0}}, {{image:1}} etc. (supports : and ：) ──
                const markerRe = /\{\{image[:：](\d+)\}\}/g;
                const markers = [...line.matchAll(markerRe)];

                if (markers.length > 0) {
                  const cleanText = line.replace(markerRe, "").trim();
                  const validImages = markers
                    .map(m => ({ idx: parseInt(m[1], 10), url: post.images?.[parseInt(m[1], 10)] }))
                    .filter(m => m.url);

                  if (!cleanText) {
                    return validImages.map((m, j) => (
                      <figure key={`${i}-${j}`} className="my-6">
                        <img src={m.url} alt={`${post.title} — image ${m.idx + 1}`} className="w-full rounded-xl object-cover" />
                      </figure>
                    ));
                  }

                  return (
                    <div key={i}>
                      <p className="text-muted leading-relaxed mt-2">{renderInline(cleanText, `l${i}`)}</p>
                      {validImages.map((m, j) => (
                        <figure key={`${i}-img-${j}`} className="my-4">
                          <img src={m.url} alt={`${post.title} — image ${m.idx + 1}`} className="w-full rounded-xl object-cover" />
                        </figure>
                      ))}
                    </div>
                  );
                }

                if (line.startsWith("# ")) {
                  return (
                    <h1 key={i} className="text-3xl font-bold text-foreground mt-10 mb-4">
                      {renderInline(line.replace("# ", ""), `h1-${i}`)}
                    </h1>
                  );
                }
                if (line.startsWith("## ")) {
                  return (
                    <h2 key={i} className="text-2xl font-bold text-foreground mt-8 mb-4">
                      {renderInline(line.replace("## ", ""), `h2-${i}`)}
                    </h2>
                  );
                }
                if (line.startsWith("### ")) {
                  return (
                    <h3 key={i} className="text-xl font-semibold text-foreground mt-6 mb-3">
                      {renderInline(line.replace("### ", ""), `h3-${i}`)}
                    </h3>
                  );
                }
                if (line.startsWith("- ")) {
                  return (
                    <li key={i} className="ml-4 text-muted leading-relaxed">
                      {renderInline(line.replace("- ", ""), `li-${i}`)}
                    </li>
                  );
                }
                if (line.startsWith("|")) {
                  const cells = line.split("|").filter(Boolean).map((c) => c.trim());
                  if (cells.length === 2) {
                    return (
                      <div key={i} className="flex justify-between py-1.5 text-sm border-b border-border">
                        <span className="text-muted">{renderInline(cells[0], `t1-${i}`)}</span>
                        <span className="font-medium text-foreground">{renderInline(cells[1], `t2-${i}`)}</span>
                      </div>
                    );
                  }
                  return null;
                }
                if (line.trim() === "") return <br key={i} />;
                return (
                  <p key={i} className="text-muted leading-relaxed mt-2">
                    {renderInline(line, `p-${i}`)}
                  </p>
                );
              });
            })()}
          </div>

        </article>

        {/* CTA */}
        <div className="mt-16 rounded-xl bg-[#0F2744] p-8 text-center text-white max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold">Need a Custom Acrylic Solution?</h2>
          <p className="mt-2 text-blue-200 max-w-xl mx-auto">Our engineering team will review your requirements and provide a detailed quotation within 24 hours.</p>
          <div className="mt-6"><Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0F2744] hover:bg-blue-50">Request a Quote</Link></div>
        </div>
      </Container>
    </>
  );
}
