import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SchemaOrg from "@/components/shared/SchemaOrg";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { getProductBySlug, getProducts } from "@/lib/data-store";
import { SITE_URL } from "@/lib/utils";

export const dynamic = "force-dynamic";

// ── New category data ──
type CategorySlug =
  | "display-solutions"
  | "signage-solutions"
  | "storage-solutions"
  | "retail-display-systems"
  | "protective-solutions"
  | "custom-acrylic-parts";

const VALID_CATEGORIES: CategorySlug[] = [
  "display-solutions", "signage-solutions", "storage-solutions",
  "retail-display-systems", "protective-solutions", "custom-acrylic-parts",
];

const catMeta: Record<CategorySlug, { title: string; desc: string; oldCategories: string[] }> = {
  "display-solutions": {
    title: "Display Solutions",
    desc: "Custom acrylic display stands and presentation fixtures for retail, exhibition and commercial environments.",
    oldCategories: ["acrylic-displays"],
  },
  "signage-solutions": {
    title: "Signage Solutions",
    desc: "Professional acrylic signage including wayfinding signs, branded panels and illuminated displays.",
    oldCategories: ["acrylic-signage"],
  },
  "storage-solutions": {
    title: "Storage Solutions",
    desc: "Acrylic boxes, cases, and organizational products for retail, office and home applications.",
    oldCategories: ["acrylic-boxes"],
  },
  "retail-display-systems": {
    title: "Retail Display Systems",
    desc: "Point-of-purchase displays, shelving, and merchandising fixtures for retail environments.",
    oldCategories: ["acrylic-home-office"],
  },
  "protective-solutions": {
    title: "Protective Solutions",
    desc: "Acrylic barriers, protective panels, and safety shields for commercial and industrial use.",
    oldCategories: ["acrylic-home-office"],
  },
  "custom-acrylic-parts": {
    title: "Custom Acrylic Parts",
    desc: "Bespoke acrylic components, precision-cut parts, and custom-fabricated items built to your exact specifications.",
    oldCategories: ["acrylic-awards-gifts"],
  },
};

