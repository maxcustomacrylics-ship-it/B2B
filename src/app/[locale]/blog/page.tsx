import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumb from "@/components/ui/Breadcrumb";
import BlogCard from "@/components/blog/BlogCard";
import BlogSidebar from "@/components/blog/BlogSidebar";
import SchemaOrg from "@/components/shared/SchemaOrg";
import {
  generateItemListSchema,
  generateBreadcrumbSchema,
  generateArticleSchema,
} from "@/lib/schema";
import { getBlogPosts } from "@/lib/data-store";
import { SITE_URL } from "@/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("blog");

  return {
    title: t("title"),
    description: t("subtitle"),
    openGraph: {
      title: `${t("title")} | AcrylicPro Custom`,
      description: t("subtitle"),
    },
  };
}

export default async function BlogPage() {
  const t = useTranslations("blog");
  const posts = await getBlogPosts();

  const itemListSchema = generateItemListSchema(
    posts.map((p) => ({
      name: p.title,
      url: `${SITE_URL}/blog/${p.slug}`,
    }))
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: t("title"), url: `${SITE_URL}/blog` },
  ]);

  return (
    <>
      <SchemaOrg data={[itemListSchema, breadcrumbSchema]} />
      <Container className="py-12">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: t("title") }]} />
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
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
