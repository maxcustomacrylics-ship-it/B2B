import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SchemaOrg from "@/components/shared/SchemaOrg";
import {
  generateItemListSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";
import { getServices } from "@/lib/data-store";
import { SITE_URL } from "@/lib/utils";
import { Scissors, Sparkles, Printer, Flame, Package, PenTool } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Scissors,
  Sparkles,
  Printer,
  Flame,
  Package,
  PenTool,
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("services");

  return {
    title: t("title"),
    description: t("subtitle"),
    openGraph: {
      title: `${t("title")} | AcrylicPro Custom`,
      description: t("subtitle"),
    },
  };
}

export default async function ServicesPage() {
  const t = await getTranslations("services");
  const allServices = await getServices();

  const itemListSchema = generateItemListSchema(
    allServices.map((s) => ({
      name: s.title,
      url: `${SITE_URL}/services`,
    }))
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: t("title"), url: `${SITE_URL}/services` },
  ]);

  return (
    <>
      <SchemaOrg data={[itemListSchema, breadcrumbSchema]} />
      <Container className="py-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: t("title") },
          ]}
        />
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allServices.map((service) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <div
                key={service.slug}
                className="rounded-xl border border-border p-8 transition-all hover:border-primary-200 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-muted leading-relaxed">
                  {service.longDescription}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <span className="mt-0.5 text-accent-600 font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}