const customizationOptions = [
  { icon: "🎨", title: "Material", desc: "Cast and extruded acrylic in various grades." },
  { icon: "📏", title: "Thickness", desc: "From 1mm to 50mm based on your application." },
  { icon: "🖌", title: "Color", desc: "Clear, frosted, colored, and mirrored finishes." },
  { icon: "🖨", title: "Printing", desc: "UV printing, engraving, and silk-screen options." },
  { icon: "💎", title: "Edge Finish", desc: "Diamond polished, flame polished, or as-cut." },
  { icon: "📦", title: "Packaging", desc: "Individual, retail-ready, or export packaging." },
];

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (VALID_CATEGORIES.includes(slug as CategorySlug)) {
    const m = catMeta[slug as CategorySlug];
    return { title: `${m.title} | Max Custom Acrylics`, description: m.desc };
  }
  const p = await getProductBySlug(slug);
  if (!p) return {};
  return { title: `${p.name} | Max Custom Acrylics`, description: p.description };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  // ── Category View ──
  if (VALID_CATEGORIES.includes(slug as CategorySlug)) {
    const cat = catMeta[slug as CategorySlug];
    const allProducts = await getProducts();
    const products = allProducts.filter((p) => cat.oldCategories.includes(p.category));

    const bcSchema = generateBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Products", url: `${SITE_URL}/products` },
      { name: cat.title, url: `${SITE_URL}/products/${slug}` },
    ]);

    return (
      <>
        <SchemaOrg data={[bcSchema]} />

        {/* ========== 1. HERO ========== */}
        <section className="relative bg-white overflow-hidden" aria-labelledby="cat-hero">
          <Container className="py-12 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: cat.title }]} />
                <h1 id="cat-hero" className="mt-4 text-4xl font-bold tracking-tight text-[#0F2744] sm:text-5xl lg:text-[56px] lg:leading-tight">{cat.title}</h1>
                <p className="mt-5 text-base text-gray-500 leading-relaxed sm:text-lg max-w-[560px]">{cat.desc}</p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2">Request a Quote<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></Link>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#0F2744] bg-white px-6 py-3.5 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/></svg>Upload Your Drawing</Link>
                </div>
              </div>
              <div className="relative" aria-hidden="true">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 flex items-center justify-center shadow-sm">
                  <svg className="w-16 h-16 text-gray-300/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
                </div>
                <span className="sr-only">{cat.title} — custom acrylic products</span>
              </div>
            </div>
          </Container>
        </section>

        {/* ========== 2. CATEGORY OVERVIEW ========== */}
        <section className="bg-gray-50" aria-labelledby="overview-heading">
          <Container className="py-16 lg:py-20">
            <div className="max-w-[640px]">
              <h2 id="overview-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Category Overview</h2>
              <p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">
                Premium custom {cat.title.toLowerCase()} manufactured to your exact specifications. Every product can be customized in size, material, color and finish to match your requirements.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: "📐", title: "Custom Size", desc: "Manufactured to your exact dimensions." },
                { icon: "📋", title: "Material Options", desc: "Cast, extruded, PETG, and polycarbonate." },
                { icon: "✨", title: "Logo Printing", desc: "UV printing and engraving for branding." },
                { icon: "⚙️", title: "OEM Production", desc: "Tailored manufacturing for your brand." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm flex items-start gap-3">
                  <span className="text-xl select-none">{item.icon}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-[#0F2744]">{item.title}</h3>
                    <p className="mt-0.5 text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ========== 3. PRODUCTS ========== */}
        <section className="bg-white" aria-labelledby="products-heading">
          <Container className="py-16 lg:py-20">
            <div className="mb-12">
              <h2 id="products-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Products</h2>
              <p className="mt-3 text-gray-500 max-w-2xl leading-relaxed">
                Browse our {cat.title.toLowerCase()} range. Click any product to view details.
              </p>
            </div>
            {products.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((product, i) => (
                  <Link key={product.slug} href={`/products/${product.slug}`} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                    <div className={`aspect-[4/3] bg-gradient-to-br flex items-center justify-center relative ${
                      ["from-blue-50 to-blue-200/50","from-sky-50 to-sky-200/50","from-indigo-50 to-indigo-200/50","from-emerald-50 to-emerald-200/50","from-amber-50 to-amber-200/50","from-purple-50 to-purple-200/50"][i % 6]
                    }`}>
                      <svg className="w-10 h-10 text-gray-400/25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="text-sm font-semibold text-[#0F2744] group-hover:text-blue-700 transition-colors line-clamp-2">{product.name}</h3>
                      <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-[#0F2744] group-hover:text-blue-700 transition-colors">View Details<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-center py-12">No products found in this category. <Link href="/contact" className="text-[#0F2744] underline">Contact us</Link> for custom requirements.</p>
            )}
          </Container>
        </section>

        {/* ========== 4. CUSTOMIZATION OPTIONS ========== */}
        <section className="bg-gray-50" aria-labelledby="custom-heading">
          <Container className="py-16 lg:py-20">
            <div className="mb-12">
              <h2 id="custom-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Customization Options</h2>
              <p className="mt-3 text-gray-500 max-w-2xl leading-relaxed">
                Every {cat.title.toLowerCase()} product can be tailored with these customization options.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {customizationOptions.map((opt) => (
                <div key={opt.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm flex items-start gap-4">
                  <span className="text-2xl select-none">{opt.icon}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-[#0F2744]">{opt.title}</h3>
                    <p className="mt-0.5 text-sm text-gray-500 leading-relaxed">{opt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ========== 5. CTA ========== */}
        <section className="bg-white" aria-labelledby="cta-heading">
          <Container className="py-20 lg:py-28">
            <div className="max-w-[640px] mx-auto text-center">
              <h2 id="cta-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl lg:text-5xl">Need a Custom Acrylic Solution?</h2>
              <p className="mt-5 text-base text-gray-500 leading-relaxed sm:text-lg">Tell us about your project and our team will provide the right solution.</p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center" role="group" aria-label="Call to action buttons">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-8 py-4 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2">Request a Quote<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#0F2744] bg-white px-8 py-4 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/></svg>Upload Your Drawing</Link>
              </div>
              <p className="mt-8 text-sm text-gray-400">Our team typically responds within one business day.</p>
            </div>
          </Container>
        </section>
      </>
    );
  }

  // ── Product Detail View (unchanged) ──
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const productSchema = null;
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Products", url: `${SITE_URL}/products` },
    { name: product.name, url: `${SITE_URL}/products/${product.slug}` },
  ]);

  return (
    <>
      <SchemaOrg data={[breadcrumbSchema]} />
      <Container className="py-12">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: product.name }]} />
        <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center">
            {product.images?.[0] ? <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover rounded-2xl" /> : (
              <svg className="w-16 h-16 text-gray-300/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
            )}
          </div>
          <div>
            <span className="text-sm font-medium text-blue-700 uppercase tracking-wider">{product.category.replace("-", " ")}</span>
            <h1 className="mt-2 text-3xl font-bold text-[#0F2744] sm:text-4xl">{product.name}</h1>
            <p className="mt-4 text-gray-500 leading-relaxed">{product.longDescription}</p>
            {product.specs && product.specs.length > 0 && (
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-[#0F2744]">Specifications</h2>
                <div className="mt-3 divide-y divide-gray-200 border-y border-gray-200">
                  {product.specs.map((spec) => (<div key={spec.label} className="flex justify-between py-2.5 text-sm"><span className="text-gray-500">{spec.label}</span><span className="font-medium text-[#0F2744]">{spec.value}</span></div>))}
                </div>
              </div>
            )}
            <div className="mt-6">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm">Request a Quote<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
