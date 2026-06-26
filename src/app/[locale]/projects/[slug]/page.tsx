import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import InquiryForm from "@/components/products/InquiryForm";
import SchemaOrg from "@/components/shared/SchemaOrg";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/utils";
import { getCaseBySlug } from "@/lib/data-store";
import { ArrowRight, Check, ArrowLeft } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };
const mfgSteps = ["Laser Cutting","CNC Machining","Polishing","UV Printing","Assembly","Quality Inspection"];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = await getCaseBySlug(slug);
  if (!p) return {};
  return { title: `${p.title} | Max Custom Acrylics`, description: p.challenge || p.title };
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const p = await getCaseBySlug(slug);
  if (!p) notFound();

  const articleSchema = generateArticleSchema(p);
  const bcSchema = generateBreadcrumbSchema([{ name: "Home", url: SITE_URL },{ name: "Projects", url: `${SITE_URL}/projects` },{ name: p.title, url: `${SITE_URL}/projects/${slug}` }]);

  return (
    <>
      <SchemaOrg data={[articleSchema, bcSchema]} />
      <Container className="py-12">
        <Breadcrumb items={[{ label: "Home", href: "/" },{ label: "Projects", href: "/projects" },{ label: p.title }]} />
        <Link href="/projects" className="mt-6 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#0F2744]"><ArrowLeft className="h-4 w-4" />Back to Projects</Link>

        {/* Hero */}
        <div className="mt-8">
          <div className="flex flex-wrap gap-3 text-sm mb-3">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{p.industry}</span>
            <span className="text-gray-400">{p.client}</span>
          </div>
          <h1 className="text-3xl font-bold text-[#0F2744] sm:text-4xl">{p.title}</h1>
        </div>

        {/* Image */}
        <div className="mt-8 aspect-[21/9] rounded-xl bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center overflow-hidden">
          {p.image ? <img src={p.image} alt={p.title} className="h-full w-full object-cover" /> : <span className="text-8xl opacity-20">📂</span>}
        </div>

        {/* Overview + Solution */}
        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-[#0F2744]">Project Overview</h2>
              <div className="mt-4 space-y-4 text-gray-500 leading-relaxed">
                <p><strong className="text-gray-700">Client:</strong> {p.client}</p>
                <p><strong className="text-gray-700">Industry:</strong> {p.industry}</p>
                <p><strong className="text-gray-700">Challenge:</strong> {p.challenge}</p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0F2744]">Solution</h2>
              <p className="mt-4 text-gray-500 leading-relaxed">{p.solution}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0F2744]">Results</h2>
              <p className="mt-4 text-gray-500 leading-relaxed">{p.results}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-semibold text-[#0F2744] mb-3">Manufacturing Process</h3>
              <ul className="space-y-2">{mfgSteps.map((s,i)=>(<li key={i} className="flex items-center gap-2 text-sm text-gray-500"><Check className="h-4 w-4 text-green-600 shrink-0" />{s}</li>))}</ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-semibold text-[#0F2744] mb-3">Key Features</h3>
              <ul className="space-y-2 text-sm text-gray-500">{[{k:"Industry",v:p.industry},{k:"Client Type",v:p.client}].map((f,i)=>(<li key={i} className="flex justify-between"><span className="text-gray-400">{f.k}</span><span className="font-medium text-[#0F2744]">{f.v}</span></li>))}</ul>
            </div>
            <div className="rounded-xl bg-[#0F2744] p-5 text-center text-white"><h3 className="font-semibold">Need a Similar Solution?</h3><p className="mt-2 text-xs text-blue-200">Share your project details with us.</p><div className="mt-3"><InquiryForm /></div></div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-xl bg-[#0F2744] p-8 text-center text-white">
          <h2 className="text-2xl font-bold">Start Your Custom Acrylic Project</h2>
          <p className="mt-2 text-blue-200">Tell us about your requirements and receive a detailed proposal within 24 hours.</p>
          <div className="mt-6"><Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0F2744] hover:bg-blue-50">Request a Quote <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </Container>
    </>
  );
}
