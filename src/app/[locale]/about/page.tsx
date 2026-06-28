import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SchemaOrg from "@/components/shared/SchemaOrg";
import { generateOrganizationSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/utils";
import { ArrowRight, Cog, Package, ShieldCheck, MessageCircle } from "lucide-react";

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
      {/* ========== HERO ========== */}
      <section className="relative bg-white overflow-hidden" aria-labelledby="about-hero">
        <Container className="py-12 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <Breadcrumb items={[{ label: "Home", href: "/" },{ label: "About Us" }]} />
              <h1 id="about-hero" className="mt-4 text-4xl font-bold tracking-tight text-[#0F2744] sm:text-5xl lg:text-[56px] lg:leading-tight">
                About Max Custom Acrylics
              </h1>
              <p className="mt-5 text-base text-gray-500 leading-relaxed sm:text-lg max-w-[560px]">
                We help businesses develop custom acrylic products through
                engineering support, coordinated manufacturing and quality-focused
                project management.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2">
                  Request a Quote
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#0F2744] bg-white px-6 py-3.5 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2">
                  Contact Us
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
            <div className="relative" aria-hidden="true">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 flex items-center justify-center shadow-sm">
                <svg className="w-16 h-16 text-gray-300/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="10" y1="9" x2="14" y2="9"/>
                </svg>
              </div>
              <span className="sr-only">Engineering collaboration and product development</span>
            </div>
          </div>
        </Container>
      </section>

      <Container className="pb-16 lg:pb-24">
        {/* Who We Are */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Who We Are</h2>
            <p className="mt-6 text-base text-gray-500 leading-relaxed sm:text-lg">
              We help international businesses develop custom acrylic products
              by combining engineering expertise with coordinated production
              management. As your engineering and project partner, we handle
              design review, supplier coordination, quality inspection, and
              global delivery — so you receive finished products that meet your
              specifications without the complexity of managing overseas
              production yourself.
            </p>
            <p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">
              Rather than operating a single facility, we work with specialized
              production partners — each selected for their expertise in specific
              acrylic fabrication processes. This approach gives you access to
              the right capability for every project, with consistent quality
              control and professional project management throughout.
            </p>
          </div>
          <div className="relative" aria-hidden="true">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 flex items-center justify-center shadow-sm">
              <svg className="w-16 h-16 text-gray-300/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>
              </svg>
            </div>
            <span className="sr-only">Engineering collaboration for custom acrylic product development</span>
          </div>
        </div>

        {/* Why Work With Us */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-[#0F2744] sm:text-4xl text-center">Why Work With Us</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 max-w-3xl mx-auto">
            {[
              { icon: Cog, title: "Engineering Support", desc: "Design review and manufacturability analysis for every project." },
              { icon: Package, title: "Flexible Production", desc: "From prototypes to full production runs with consistent quality." },
              { icon: ShieldCheck, title: "Quality Control", desc: "Multi-stage inspection with documented reports at every checkpoint." },
              { icon: MessageCircle, title: "Responsive Communication", desc: "Clear updates and timely responses throughout your project." },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-[#0F2744]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#0F2744]">{item.title}</h3>
                  <p className="mt-0.5 text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
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
