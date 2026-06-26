import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import InquiryForm from "@/components/products/InquiryForm";
import SchemaOrg from "@/components/shared/SchemaOrg";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/utils";
import { getServicePage, servicePages } from "@/data/service-pages";
import { ArrowRight, Check, Upload, Search, Cog, ShieldCheck, Globe } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getServicePage(slug);
  if (!s) return {};
  return { title: `${s.h1} | Max Custom Acrylics`, description: s.metaDesc };
}

const steps = ["Inquiry","Drawing Review","Quotation","Prototype","Production","Inspection","Packaging","Shipping"];

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = getServicePage(slug);
  if (!s) notFound();

  const faqSchema = generateFAQSchema(s.faqs);
  const bcSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },{ name: "Services", url: `${SITE_URL}/services` },{ name: s.title, url: `${SITE_URL}/services/${slug}` },
  ]);

  return (
    <>
      <SchemaOrg data={[bcSchema, faqSchema]} />
      <Container className="py-12">
        <Breadcrumb items={[{ label: "Home", href: "/" },{ label: "Services", href: "/services" },{ label: s.title }]} />

        {/* Hero */}
        <div className="mt-8 grid gap-10 lg:grid-cols-2 items-center lg:min-h-[600px]">
          {/* Left column */}
          <div className="max-w-[620px]">
            <h1 className="text-4xl font-bold tracking-tight text-[#0F2744] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              {s.h1}
            </h1>
            <p className="mt-6 text-base text-gray-500 leading-relaxed sm:text-lg">{s.intro}</p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#0F2744] hover:border-[#0F2744] transition-colors"
              >
                <Upload className="h-4 w-4" /> Upload Your Drawing
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
              <span className="flex items-center gap-1.5"><Search className="h-4 w-4 text-blue-600 flex-shrink-0" /> Engineering Review</span>
              <span className="flex items-center gap-1.5"><Cog className="h-4 w-4 text-blue-600 flex-shrink-0" /> Custom Manufacturing</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-blue-600 flex-shrink-0" /> Quality Inspection</span>
              <span className="flex items-center gap-1.5"><Globe className="h-4 w-4 text-blue-600 flex-shrink-0" /> Worldwide Delivery</span>
            </div>
          </div>

          {/* Right column — Hero image */}
          <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center overflow-hidden lg:min-h-[400px]">
            <img
              src="/images/services/acrylic-laser-cutting.jpg"
              alt="Custom acrylic laser cutting service for precision fabricated acrylic products"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <span className="absolute text-8xl opacity-15 select-none pointer-events-none">🔬</span>
          </div>
        </div>

        {/* Overview Section */}
        <section className="mt-28" aria-labelledby="overview-heading">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            {/* Left — Images */}
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center overflow-hidden">
                <span className="text-8xl opacity-20 select-none">🔬</span>
              </div>
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-100 to-blue-50 flex items-center justify-center overflow-hidden">
                <span className="text-8xl opacity-20 select-none">📦</span>
              </div>
            </div>

            {/* Right — Text + Highlights */}
            <div>
              <h2 id="overview-heading" className="text-2xl font-bold text-[#0F2744] sm:text-3xl">
                Precision Acrylic Laser Cutting Solutions
              </h2>

              {s.overview ? (
                <div className="mt-5 space-y-4 text-gray-500 leading-relaxed">
                  <p>{s.overview.para1}</p>
                  <p>{s.overview.para2}</p>
                  <p>{s.overview.para3}</p>
                </div>
              ) : (
                <p className="mt-5 text-gray-500 leading-relaxed">{s.whatIs}</p>
              )}

              {/* Key Highlights */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  { icon: Check, title: "Clean Edge Finish", desc: "Laser-cut edges come out flame-polished and ready for use." },
                  { icon: Check, title: "High Precision Cutting", desc: "Tolerances as tight as ±0.1mm for consistent production quality." },
                  { icon: Check, title: "Complex Custom Shapes", desc: "Intricate geometries not possible with traditional cutting methods." },
                  { icon: Check, title: "Flexible Production Quantities", desc: "From single prototypes to thousands of identical parts." },
                ].map((h) => (
                  <div key={h.title} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4">
                    <h.icon className="h-5 w-5 text-green-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-[#0F2744] text-sm">{h.title}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Materials */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#0F2744]">Materials Supported</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{s.materials.map((m,i)=>(<div key={i} className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">{m}</div>))}</div>
        </div>

        {/* Specs + Applications */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-[#0F2744]">Manufacturing Capabilities</h2>
            <div className="mt-4 divide-y border-y"><div className="flex justify-between py-3 text-sm"><span className="text-gray-500">Specification</span><span className="font-medium text-[#0F2744]">Detail</span></div>
              {s.specs.map((sp,i)=>(<div key={i} className="flex justify-between py-2.5 text-sm"><span className="text-gray-500">{sp.label}</span><span className="font-medium text-[#0F2744]">{sp.value}</span></div>))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#0F2744]">Applications</h2>
            <div className="mt-4 flex flex-wrap gap-2">{s.applications.map((a,i)=>(<span key={i} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">{a}</span>))}</div>
          </div>
        </div>

        {/* Process Flow */}
        <div className="mt-16 rounded-xl bg-gray-50 p-8">
          <h2 className="text-2xl font-bold text-[#0F2744] text-center mb-8">How We Deliver Your Project</h2>
          <div className="flex flex-wrap justify-center gap-2 text-sm">{steps.map((st,i)=>(<span key={i} className="flex items-center gap-2"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0F2744] text-white text-xs font-bold">{i+1}</span>{st}{i<steps.length-1&&<span className="text-gray-300 mx-1">→</span>}</span>))}</div>
        </div>

        {/* Why Choose */}
        <div className="mt-16"><h2 className="text-2xl font-bold text-[#0F2744] text-center mb-8">Why Choose Max Custom Acrylics</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{["Engineering Support","Stable Quality","Professional Communication","Flexible MOQ","Worldwide Shipping"].map((w,i)=>(<div key={i} className="rounded-xl border border-gray-200 bg-white p-5 text-center"><Check className="h-5 w-5 text-green-600 mx-auto mb-2" /><h3 className="font-semibold text-[#0F2744] text-sm">{w}</h3></div>))}</div>
        </div>

        {/* FAQ */}
        <div className="mt-16"><h2 className="text-2xl font-bold text-[#0F2744] mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl">{s.faqs.map((f,i)=>(<div key={i} className="rounded-xl border border-gray-200 bg-white p-5"><h3 className="font-semibold text-[#0F2744]">{f.question}</h3><p className="mt-2 text-sm text-gray-500">{f.answer}</p></div>))}</div>
        </div>

        {/* Related Industries */}
        <div className="mt-16"><h2 className="text-2xl font-bold text-[#0F2744] mb-6">Industries Using {s.title}</h2>
          <div className="flex flex-wrap gap-2">{[{n:"Retail Display",s:"retail-display"},{n:"Cosmetics",s:"cosmetics-display"},{n:"Hotel Hospitality",s:"hotel-hospitality"},{n:"Medical",s:"medical-healthcare"},{n:"Electronics",s:"electronics-industry"},{n:"Museum",s:"museum-art-gallery"}].map((ind)=>(<Link key={ind.s} href={`/industries/${ind.s}`} className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700 hover:bg-blue-100 transition-colors">{ind.n}</Link>))}</div>
        </div>

        {/* Related Services + CTA */}
        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-[#0F2744] mb-6">Related Services</h2>
            <div className="grid gap-3 sm:grid-cols-2">{s.relatedServices.map((rs)=>{const r=servicePages.find(x=>x.slug===rs);return r?<Link key={rs} href={`/services/${rs}`} className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 hover:border-blue-200 transition-colors"><span className="font-medium text-[#0F2744]">{r.title}</span><ArrowRight className="h-4 w-4 text-gray-400" /></Link>:null;})}</div>
          </div>
          <div className="rounded-xl bg-[#0F2744] p-6 text-center text-white"><h3 className="text-xl font-bold">Start Your Project</h3><p className="mt-2 text-sm text-blue-200">Get a free quote within 24 hours.</p><div className="mt-4"><InquiryForm /></div></div>
        </div>

      </Container>
    </>
  );
}
