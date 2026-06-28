import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getProducts } from "@/lib/data-store";

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
  const allProducts = await getProducts();

  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section className="relative bg-white overflow-hidden" aria-labelledby="products-hero-heading">
        <Container className="py-12 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
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
              <div className="mt-8 flex flex-col sm:flex-row gap-3" role="group" aria-label="Call to action buttons">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2">
                  Request a Quote
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#0F2744] bg-white px-6 py-3.5 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/></svg>
                  Upload Your Drawing
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 sm:flex sm:flex-wrap sm:gap-6 text-sm text-gray-500">
                {["Engineering Review","Custom Manufacturing","Quality Inspection","Worldwide Delivery"].map((label) => (
                  <span key={label} className="flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-gray-400 flex-shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                    {label}
                  </span>
                ))}
              </div>
            </div>
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
                  <div key={i} className={`aspect-square rounded-xl overflow-hidden bg-gradient-to-br ${img.color} flex flex-col items-center justify-center shadow-sm`}>
                    <span className="text-2xl sm:text-3xl select-none">{img.icon}</span>
                    <span className="mt-1 text-[9px] text-gray-400 font-medium">{img.label}</span>
                  </div>
                ))}
              </div>
              <span className="sr-only">Custom acrylic products including displays, boxes, signage, awards, retail fixtures, stands, premium items and custom parts</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ========== PRODUCT CATEGORIES SECTION ========== */}
      <section className="bg-gray-50" aria-labelledby="categories-heading">
        <Container className="py-16 lg:py-24">
          <div className="text-center mb-12">
            <h2 id="categories-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">
              Product Categories
            </h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Browse our range of custom acrylic product categories. Each category
              can be fully customized to your specifications, dimensions and branding
              requirements.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Display Solutions",
                slug: "display-solutions",
                desc: "Custom acrylic displays, stands and presentation fixtures for retail, exhibition and commercial environments.",
                count: 12,
                icon: "🖼",
                color: "from-blue-100 to-blue-50",
              },
              {
                title: "Signage",
                slug: "signage",
                desc: "Indoor and outdoor acrylic signage including wayfinding signs, branded panels and illuminated displays.",
                count: 8,
                icon: "🪧",
                color: "from-indigo-100 to-indigo-50",
              },
              {
                title: "Storage & Organization",
                slug: "storage-organization",
                desc: "Acrylic boxes, cases, trays and organizational products for retail, office and home applications.",
                count: 10,
                icon: "📦",
                color: "from-sky-100 to-sky-50",
              },
              {
                title: "Retail Fixtures",
                slug: "retail-fixtures",
                desc: "Point-of-purchase displays, shelving, brochure holders and merchandising fixtures for retail environments.",
                count: 15,
                icon: "🏪",
                color: "from-emerald-100 to-emerald-50",
              },
              {
                title: "Protective Products",
                slug: "protective-products",
                desc: "Acrylic barriers, protective panels, machine guards and safety shields for commercial and industrial use.",
                count: 6,
                icon: "🛡",
                color: "from-amber-100 to-amber-50",
              },
              {
                title: "Custom Components",
                slug: "custom-components",
                desc: "Bespoke acrylic parts, precision-cut components and custom-fabricated items built to your exact specifications.",
                count: 20,
                icon: "🔧",
                color: "from-purple-100 to-purple-50",
              },
            ].map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className={`aspect-[16/10] bg-gradient-to-br ${cat.color} flex items-center justify-center`}>
                  <span className="text-5xl select-none group-hover:scale-110 transition-transform duration-300">{cat.icon}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-[#0F2744] group-hover:text-blue-700 transition-colors">
                      {cat.title}
                    </h3>
                    {cat.count && (
                      <span className="shrink-0 rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-500">
                        {cat.count} products
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed flex-1">
                    {cat.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#0F2744] group-hover:text-blue-700 transition-colors">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      {/* ========== END PRODUCT CATEGORIES SECTION ========== */}

      {/* ========== FEATURED PRODUCTS SECTION ========== */}
      <section className="bg-white" aria-labelledby="featured-heading">
        <Container className="py-16 lg:py-24">
          <div className="flex items-end justify-between mb-12">
            <div className="max-w-[620px]">
              <h2 id="featured-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">
                Featured Products
              </h2>
              <p className="mt-3 text-gray-500 leading-relaxed">
                A selection of popular custom acrylic products. Every item can
                be customized to your specifications with engineering support
                throughout the process.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {allProducts.slice(0, 8).map((product, i) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                {/* Product Image — gradient placeholder */}
                <div className={[
                  "aspect-[4/3] bg-gradient-to-br flex items-center justify-center",
                  "from-blue-50 to-blue-100",
                  "from-sky-50 to-sky-100",
                  "from-indigo-50 to-indigo-100",
                  "from-emerald-50 to-emerald-100",
                  "from-amber-50 to-amber-100",
                  "from-purple-50 to-purple-100",
                  "from-rose-50 to-rose-100",
                  "from-teal-50 to-teal-100",
                ][i % 8]}>
                  <span className="text-4xl select-none group-hover:scale-110 transition-transform duration-300">
                    {["🖼","📦","🪧","🏆","🛍","📋","💎","🔧"][i % 8]}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-sm font-semibold text-[#0F2744] group-hover:text-blue-700 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-gray-500 leading-relaxed flex-1 line-clamp-2">
                    {product.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[#0F2744] group-hover:text-blue-700 transition-colors">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      {/* ========== END FEATURED PRODUCTS SECTION ========== */}
    </>
  );
}
