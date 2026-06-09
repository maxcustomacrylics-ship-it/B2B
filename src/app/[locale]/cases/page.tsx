import { getTranslations } from "next-intl/server";
import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SchemaOrg from "@/components/shared/SchemaOrg";
import { generateItemListSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { getCaseStudies } from "@/lib/data-store";
import { SITE_URL } from "@/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("cases");

  return {
    title: t("title"),
    description: t("subtitle"),
    openGraph: {
      title: `${t("title")} | AcrylicPro Custom`,
      description: t("subtitle"),
    },
  };
}

export default async function CasesPage() {
  const t = await getTranslations("cases");
  const allCases = await getCaseStudies();

  const itemListSchema = generateItemListSchema(
    allCases.map((c) => ({
      name: c.title,
      url: `${SITE_URL}/cases/${c.slug}`,
    }))
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: t("title"), url: `${SITE_URL}/cases` },
  ]);

  return (
    <>
      <SchemaOrg data={[itemListSchema, breadcrumbSchema]} />
      <Container className="py-12">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: t("title") }]} />
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allCases.map((c) => (
            <Link
              key={c.slug}
              href={`/cases/${c.slug}`}
              className="group overflow-hidden rounded-xl border border-border bg-white transition-all hover:shadow-lg"
            >
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                <span className="text-4xl">📋</span>
              </div>
              <div className="p-6">
                <div className="flex gap-3 text-xs font-medium text-primary-600 uppercase tracking-wider">
                  <span>{c.industry}</span>
                  <span className="text-border">|</span>
                  <span>{c.client}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-primary-600 transition-colors">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-muted line-clamp-2">
                  {c.challenge}
                </p>
                <span className="mt-3 inline-flex items-center text-sm font-medium text-primary-600">
                  {t("readMore")} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
