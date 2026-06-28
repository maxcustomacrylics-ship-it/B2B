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
      {/* ========== PRODUCT CATEGORIES HERO ========== */}
      <section className="relative bg-white overflow-hidden" aria-labelledby="products-hero-heading">
        <Container className="py-12 lg:py-20">
          <Breadcrumb
            items={[
              { label: t("breadcrumbHome"), href: "/" },
              { label: t("breadcrumbProducts") },
            ]}
          />
          <div className="mt-4 text-center">
            <h1 id="products-hero-heading" className="text-4xl font-bold tracking-tight text-[#0F2744] sm:text-5xl lg:text-[56px] lg:leading-tight">
              Product Categories
            </h1>
            <p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg max-w-[620px] mx-auto">
              Browse our range of custom acrylic product categories. Each category
              can be fully customized to your specifications, dimensions and branding
              requirements.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Display Solutions",
                slug: "display-solutions",
                desc: "Custom acrylic displays, stands and presentation fixtures for retail, exhibition and commercial environments.",
                count: 12,
                color: "from-blue-100 to-blue-200/60",
              },
              {
                title: "Signage",
                slug: "signage",
                desc: "Indoor and outdoor acrylic signage including wayfinding signs, branded panels and illuminated displays.",
                count: 8,
                color: "from-indigo-100 to-indigo-200/60",
              },
              {
                title: "Storage & Organization",
                slug: "storage-organization",
                desc: "Acrylic boxes, cases, trays and organizational products for retail, office and home applications.",
                count: 10,
                color: "from-sky-100 to-sky-200/60",
              },
              {
                title: "Retail Fixtures",
                slug: "retail-fixtures",
                desc: "Point-of-purchase displays, shelving, brochure holders and merchandising fixtures for retail environments.",
                count: 15,
                color: "from-emerald-100 to-emerald-200/60",
              },
              {
                title: "Protective Products",
                slug: "protective-products",
                desc: "Acrylic barriers, protective panels, machine guards and safety shields for commercial and industrial use.",
                count: 6,
                color: "from-amber-100 to-amber-200/60",
              },
              {
                title: "Custom Components",
                slug: "custom-components",
                desc: "Bespoke acrylic parts, precision-cut components and custom-fabricated items built to your exact specifications.",
                count: 20,
                color: "from-purple-100 to-purple-200/60",
              },
            ].map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className={`aspect-[16/10] bg-gradient-to-br ${cat.color} flex items-center justify-center relative`}>
                  <svg className="w-10 h-10 text-gray-400/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
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
      {/* ========== END PRODUCT CATEGORIES HERO ========== */}

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
                  "aspect-[4/3] bg-gradient-to-br flex items-center justify-center relative",
                  "from-blue-50 to-blue-200/50",
                  "from-sky-50 to-sky-200/50",
                  "from-indigo-50 to-indigo-200/50",
                  "from-emerald-50 to-emerald-200/50",
                  "from-amber-50 to-amber-200/50",
                  "from-purple-50 to-purple-200/50",
                  "from-rose-50 to-rose-200/50",
                  "from-teal-50 to-teal-200/50",
                ][i % 8]}>
                  <svg className="w-8 h-8 text-gray-400/25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
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

      {/* ========== FAQ SECTION ========== */}
      <section className="py-16 lg:py-24 bg-gray-50" aria-labelledby="products-faq-heading">
        <Container>
          <div className="text-center mb-12">
            <h2 id="products-faq-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions about ordering custom acrylic products.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid gap-4 sm:grid-cols-2">
            {[
              {
                q: "Can I customize the dimensions and design of any product?",
                a: "Yes. Every product can be customized to your exact dimensions, material preference and finish requirements. Simply provide your specifications or drawings and our engineering team will review them before production."
              },
              {
                q: "What is the typical lead time for custom acrylic products?",
                a: "Standard lead time is 12–18 business days depending on product complexity and order quantity. Rush orders can often be accommodated — please discuss your timeline with our team during quotation."
              },
              {
                q: "Do you provide samples before full production?",
                a: "Yes, we recommend pre-production samples for approval. This allows you to verify dimensions, material quality and finish before we proceed with the full order."
              },
              {
                q: "What information do I need to provide for a quotation?",
                a: "Drawings or sketches with dimensions, desired material and finish, order quantity, and any specific requirements. If you only have a concept, our engineering team can help develop production-ready designs."
              },
              {
                q: "Do you offer bulk pricing for larger orders?",
                a: "Yes, pricing is tiered based on order quantity. Larger volumes benefit from production efficiencies and reduced per-unit costs. Contact our team for a detailed quotation tailored to your quantity."
              },
              {
                q: "What quality checks are performed before shipping?",
                a: "We conduct multi-stage inspection including dimensional verification, visual quality checks and documented photo reports. Pre-shipment approval is available so you know exactly what you're receiving."
              },
            ].map((faq, i) => (
              <details key={i} className="group rounded-xl border border-gray-200 bg-white [&_summary::-webkit-details-marker]:hidden">
                <summary className="cursor-pointer px-5 py-4 text-sm font-semibold text-[#0F2744] list-none flex items-start justify-between gap-3">
                  <span>{faq.q}</span>
                  <span className="shrink-0 text-gray-400 group-open:hidden text-lg leading-none mt-0.5">+</span>
                  <span className="shrink-0 text-gray-400 hidden group-open:block text-lg leading-none mt-0.5">−</span>
                </summary>
                <p className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
      {/* ========== END FAQ SECTION ========== */}

      {/* ========== FINAL CTA SECTION ========== */}
      <section className="bg-white" aria-labelledby="products-cta-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]">
            <h2 id="products-cta-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">
              Ready to Start Your Custom Acrylic Project?
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">
              Whether you already have a drawing or just an idea, our
              engineering team is ready to help you find the right solution.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              {[
                { icon: "📐", title: "Engineering Review", desc: "Your design reviewed by experienced engineers for manufacturability and cost optimization." },
                { icon: "📋", title: "Material Recommendation", desc: "Expert guidance on material selection based on your application and performance requirements." },
                { icon: "🔬", title: "Prototype Support", desc: "Prototyping and sampling available to validate your design before full production." },
                { icon: "🌐", title: "Worldwide Delivery", desc: "Export-ready packaging and international logistics to over 30 countries." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#0F2744]">{item.title}</h3>
                    <p className="mt-0.5 text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[#0F2744] to-[#1a3a5c] p-8 text-white flex flex-col justify-center">
              <h3 className="text-xl font-bold">Start Your Project Today</h3>
              <p className="mt-3 text-blue-200 leading-relaxed text-sm">
                Send us your drawings or project brief. Our team will review
                your requirements and respond with a detailed quotation and
                manufacturing recommendations.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F2744]">
                  Request a Quote
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-transparent px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F2744]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/></svg>
                  Upload Your Drawing
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-400">
            Our team typically responds within one business day.
          </p>
        </Container>
      </section>
      {/* ========== END FINAL CTA SECTION ========== */}
    </>
  );
}
