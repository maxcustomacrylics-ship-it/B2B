import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
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
  const t = await getTranslations("products");
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

      {/* ========== HERO SECTION ========== */}
      <section className="relative bg-white overflow-hidden" aria-labelledby="products-hero-heading">
        <Container className="py-12 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            {/* —— Left Column —— */}
            <div>
              <Breadcrumb
                items={[
                  { label: t("breadcrumbHome"), href: "/" },
                  { label: t("breadcrumbProducts") },
                ]}
              />
              <h1 id="products-hero-heading" className="mt-4 text-4xl font-bold tracking-tight text-[#0F2744] sm:text-5xl lg:text-[56px] lg:leading-tight">
                Custom Acrylic Products
              </h1>
              <p className="mt-5 text-base text-gray-500 leading-relaxed sm:text-lg max-w-[620px]">
                Explore our range of custom acrylic products for retail,
                commercial and industrial applications. Every product can be
                customized according to your drawings, specifications and project
                requirements with engineering support throughout the process.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3" role="group" aria-label="Call to action buttons">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2"
                >
                  Request a Quote
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#0F2744] bg-white px-6 py-3.5 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/></svg>
                  Upload Your Drawing
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 sm:flex sm:flex-wrap sm:gap-6 text-sm text-gray-500">
                {["Engineering Review","Custom Manufacturing","Quality Inspection","Worldwide Delivery"].map((label) => (
                  <span key={label} className="flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-gray-400 flex-shrink-0" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* —— Right Column — Product Image Collage —— */}
            <div className="relative" aria-hidden="true">
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { icon: "🖼", color: "from-blue-100 to-blue-50/50", label: "Displays" },
                  { icon: "📦", color: "from-sky-100 to-sky-50/50", label: "Boxes" },
                  { icon: "🪧", color: "from-indigo-100 to-indigo-50/50", label: "Signage" },
                  { icon: "🏆", color: "from-amber-100 to-amber-50/50", label: "Awards" },
                  { icon: "🛍", color: "from-emerald-100 to-emerald-50/50", label: "Retail" },
                  { icon: "📋", color: "from-purple-100 to-purple-50/50", label: "Stands" },
                  { icon: "💎", color: "from-rose-100 to-rose-50/50", label: "Premium" },
                  { icon: "🔧", color: "from-teal-100 to-teal-50/50", label: "Custom" },
                ].map((img, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-xl overflow-hidden bg-gradient-to-br ${img.color} flex flex-col items-center justify-center shadow-sm`}
                  >
                    <span className="text-2xl sm:text-3xl select-none">{img.icon}</span>
                    <span className="mt-1 text-[9px] text-gray-400 font-medium">{img.label}</span>
                  </div>
                ))}
              </div>
              {/* ALT text */}
              <span className="sr-only">
                Custom acrylic products including displays, boxes, signage, awards, retail fixtures, stands, premium items and custom parts
              </span>
            </div>
          </div>
        </Container>
      </section>
      {/* ========== END HERO SECTION ========== */}

      <Container className="pb-12">
        <ProductCategories products={products} />
      </Container>
    </>
  );
}
