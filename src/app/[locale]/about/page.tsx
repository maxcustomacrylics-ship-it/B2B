import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SchemaOrg from "@/components/shared/SchemaOrg";
import { generateOrganizationSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/utils";
import { Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Max Custom Acrylics",
  description: "Max Custom Acrylics helps businesses source and develop high-quality custom acrylic products by coordinating engineering, production, quality inspection and international logistics through carefully selected manufacturing partners.",
};

export default function AboutPage() {
  const orgSchema = generateOrganizationSchema();
  const bcSchema = generateBreadcrumbSchema([{ name: "Home", url: SITE_URL },{ name: "About Us", url: `${SITE_URL}/about` }]);

  return (
    <>
      <SchemaOrg data={[orgSchema, bcSchema]} />
      <Container className="py-12">
        <Breadcrumb items={[{ label: "Home", href: "/" },{ label: "About Us" }]} />

        {/* Hero */}
        <div className="mt-8 max-w-3xl">
          <h1 className="text-3xl font-bold text-[#0F2744] sm:text-4xl">About Max Custom Acrylics</h1>
          <p className="mt-6 text-lg text-gray-500 leading-relaxed">
            We help businesses source, develop and deliver high-quality custom acrylic products by providing engineering support, coordinating production through carefully selected manufacturing partners, managing quality inspection, and handling international logistics.
          </p>
        </div>

        {/* What We Do */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-[#0F2744]">What We Do</h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              We are an engineering-driven custom acrylic solutions provider. Rather than operating a single factory, we work with a network of specialized manufacturing partners — each selected for their expertise in specific processes. This approach gives our clients access to the right manufacturing capability for every project, with consistent quality control and professional project management throughout.
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Our role is to bridge the gap between your requirements and manufacturing execution. We handle engineering review, material selection, production coordination, quality inspection, packaging, and shipping — so you receive finished products that meet your specifications without managing overseas production yourself.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {t:"Engineering Support",d:"Design review, material recommendations, and manufacturability analysis for every project."},
              {t:"Manufacturing Network",d:"Access to specialized production partners — each selected for their expertise in specific acrylic fabrication processes."},
              {t:"Quality Control",d:"Multi-stage inspection including incoming materials, in-process checks, and final inspection with documented reports."},
              {t:"Global Delivery",d:"Sea freight, air freight, and express courier to 30+ countries. Full export documentation included."},
            ].map((item,i)=>(<div key={i} className="flex gap-3"><Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" /><div><h3 className="font-semibold text-[#0F2744]">{item.t}</h3><p className="text-sm text-gray-500 mt-1">{item.d}</p></div></div>))}
          </div>
        </div>

        {/* Quality System */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#0F2744] text-center">Our Quality System</h2>
          <p className="mt-3 text-gray-500 text-center max-w-2xl mx-auto">Every project goes through a documented quality control process — from material verification to final inspection before shipment.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {["Incoming Material Inspection","Sample Approval","In-Process Quality Check","Final Inspection","Packaging Control"].map((s,i)=>(<div key={i} className="rounded-xl border border-gray-200 bg-white p-4 text-center"><div className="text-2xl font-bold text-blue-700">{i+1}</div><p className="mt-2 text-sm font-medium text-[#0F2744]">{s}</p></div>))}
          </div>
        </div>

        {/* How We Work */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#0F2744] text-center">How We Work</h2>
          <div className="mt-8 max-w-3xl mx-auto space-y-4">
            {[
              {step:"01",t:"You Share Your Requirements",d:"Send us your drawings, specifications, reference samples, or even a rough sketch. Our engineering team reviews everything and provides initial feedback within 24 hours."},
              {step:"02",t:"We Develop the Manufacturing Plan",d:"We select the right materials, determine the optimal fabrication processes, identify the best manufacturing partner for your project, and prepare a detailed quotation with transparent pricing and timeline."},
              {step:"03",t:"We Manage Production & Quality",d:"We coordinate all manufacturing stages, conduct quality inspections at key checkpoints, and keep you updated throughout. You receive inspection reports and photos — no surprises."},
              {step:"04",t:"We Handle Packaging & Delivery",d:"Products are professionally packed with protective materials, export documentation is prepared, and shipping is arranged via your preferred method. We manage the logistics so you don't have to."},
            ].map((s,i)=>(<div key={i} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0F2744] text-white text-sm font-bold">{s.step}</div><div><h3 className="font-semibold text-[#0F2744]">{s.t}</h3><p className="mt-1 text-sm text-gray-500">{s.d}</p></div></div>))}
          </div>
        </div>

        {/* Why trust us */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-[#0F2744] text-center">Why Businesses Trust Us</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {v:"15+",l:"Years Experience"},
              {v:"30+",l:"Countries Served"},
              {v:"200+",l:"Projects Delivered"},
              {v:"24h",l:"Response Time"},
            ].map((s,i)=>(<div key={i} className="text-center"><div className="text-4xl font-bold text-[#0F2744]">{s.v}</div><div className="mt-1 text-sm text-gray-500">{s.l}</div></div>))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-xl bg-[#0F2744] p-8 text-center text-white">
          <h2 className="text-2xl font-bold">Start Your Project Today</h2>
          <p className="mt-2 text-blue-200 max-w-xl mx-auto">Share your requirements and receive a detailed proposal within 24 hours.</p>
          <div className="mt-6"><Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0F2744] hover:bg-blue-50">Request a Quote <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </Container>
    </>
  );
}
