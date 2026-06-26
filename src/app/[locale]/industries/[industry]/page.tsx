import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import InquiryForm from "@/components/products/InquiryForm";
import SchemaOrg from "@/components/shared/SchemaOrg";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/utils";
import { getIndustry, industryPages } from "@/data/industry-pages";
import { ArrowRight, Check } from "lucide-react";

type Props = { params: Promise<{ industry: string }> };
const steps = ["Inquiry","Design Review","Quotation","Prototype","Production","Inspection","Delivery"];
const capabilities = ["Laser Cutting","CNC Machining","UV Printing","Diamond Polishing","Flame Polishing","Bonding & Assembly"];
const why = ["Engineering Support","Fast Quotation","Flexible MOQ","Global Shipping","Quality Control","Manufacturing Network"];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry } = await params;
  const d = getIndustry(industry);
  if (!d) return {};
  return { title: `${d.h1} | Max Custom Acrylics`, description: d.metaDesc };
}

export default async function IndustryPage({ params }: Props) {
  const { industry } = await params;
  const d = getIndustry(industry);
  if (!d) notFound();

  const bcSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },{ name: "Industries", url: `${SITE_URL}/industries` },{ name: d.name, url: `${SITE_URL}/industries/${industry}` },
  ]);
  const faqSchema = generateFAQSchema(d.faqs);

  return (
    <>
      <SchemaOrg data={[bcSchema, faqSchema]} />
      <Container className="py-12">
        <Breadcrumb items={[{ label: "Home", href: "/" },{ label: "Industries", href: "/industries" },{ label: d.name }]} />

        {/* Hero */}
        <div className="mt-8 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl font-bold text-[#0F2744] sm:text-4xl">{d.h1}</h1>
            <p className="mt-4 text-gray-500 leading-relaxed">{d.intro}</p>
            <div className="mt-6"><Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[#0F2744] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c]">Request a Quote <ArrowRight className="h-4 w-4" /></Link></div>
          </div>
          <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center"><span className="text-8xl opacity-20">🏭</span></div>
        </div>

        {/* Industry Overview */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#0F2744]">Industry Overview</h2>
          <p className="mt-4 text-gray-500 leading-relaxed max-w-4xl">{d.overview}</p>
        </div>

        {/* Applications + Products */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-[#0F2744]">Acrylic Applications</h2>
            <div className="mt-4 flex flex-wrap gap-2">{d.applications.map((a,i)=>(<span key={i} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">{a}</span>))}</div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#0F2744]">Common Products</h2>
            <ul className="mt-4 space-y-2">{d.commonProducts.map((p,i)=>(<li key={i} className="flex items-center gap-2 text-sm text-gray-500"><Check className="h-4 w-4 text-green-600 shrink-0" />{p}</li>))}</ul>
          </div>
        </div>

        {/* Manufacturing Capabilities */}
        <div className="mt-16"><h2 className="text-2xl font-bold text-[#0F2744] text-center mb-8">Manufacturing Capabilities</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{capabilities.map((c,i)=>(<div key={i} className="rounded-xl border border-gray-200 bg-white p-5 text-center"><Check className="h-5 w-5 text-green-600 mx-auto mb-2" /><h3 className="font-semibold text-[#0F2744] text-sm">{c}</h3></div>))}</div>
        </div>

        {/* Why Choose */}
        <div className="mt-16"><h2 className="text-2xl font-bold text-[#0F2744] text-center mb-8">Why Choose Max Custom Acrylics</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{why.map((w,i)=>(<div key={i} className="rounded-xl border border-gray-200 bg-white p-5 text-center"><Check className="h-5 w-5 text-green-600 mx-auto mb-2" /><h3 className="font-semibold text-[#0F2744] text-sm">{w}</h3></div>))}</div>
        </div>

        {/* Process */}
        <div className="mt-16 rounded-xl bg-gray-50 p-8">
          <h2 className="text-2xl font-bold text-[#0F2744] text-center mb-8">How We Deliver Your Project</h2>
          <div className="flex flex-wrap justify-center gap-2 text-sm">{steps.map((s,i)=>(<span key={i} className="flex items-center gap-2"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0F2744] text-white text-xs font-bold">{i+1}</span>{s}{i<steps.length-1&&<span className="text-gray-300 mx-1">→</span>}</span>))}</div>
        </div>

        {/* FAQ */}
        <div className="mt-16"><h2 className="text-2xl font-bold text-[#0F2744] mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl">{d.faqs.map((f,i)=>(<div key={i} className="rounded-xl border border-gray-200 bg-white p-5"><h3 className="font-semibold text-[#0F2744]">{f.question}</h3><p className="mt-2 text-sm text-gray-500">{f.answer}</p></div>))}</div>
        </div>

        {/* Related Services */}
        <div className="mt-16"><h2 className="text-2xl font-bold text-[#0F2744] mb-6">Related Services</h2>
          <div className="flex flex-wrap gap-2">{[{n:"Laser Cutting",s:"laser-cutting"},{n:"CNC Machining",s:"cnc-machining"},{n:"UV Printing",s:"uv-printing"},{n:"Diamond Polishing",s:"diamond-polishing"},{n:"Bonding & Assembly",s:"bonding-assembly"},{n:"OEM Projects",s:"oem-project-support"}].map((sv)=>(<Link key={sv.s} href={`/services/${sv.s}`} className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700 hover:bg-blue-100 transition-colors">{sv.n}</Link>))}</div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-xl bg-[#0F2744] p-8 text-center text-white">
          <h2 className="text-2xl font-bold">Request a Custom Solution for {d.name}</h2>
          <p className="mt-2 text-blue-200 max-w-xl mx-auto">Tell us about your {d.name.toLowerCase()} project and we will provide a tailored manufacturing solution within 24 hours.</p>
          <div className="mt-6 max-w-md mx-auto"><InquiryForm /></div>
        </div>
      </Container>
    </>
  );
}
