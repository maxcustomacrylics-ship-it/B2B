import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import SchemaOrg from "@/components/shared/SchemaOrg";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";
import { getCaseBySlug } from "@/lib/data-store";
import { SITE_URL } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = await getCaseBySlug(slug);
  if (!c) return {};

  return {
    title: c.title,
    description: c.challenge,
    openGraph: {
      title: `${c.title} | AcrylicPro Custom`,
      description: c.challenge,
    },
  };
}

export default async function CaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const c = await getCaseBySlug(slug);
  if (!c) notFound();

  const t = await getTranslations("cases");

  const articleSchema = generateArticleSchema(c);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Case Studies", url: `${SITE_URL}/cases` },
    { name: c.title, url: `${SITE_URL}/cases/${c.slug}` },
  ]);

  return (
    <>
      <SchemaOrg data={[articleSchema, breadcrumbSchema]} />
      <Container className="py-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: t("title"), href: "/cases" },
            { label: c.title },
          ]}
        />

        <Link
          href="/cases"
          className="mt-6 inline-flex items-center gap-2 text-sm text-muted hover:text-primary-600 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("backToList")}
        </Link>

        <article className="mt-8 mx-auto max-w-3xl">
          <div className="flex gap-3 text-sm font-medium text-primary-600">
            <span>{c.industry}</span>
            <span className="text-border">|</span>
            <span>{c.client}</span>
          </div>

          <h1 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            {c.title}
          </h1>

          <div className="mt-10 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground">Challenge</h2>
              <p className="mt-2 text-muted leading-relaxed">{c.challenge}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">{t("solution")}</h2>
              <p className="mt-2 text-muted leading-relaxed">{c.solution}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Results</h2>
              <p className="mt-2 text-muted leading-relaxed">{c.results}</p>
            </section>
          </div>
        </article>

        <div className="mt-16 text-center">
          <Button href="/contact" variant="primary">
            Start Your Project
          </Button>
        </div>
      </Container>
    </>
  );
}
