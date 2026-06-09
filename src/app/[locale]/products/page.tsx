import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SchemaOrg from "@/components/shared/SchemaOrg";
import {
  generateItemListSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";
import { getProducts } from "@/lib/data-store";
import { SITE_URL } from "@/lib/utils";
import { ProductCategories } from "./ProductCategories";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("products");

  return {
    title: t("title"),
    description: t("subtitle"),
    openGraph: {
      title: `${t("title")} | AcrylicPro Custom`,
      description: t("subtitle"),
    },
  };
}

export default async function ProductsPage() {
  const t = useTranslations("products");
  const products = await getProducts();

  const itemListSchema = generateItemListSchema(
    products.map((p) => ({
      name: p.name,
      url: `${SITE_URL}/products/${p.slug}`,
    }))
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: t("breadcrumbHome"), url: SITE_URL },
    { name: t("breadcrumbProducts"), url: `${SITE_URL}/products` },
  ]);

  return (
    <>
      <SchemaOrg data={[itemListSchema, breadcrumbSchema]} />
      <Container className="py-12">
        <Breadcrumb
          items={[
            { label: t("breadcrumbHome"), href: "/" },
            { label: t("breadcrumbProducts") },
          ]}
        />
        <SectionHeading
          title={t("title")}
          subtitle={t("subtitle")}
          className="mb-8"
        />
        <ProductCategories products={products} />
      </Container>
    </>
  );
}
