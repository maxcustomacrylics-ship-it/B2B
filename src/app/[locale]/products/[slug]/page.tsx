import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SchemaOrg from "@/components/shared/SchemaOrg";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { getProductBySlug, getProducts, getSettings } from "@/lib/data-store";
import { SITE_URL } from "@/lib/utils";

export const dynamic = "force-dynamic";

const customizationOptions = [
  { icon: "🎨", title: "Material", desc: "Cast and extruded acrylic in various grades." },
  { icon: "📏", title: "Thickness", desc: "From 1mm to 25mm based on your application." },
  { icon: "🖌", title: "Color", desc: "Clear, frosted, colored, and mirrored finishes." },
  { icon: "💎", title: "Surface Finish", desc: "Diamond polished, flame polished, or matte." },
  { icon: "✨", title: "Logo Printing", desc: "UV printing, laser engraving, or silk-screen." },
  { icon: "📦", title: "Packaging", desc: "Individual, retail-ready, or export packaging." },
];

// ── Category slug mapping ──
const catMap: Record<string, { title: string; desc: string; oldCats: string[] }> = {
  "custom-acrylic-products": { title: "Custom Acrylic Products", desc: "From concept to finished product, we manufacture completely customized acrylic products based on your drawings and business requirements.", oldCats: ["custom-acrylic"] },
  "acrylic-displays-2": { title: "Acrylic Displays", desc: "Custom acrylic displays for retail, exhibitions and commercial merchandising.", oldCats: ["acrylic-displays"] },
  "acrylic-boxes-2": { title: "Acrylic Boxes", desc: "Custom acrylic boxes for display, storage, packaging and commercial applications.", oldCats: ["acrylic-boxes"] },
  "acrylic-signs-2": { title: "Acrylic Signs", desc: "Custom acrylic signs for branding, offices, retail and hospitality.", oldCats: ["acrylic-signage"] },
  "acrylic-trays-shelves": { title: "Acrylic Trays & Shelves", desc: "Functional acrylic trays and shelving solutions for retail, office and commercial environments.", oldCats: ["acrylic-home-office"] },
  "protective-products-2": { title: "Protective Products", desc: "Protective acrylic panels and safety products for commercial and industrial applications.", oldCats: ["acrylic-awards-gifts"] },
  "precision-instruments": { title: "Precision Instruments", desc: "High-precision acrylic components for scientific, medical, and industrial instrument applications.", oldCats: ["acrylic-precision-instruments"] },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (catMap[slug]) {
    const c = catMap[slug];
    return { title: `${c.title} | Max Custom Acrylics`, description: c.desc, openGraph: { type: "website", title: `${c.title} | Max Custom Acrylics`, description: c.desc } };
  }
  const p = await getProductBySlug(slug);
  if (!p) return {};
  return { title: `${p.name} | Max Custom Acrylics`, description: p.description, openGraph: { type: "website", title: `${p.name} | Max Custom Acrylics`, description: p.description } };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  // ── CATEGORY VIEW ──
  if (catMap[slug]) {
    const cat = catMap[slug];
    const all = await getProducts();
    const settings = await getSettings();
    let products = all.filter((p) => cat.oldCats.includes(p.category));
    // Sort by productOrder if available
    try {
      const order: string[] = JSON.parse(settings.productOrder || "[]");
      if (order.length > 0) {
        const orderMap: Record<string, number> = {};
        order.forEach((slug, i) => { orderMap[slug] = i; });
        products.sort((a, b) => (orderMap[a.slug] ?? 999) - (orderMap[b.slug] ?? 999));
      }
    } catch {}
    const bcSchema = generateBreadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Products", url: `${SITE_URL}/products` }, { name: cat.title, url: `${SITE_URL}/products/${slug}` }]);

    return (
      <>
        <SchemaOrg data={[bcSchema]} />

        {/* 1. HERO */}
        <section className="relative bg-white" aria-labelledby="cat-hero">
          <Container className="py-12 lg:py-16">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: cat.title }]} />
            <div className="mt-6 max-w-3xl">
              <h1 id="cat-hero" className="text-4xl font-bold tracking-tight text-[#0F2744] sm:text-5xl lg:text-[56px] lg:leading-tight">{cat.title}</h1>
              <p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">{cat.desc}</p>
            </div>
          </Container>
        </section>

        {/* 2. PRODUCT COLLECTION */}
        <section className="bg-white" aria-labelledby="products-heading">
          <Container className="py-16 lg:py-20">
            <div className="mb-12"><h2 id="products-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Product Collection</h2><p className="mt-3 text-gray-500 max-w-2xl leading-relaxed">Browse our {cat.title.toLowerCase()} range. Click any product to view details.</p></div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((p, i) => (
                <Link key={p.slug} href={`/products/${p.slug}`} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  <div className={`aspect-[4/3] flex items-center justify-center overflow-hidden ${["bg-gradient-to-br from-blue-50 to-blue-200/50","bg-gradient-to-br from-sky-50 to-sky-200/50","bg-gradient-to-br from-indigo-50 to-indigo-200/50","bg-gradient-to-br from-emerald-50 to-emerald-200/50"][i % 4]}`}>
                    {p.images?.[0] ? <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /> : <svg className="w-10 h-10 text-gray-400/25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>}
                  </div>
                  <div className="p-4"><h3 className="text-sm font-semibold text-[#0F2744] group-hover:text-blue-700 transition-colors">{p.name}</h3><span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-[#0F2744] group-hover:text-blue-700 transition-colors">View Details<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span></div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        {/* ========== CUSTOMIZATION SERVICES ========== */}
        <section className="bg-white" aria-labelledby="services-heading">
          <Container className="py-[120px]">
            <div className="max-w-[640px] mb-12">
              <h2 id="services-heading" className="text-3xl font-bold tracking-tight text-[#0F2744] sm:text-4xl">Customization Services</h2>
              <p className="mt-3 text-gray-500 leading-relaxed">From concept to delivery, we provide complete custom acrylic manufacturing services tailored to your project.</p>
            </div>
            <div className="grid grid-cols-2 gap-0 md:grid-cols-3 lg:grid-cols-6 border border-gray-200 rounded-2xl overflow-hidden divide-x divide-gray-100">
              {[
                { step: "01", icon: "📐", title: "Design Review", desc: "Review drawings and optimize product structure before production." },
                { step: "02", icon: "📋", title: "Material Selection", desc: "Recommend the best acrylic material, thickness and finish." },
                { step: "03", icon: "⚙️", title: "Custom Engineering", desc: "Develop custom solutions based on your application requirements." },
                { step: "04", icon: "🔬", title: "Prototype Development", desc: "Produce samples for testing and design verification." },
                { step: "05", icon: "🏭", title: "Precision Manufacturing", desc: "Laser cutting, CNC machining, polishing, printing and assembly." },
                { step: "06", icon: "📦", title: "Packaging & Delivery", desc: "Secure packaging with worldwide shipping support." },
              ].map((s) => (
                <div key={s.step} className="group flex flex-col items-center text-center p-6 sm:p-8 hover:bg-gray-50/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-gray-300 uppercase">{s.step}</span>
                  <span className="mt-3 text-3xl select-none">{s.icon}</span>
                  <h3 className="mt-3 text-sm font-semibold text-[#0F2744]">{s.title}</h3>
                  <p className="mt-1.5 text-xs text-gray-500 leading-relaxed max-w-[140px]">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F2744] hover:text-blue-700 transition-colors">
                Need a fully customized solution?
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </Container>
        </section>

        {/* 4. CUSTOMIZATION OPTIONS */}
        <section className="bg-gray-50" aria-labelledby="custom-heading">
          <Container className="py-16 lg:py-20">
            <div className="mb-12"><h2 id="custom-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Customization Options</h2><p className="mt-3 text-gray-500 max-w-2xl leading-relaxed">Every {cat.title.toLowerCase()} product can be tailored with these customization options.</p></div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {customizationOptions.map((opt) => (
                <div key={opt.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm flex items-start gap-4">
                  <span className="text-2xl select-none">{opt.icon}</span>
                  <div><h3 className="text-sm font-semibold text-[#0F2744]">{opt.title}</h3><p className="mt-0.5 text-sm text-gray-500 leading-relaxed">{opt.desc}</p></div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 5. CTA */}
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

  // ── PRODUCT DETAIL VIEW ──
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const bcSchema = generateBreadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Products", url: `${SITE_URL}/products` }, { name: product.name, url: `${SITE_URL}/products/${product.slug}` }]);

  return (
    <>
      <SchemaOrg data={[bcSchema]} />

      <Container className="py-8 lg:py-12">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: product.name }]} />
        <h1 className="mt-4 text-3xl font-bold text-[#0F2744] sm:text-4xl">{product.name}</h1>
        <p className="mt-2 text-sm text-gray-500 max-w-2xl">{product.description}</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {/* Left: Gallery */}
          <div>
            <div className={`grid gap-3 ${(product.images || []).filter(Boolean).length === 1 ? "grid-cols-1" : "grid-cols-2"}`}>
              {(product.images || []).filter(Boolean).length > 0 ? (
                (product.images || []).filter(Boolean).map((img, i) => (
                  <div key={i} className={`${(product.images || []).filter(Boolean).length === 1 ? "aspect-[16/9]" : i === 0 && (product.images || []).filter(Boolean).length === 3 ? "col-span-2 aspect-[16/9]" : "aspect-square"} rounded-xl bg-gradient-to-br from-blue-50 to-blue-200/50 overflow-hidden`}>
                    <img src={img} alt={`${product.name} — image ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))
              ) : (
                ["from-blue-100 to-blue-200/50","from-sky-100 to-sky-200/50","from-indigo-100 to-indigo-200/50","from-emerald-100 to-emerald-200/50"].map((c, i) => (
                  <div key={i} className={`aspect-square rounded-xl bg-gradient-to-br ${c}`} />
                ))
              )}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-gray-400">
              {[{icon:"📐",label:"Custom Size"},{icon:"🤝",label:"OEM Available"},{icon:"💎",label:"Premium Acrylic"},{icon:"⚡",label:"Fast Response"}].map(h=>(
                <span key={h.label} className="flex items-center gap-1.5"><span>{h.icon}</span>{h.label}</span>
              ))}
            </div>
          </div>

          {/* Right: Quick Specifications */}
          <div>
            <h2 className="text-lg font-semibold text-[#0F2744] mb-4">Quick Specifications</h2>
            <div className="divide-y divide-gray-200 border-y border-gray-200">
              {product.specs.map((s) => (
                <div key={s.label} className="flex justify-between py-3 text-sm"><span className="text-gray-500">{s.label}</span><span className="font-medium text-[#0F2744]">{s.value}</span></div>
              ))}
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm">Request a Quote<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#0F2744] bg-white px-5 py-3 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/></svg>Upload Your Drawing</Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
