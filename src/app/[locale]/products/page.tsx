import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SchemaOrg from "@/components/shared/SchemaOrg";
import { generateBreadcrumbSchema, generateOrganizationSchema } from "@/lib/schema";
import { getSettings } from "@/lib/data-store";
import { SITE_URL } from "@/lib/utils";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Custom Acrylic Products | Max Custom Acrylics",
  description: "Browse our range of custom acrylic products — displays, boxes, signs, trays, shelves and protective products. Fully customizable to your specifications.",
};

const categories = [
  { title: "Precision Instruments", slug: "precision-instruments", desc: "High-precision acrylic components for scientific, medical, and industrial instrument applications.", color: "from-rose-100 to-rose-200/60", imgKey: "catImg7" },
  { title: "Acrylic Displays", slug: "acrylic-displays-2", desc: "Custom acrylic displays for retail, exhibitions and commercial merchandising.", color: "from-sky-100 to-sky-200/60", imgKey: "catImg2" },
  { title: "Acrylic Boxes", slug: "acrylic-boxes-2", desc: "Custom acrylic boxes for display, storage, packaging and commercial applications.", color: "from-indigo-100 to-indigo-200/60", imgKey: "catImg3" },
  { title: "Acrylic Signs", slug: "acrylic-signs-2", desc: "Custom acrylic signs for branding, offices, retail and hospitality.", color: "from-emerald-100 to-emerald-200/60", imgKey: "catImg4" },
  { title: "Acrylic Trays & Shelves", slug: "acrylic-trays-shelves", desc: "Functional acrylic trays and shelving solutions for retail, office and commercial environments.", color: "from-amber-100 to-amber-200/60", imgKey: "catImg5" },
  { title: "Protective Products", slug: "protective-products-2", desc: "Protective acrylic panels and safety products for commercial and industrial applications.", color: "from-purple-100 to-purple-200/60", imgKey: "catImg6" },
  { title: "Acrylic Furniture", slug: "acrylic-furniture", desc: "Modern acrylic furniture including tables, chairs, shelves and decorative pieces for residential and commercial spaces.", color: "from-teal-100 to-teal-200/60", imgKey: "catImg8" },
  { title: "Acrylic Trophies", slug: "acrylic-trophies", desc: "Custom acrylic trophies, plaques, and recognition awards for corporate events, competitions, and celebrations.", color: "from-yellow-100 to-yellow-200/60", imgKey: "catImg9" },
  { title: "Custom Acrylic Products", slug: "custom-acrylic-products", desc: "Fully customized acrylic products designed according to your drawings, ideas and project requirements.", color: "from-blue-100 to-blue-200/60", imgKey: "catImg1" },
];

export default async function ProductsPage() {
  const s = await getSettings();
  return (
    <>
      <SchemaOrg data={[generateOrganizationSchema(), generateBreadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Products", url: `${SITE_URL}/products` }])]} />
      {/* ========== HERO ========== */}
      <section className="relative bg-white" aria-labelledby="products-hero">
        <Container className="py-12 lg:py-16">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Products" }]} />
          <div className="mt-6 max-w-3xl">
            <h1 id="products-hero" className="text-4xl font-bold tracking-tight text-[#0F2744] sm:text-5xl lg:text-[56px] lg:leading-tight">Custom Acrylic Products</h1>
            <p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">Explore our range of custom acrylic products. Every product can be customized to your specifications, dimensions and branding requirements.</p>
          </div>
        </Container>
      </section>

      {/* ========== PRODUCT CATEGORIES ========== */}
      <section className="bg-gray-50" aria-labelledby="categories-heading">
        <Container className="py-16 lg:py-20">
          <div className="mb-12 text-center">
            <h2 id="categories-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Product Categories</h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto leading-relaxed">Browse our range of custom acrylic product categories. Each category can be fully customized to your requirements.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/products/${cat.slug}`} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className={`relative overflow-hidden bg-gradient-to-br ${cat.color}`} style={{ paddingBottom: "62.5%" }}>
                  {s[cat.imgKey] ? <img src={s[cat.imgKey]} alt={cat.title} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} /> : <div className="absolute inset-0 flex items-center justify-center"><svg className="w-10 h-10 text-gray-400/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg></div>}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-[#0F2744] group-hover:text-blue-700 transition-colors">{cat.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed flex-1">{cat.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#0F2744] group-hover:text-blue-700 transition-colors">Explore Collection<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ========== CTA ========== */}
      <section className="bg-white" aria-labelledby="cta-heading">
        <Container className="py-20 lg:py-28">
          <div className="max-w-[640px] mx-auto text-center">
            <h2 id="cta-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl lg:text-5xl">Need a Custom Acrylic Solution?</h2>
            <p className="mt-5 text-base text-gray-500 leading-relaxed sm:text-lg">Tell us about your project and we'll recommend the best acrylic solution.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-8 py-4 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm">Request a Quote<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#0F2744] bg-white px-8 py-4 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/></svg>Upload Your Drawing</Link>
            </div>
            <p className="mt-8 text-sm text-gray-400">Our team typically responds within one business day.</p>
          </div>
        </Container>
      </section>
    </>
  );
}
