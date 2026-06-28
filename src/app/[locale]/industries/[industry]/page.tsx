import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SchemaOrg from "@/components/shared/SchemaOrg";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/utils";
import { getIndustry } from "@/data/industry-pages";

type Props = { params: Promise<{ industry: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry } = await params;
  const d = getIndustry(industry);
  if (!d) return {};
  return {
    title: `${d.h1} | Max Custom Acrylics`,
    description: d.metaDesc,
  };
}

export default async function IndustryPage({ params }: Props) {
  const { industry } = await params;
  const d = getIndustry(industry);
  if (!d) notFound();

  const bcSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Industries", url: `${SITE_URL}/industries` },
    { name: d.name, url: `${SITE_URL}/industries/${industry}` },
  ]);

  return (
    <>
      <SchemaOrg data={[bcSchema]} />

      {/* ========== 1. HERO ========== */}
      <section className="relative bg-gradient-to-b from-white to-blue-50/30" aria-labelledby="industry-hero">
        <Container className="py-12 lg:py-20">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
              { label: d.name },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 tracking-wide mb-4">
              Industry Application
            </span>
            <h1 id="industry-hero" className="text-4xl font-bold tracking-tight text-[#0F2744] sm:text-5xl lg:text-[56px] lg:leading-tight">
              {d.h1}
            </h1>
            <p className="mt-5 text-base text-gray-500 leading-relaxed sm:text-lg max-w-[560px]">
              {d.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2">Request a Quote<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#0F2744] bg-white px-6 py-3.5 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/></svg>Upload Your Drawing</Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ========== 2. FEATURED SOLUTIONS ========== */}
      <section className="bg-white" aria-labelledby="solutions-heading">
        <Container className="py-16 lg:py-20">
          <div className="max-w-[720px]">
            <h2 id="solutions-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">
              Featured Solutions
            </h2>
            <p className="mt-3 text-gray-500 leading-relaxed">
              Popular custom acrylic solutions for {d.name.toLowerCase()} applications. Every item can be tailored to your specifications.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {d.featuredProducts.map((product, i) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className={`aspect-[16/10] bg-gradient-to-br flex items-center justify-center relative ${
                  ["from-blue-50 to-blue-200/50","from-sky-50 to-sky-200/50","from-indigo-50 to-indigo-200/50","from-emerald-50 to-emerald-200/50","from-amber-50 to-amber-200/50","from-purple-50 to-purple-200/50"][i % 6]
                }`}>
                  <svg className="w-10 h-10 text-gray-400/25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-[#0F2744] group-hover:text-blue-700 transition-colors">
                    {product.name}
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-[#0F2744] group-hover:text-blue-700 transition-colors">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ========== 3. APPLICATION GALLERY ========== */}
      <section className="bg-gray-50" aria-labelledby="gallery-heading">
        <Container className="py-16 lg:py-20">
          <div className="max-w-[720px]">
            <h2 id="gallery-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">
              Application Gallery
            </h2>
            <p className="mt-3 text-gray-500 leading-relaxed">
              Real-world applications of custom acrylic solutions in {d.name.toLowerCase()} environments.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {d.applicationGallery.map((scene, i) => (
              <div
                key={i}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br shadow-sm"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  ["from-blue-100 to-blue-200/40","from-sky-100 to-sky-200/40","from-indigo-100 to-indigo-200/40","from-emerald-100 to-emerald-200/40","from-amber-100 to-amber-200/40","from-purple-100 to-purple-200/40"][i % 6]
                }`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-300/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                  <span className="text-sm font-semibold text-white">{scene}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========== 4. FINAL CTA ========== */}
      <section className="bg-white" aria-labelledby="cta-heading">
        <Container className="py-20 lg:py-28">
          <div className="max-w-[640px] mx-auto text-center">
            <h2 id="cta-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl lg:text-5xl">
              Ready to Start Your Project?
            </h2>
            <p className="mt-5 text-base text-gray-500 leading-relaxed sm:text-lg">
              Tell us about your project or upload your drawings. Our engineering
              team will recommend the most suitable acrylic solution.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center" role="group" aria-label="Call to action buttons">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-8 py-4 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2"
              >
                Request a Quote
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#0F2744] bg-white px-8 py-4 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/></svg>
                Upload Your Drawing
              </Link>
            </div>
            <p className="mt-8 text-sm text-gray-400">
              Our team typically responds within one business day.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
