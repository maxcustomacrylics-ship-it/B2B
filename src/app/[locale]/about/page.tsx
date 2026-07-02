import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SchemaOrg from "@/components/shared/SchemaOrg";
import { generateOrganizationSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { getSettings } from "@/lib/data-store";
import { SITE_URL } from "@/lib/utils";
import { ArrowRight, Cog, Package, ShieldCheck, MessageCircle } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "About Us — Max Custom Acrylics",
  description: "We help businesses develop custom acrylic products through engineering support, coordinated manufacturing and quality-focused project management.",
};

export default async function AboutPage() {
  const s = await getSettings();
  const orgSchema = generateOrganizationSchema();
  const bcSchema = generateBreadcrumbSchema([{ name: "Home", url: SITE_URL },{ name: "About Us", url: `${SITE_URL}/about` }]);

  return (
    <>
      <SchemaOrg data={[orgSchema, bcSchema]} />
      {/* ========== HERO ========== */}
      <section className="relative bg-white" aria-labelledby="about-hero">
        <Container className="py-12 lg:py-16">
          <Breadcrumb items={[{ label: "Home", href: "/" },{ label: "About Us" }]} />
          <div className="mt-6 max-w-3xl">
            <h1 id="about-hero" className="text-4xl font-bold tracking-tight text-[#0F2744] sm:text-5xl lg:text-[56px] lg:leading-tight">About Max Custom Acrylics</h1>
            <p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">We help businesses develop custom acrylic products through engineering support, coordinated manufacturing and quality-focused project management.</p>
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
              {s.aboutWhoImg ? <img src={s.aboutWhoImg} alt="Engineering collaboration and custom acrylic solutions" className="w-full h-full object-cover" /> : <svg className="w-16 h-16 text-gray-300/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>}
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
          <h2 className="text-3xl font-bold text-[#0F2744] sm:text-4xl text-center">How We Work</h2>
          <div className="mt-10 grid gap-0 sm:grid-cols-4 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Share Your Requirements", desc: "Send us your drawings or project brief." },
              { step: "02", title: "Engineering Review", desc: "We assess manufacturability and provide a quotation." },
              { step: "03", title: "Production Coordination", desc: "We manage manufacturing and quality inspection." },
              { step: "04", title: "Delivery", desc: "Products are packed and shipped to your destination." },
            ].map((s, i) => (
              <div key={i} className="relative flex flex-col items-center text-center px-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0F2744] text-white text-sm font-bold">{s.step}</div>
                {i < 3 && (
                  <div className="hidden sm:block absolute top-6 left-[calc(50%+24px)] w-full h-px bg-gray-200">
                    <ArrowRight className="absolute -top-1.5 -right-1 h-4 w-4 text-gray-300" aria-hidden="true" />
                  </div>
                )}
                <h3 className="mt-4 text-sm font-semibold text-[#0F2744]">{s.title}</h3>
                <p className="mt-1 text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
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
