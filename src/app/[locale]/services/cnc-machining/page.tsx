import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import {
  ArrowRight, Upload, Cog, Wrench, ShieldCheck, Globe,
  Cuboid, Drill, Layers, Ruler, Sliders, Repeat, AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Precision CNC Acrylic Machining Services | Max Custom Acrylics",
  description:
    "Multi-axis CNC machining for 3D acrylic parts — contouring, beveling, drilling, tapping. Engineering review, quality inspection, worldwide delivery.",
};

export default function CncMachiningPage() {
  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section className="relative bg-white overflow-hidden" aria-labelledby="cnc-hero-heading">
        <Container className="py-14 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center min-h-[520px] lg:min-h-[560px]">
            <div>
              <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "CNC Machining" }]} />
              <h1 id="cnc-hero-heading" className="mt-4 text-4xl font-bold tracking-tight text-[#0F2744] sm:text-5xl lg:text-[56px] lg:leading-tight">
                Precision CNC Acrylic Machining Services
              </h1>
              <p className="mt-5 text-base text-gray-500 leading-relaxed sm:text-lg max-w-[620px]">
                Multi-axis CNC routing for 3D acrylic parts including beveled edges, threaded holes and contoured surfaces for structural and industrial applications.
              </p>
              <p className="mt-3 text-base text-gray-500 leading-relaxed sm:text-lg max-w-[620px]">
                Our engineering team reviews every project and coordinates the most suitable manufacturing process to deliver accurate, production-ready acrylic components with consistent quality and worldwide delivery support.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3" role="group" aria-label="Call to action buttons">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2" aria-label="Request a quote for custom acrylic CNC machining">
                  Request a Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#0F2744] bg-white px-6 py-3.5 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2" aria-label="Upload your drawing for CNC machining quotation">
                  <Upload className="h-4 w-4" aria-hidden="true" /> Upload Your Drawing
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 sm:flex sm:flex-wrap sm:gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-1.5"><Cog className="h-4 w-4 text-gray-400 flex-shrink-0" aria-hidden="true" /> Engineering Review</span>
                <span className="flex items-center gap-1.5"><Wrench className="h-4 w-4 text-gray-400 flex-shrink-0" aria-hidden="true" /> Custom Manufacturing</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-gray-400 flex-shrink-0" aria-hidden="true" /> Quality Inspection</span>
                <span className="flex items-center gap-1.5"><Globe className="h-4 w-4 text-gray-400 flex-shrink-0" aria-hidden="true" /> Worldwide Delivery</span>
              </div>
            </div>
            <div className="relative" aria-hidden="true">
              <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 via-gray-50 to-blue-100 flex items-center justify-center">
                <div className="text-center select-none">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/80 shadow-sm mb-4">
                    <svg className="w-10 h-10 text-[#0F2744]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="2" /><circle cx="15.5" cy="8.5" r="2" />
                      <circle cx="8.5" cy="15.5" r="2" /><circle cx="15.5" cy="15.5" r="2" />
                      <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-400 tracking-wide uppercase">Precision CNC Acrylic Machining</p>
                </div>
              </div>
              <span className="sr-only">CNC machining service for precision acrylic components with 3D contouring and threaded features</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ========== WHEN TO CHOOSE SECTION ========== */}
      <section className="bg-gray-50" aria-labelledby="cnc-when-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]">
            <h2 id="cnc-when-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">
              When Should You Choose CNC Machining?
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">
              CNC machining handles complex 3D acrylic fabrication that goes beyond flat sheet cutting. Selecting the right process depends on your part geometry, features and precision requirements.
            </p>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-[7fr_5fr]">
            <div>
              <h3 className="text-xl font-semibold text-[#0F2744]">Best Applications</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Cuboid, title: "3D Contouring", desc: "Create angled edges, pockets, channels and multi-level surfaces." },
                  { icon: Ruler, title: "Beveled & V-Groove Edges", desc: "Precision angled edges for display stands and architectural panels." },
                  { icon: Drill, title: "Drilling & Tapping", desc: "Threaded holes for screws, standoffs and hardware assembly." },
                  { icon: Layers, title: "Thick Material Processing", desc: "Machine acrylic up to 50mm thickness with precision." },
                  { icon: Sliders, title: "Mechanical Features", desc: "Slots, recesses, snap-fits and precise mounting points." },
                  { icon: Repeat, title: "Consistent Batch Quality", desc: "CNC programs ensure identical parts across production runs." },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-blue-50 text-[#0F2744]">
                      <item.icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <h4 className="mt-3 text-sm font-semibold text-[#0F2744]">{item.title}</h4>
                    <p className="mt-1 text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0F2744]">Consider Other Processes If</h3>
              <div className="mt-6 space-y-4">
                {[
                  { title: "Simple 2D Profiles", desc: "Laser cutting may be faster and more economical." },
                  { title: "Flame-Polished Edges Needed", desc: "Laser cutting produces polished edges directly." },
                  { title: "Very Thin Material", desc: "Laser cutting handles thin sheets with less material stress." },
                  { title: "Tighter Lead Time Required", desc: "Laser cutting typically offers shorter turnaround." },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-amber-200 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <h4 className="text-sm font-semibold text-[#0F2744]">{item.title}</h4>
                        <p className="mt-1 text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-14 rounded-2xl border border-blue-200 bg-blue-50/60 p-8 md:p-10 text-center">
            <h3 className="text-xl font-bold text-[#0F2744] sm:text-2xl">Not sure which process is right?</h3>
            <p className="mt-2 text-gray-500 max-w-lg mx-auto leading-relaxed">
              Our engineering team can review your drawings and recommend the most suitable manufacturing process based on your project goals.
            </p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2">
              <Upload className="h-4 w-4" aria-hidden="true" /> Upload Your Drawing
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
