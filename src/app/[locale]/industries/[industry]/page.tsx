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

const capabilities = [
  { name: "Laser Cutting", slug: "laser-cutting", icon: "🔬" },
  { name: "CNC Machining", slug: "cnc-machining", icon: "⚙️" },
  { name: "Diamond Polishing", slug: "diamond-polishing", icon: "💎" },
  { name: "UV Printing", slug: "uv-printing", icon: "🎨" },
  { name: "Assembly & Packaging", slug: "bonding-assembly", icon: "📦" },
  { name: "Quality Control", slug: "oem-project-support", icon: "🛡" },
];

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
      <section className="relative bg-white overflow-hidden" aria-labelledby="industry-hero">
        <Container className="py-12 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <Breadcrumb
                items={[
                  { label: "Home", href: "/" },
                  { label: "Industries", href: "/industries" },
                  { label: d.name },
                ]}
              />
              <h1 id="industry-hero" className="mt-4 text-4xl font-bold tracking-tight text-[#0F2744] sm:text-5xl lg:text-[56px] lg:leading-tight">
                {d.h1}
              </h1>
              <p className="mt-5 text-base text-gray-500 leading-relaxed sm:text-lg max-w-[620px]">
                {d.intro}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
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
            </div>
            <div className="relative" aria-hidden="true">
              <div className="grid grid-cols-3 gap-2.5">
                {d.applications.slice(0, 6).map((app, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-xl overflow-hidden bg-gradient-to-br shadow-sm relative flex items-center justify-center ${
                      ["from-blue-100 to-blue-200/50","from-sky-100 to-sky-200/50","from-indigo-100 to-indigo-200/50","from-emerald-100 to-emerald-200/50","from-amber-100 to-amber-200/50","from-purple-100 to-purple-200/50"][i % 6]
                    }`}
                  >
                    <span className="text-[10px] text-gray-500 font-medium text-center px-1 leading-tight">{app}</span>
                  </div>
                ))}
              </div>
              <span className="sr-only">Custom acrylic solutions for {d.name} applications</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ========== 2. INDUSTRY NEEDS ========== */}
      <section className="bg-gray-50" aria-labelledby="needs-heading">
        <Container className="py-16 lg:py-20">
          <div className="max-w-[720px]">
            <h2 id="needs-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">
              {d.name} Industry Needs
            </h2>
            <p className="mt-3 text-gray-500 leading-relaxed">
              Understanding the specific requirements of {d.name.toLowerCase()} helps us recommend the right materials, processes and finishes for your project.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {d.applications.slice(0, 6).map((need, i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F2744" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <span className="text-sm text-gray-600 leading-relaxed">{need}</span>
              </div>
            ))}
            {d.applications.length < 6 && Array.from({ length: 6 - d.applications.length }).map((_, i) => (
              <div key={`empty-${i}`} className="hidden sm:block" />
            ))}
          </div>
        </Container>
      </section>

      {/* ========== 3. RECOMMENDED PRODUCTS ========== */}
      <section className="bg-white" aria-labelledby="products-heading">
        <Container className="py-16 lg:py-20">
          <div className="max-w-[720px]">
            <h2 id="products-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">
              Recommended Products
            </h2>
            <p className="mt-3 text-gray-500 leading-relaxed">
              Our most popular custom acrylic products for {d.name.toLowerCase()} applications. Every product can be tailored to your specifications.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {d.commonProducts.map((product, i) => (
              <Link
                key={i}
                href="/products"
                className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className={`aspect-[16/10] bg-gradient-to-br flex items-center justify-center ${
                  ["from-blue-50 to-blue-100/50","from-sky-50 to-sky-100/50","from-indigo-50 to-indigo-100/50","from-emerald-50 to-emerald-100/50","from-amber-50 to-amber-100/50","from-purple-50 to-purple-100/50"][i % 6]
                }`}>
                  <svg className="w-10 h-10 text-gray-400/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-sm font-semibold text-[#0F2744] group-hover:text-blue-700 transition-colors">
                    {product}
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-[#0F2744] group-hover:text-blue-700 transition-colors">
                    View Products
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ========== 4. RECOMMENDED CAPABILITIES ========== */}
      <section className="bg-gray-50" aria-labelledby="capabilities-heading">
        <Container className="py-16 lg:py-20">
          <div className="max-w-[720px]">
            <h2 id="capabilities-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">
              Recommended Capabilities
            </h2>
            <p className="mt-3 text-gray-500 leading-relaxed">
              Our engineering team coordinates the most suitable manufacturing processes for {d.name.toLowerCase()} projects.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <Link
                key={cap.slug}
                href={`/services/${cap.slug}`}
                className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all flex items-start gap-4"
              >
                <span className="text-2xl select-none">{cap.icon}</span>
                <div>
                  <h3 className="text-sm font-semibold text-[#0F2744] group-hover:text-blue-700 transition-colors">
                    {cap.name}
                  </h3>
                  <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-[#0F2744] group-hover:text-blue-700 transition-colors">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ========== 5. FINAL CTA ========== */}
      <section className="bg-white" aria-labelledby="cta-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]">
            <h2 id="cta-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">
              Ready to Discuss Your {d.name} Project?
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">
              Whether you have detailed drawings or just an initial concept, our
              engineering team is ready to help you evaluate your {d.name.toLowerCase()} project
              and recommend the most suitable manufacturing approach.
            </p>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              {[
                { icon: "📐", title: "Engineering Review", desc: "Your design reviewed for manufacturability and cost optimization." },
                { icon: "📋", title: "Material Recommendation", desc: "Expert guidance on materials for your application requirements." },
                { icon: "🔬", title: "Prototype Support", desc: "Sampling available to validate your design before full production." },
                { icon: "🌐", title: "Worldwide Delivery", desc: "Export-ready packaging and logistics to over 30 countries." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-lg">{item.icon}</div>
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
                Send us your project brief and our team will respond with a
                tailored quotation and manufacturing recommendations for your
                {d.name.toLowerCase()} application.
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
    </>
  );
}
