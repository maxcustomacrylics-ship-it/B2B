import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import QuoteCalculator from "@/components/products/QuoteCalculator";
import SchemaOrg from "@/components/shared/SchemaOrg";
import { generateBreadcrumbSchema, generateOrganizationSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("quote");

  return {
    title: `${t("title")} | AcrylicPro Custom`,
    description: t("subtitle"),
    openGraph: {
      title: `${t("title")} | AcrylicPro Custom`,
      description: t("subtitle"),
    },
  };
}

export default async function QuotePage() {
  const t = await getTranslations("quote");
  const orgSchema = generateOrganizationSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: t("breadcrumbHome"), url: SITE_URL },
    { name: t("breadcrumbQuote"), url: `${SITE_URL}/quote` },
  ]);

  return (
    <>
      <SchemaOrg data={[orgSchema, breadcrumbSchema]} />
      <Container className="py-12">
        <Breadcrumb
          items={[{ label: t("breadcrumbHome"), href: "/" }, { label: t("breadcrumbQuote") }]}
        />

        <div className="mt-8">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            {t("title")}
          </h1>
          <p className="mt-4 max-w-3xl text-muted">{t("subtitle")}</p>
        </div>

        <div className="mt-10">
          <QuoteCalculator />
        </div>
      </Container>
    </>
  );
}
