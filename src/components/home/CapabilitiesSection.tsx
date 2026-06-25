"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import { useSettings } from "@/components/providers/SettingsProvider";

const capabilities = [
  { key: "capImg1", slug: "laser-cutting", title: "Laser Cutting", desc: "High-precision CO2 laser cutting for acrylic sheets up to 25mm with ±0.1mm tolerance and flame-polished edges.", emoji: "🔬" },
  { key: "capImg2", slug: "cnc-machining", title: "CNC Machining", desc: "Multi-axis CNC routing for complex 3D acrylic parts. Beveled edges, V-grooves, precision drilling, and threaded inserts.", emoji: "⚙️" },
  { key: "capImg3", slug: "diamond-polishing", title: "Diamond Polishing", desc: "Optical-grade edge clarity using progressively finer diamond abrasives. Premium finish for luxury displays and awards.", emoji: "💎" },
  { key: "capImg4", slug: "uv-printing", title: "UV Digital Printing", desc: "Full-color CMYK + White printing direct to acrylic at 1440dpi. Durable graphics for branded displays and signage.", emoji: "🖨" },
  { key: "capImg5", slug: "assembly", title: "Assembly & Packaging", desc: "Complete product assembly, hardware integration, quality inspection, and export-ready packaging.", emoji: "📦" },
];

export default function CapabilitiesSection() {
  const s = useSettings();
  const imgs: Record<string, string> = { capImg1: s.capImg1, capImg2: s.capImg2, capImg3: s.capImg3, capImg4: s.capImg4, capImg5: s.capImg5 };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Manufacturing Excellence</span>
          <h2 className="mt-2 text-3xl font-bold text-[#0F2744] sm:text-4xl">Our Manufacturing Capabilities</h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">Complete in-house manufacturing — from raw material to finished product. Every process controlled under one roof for consistent quality.</p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {capabilities.map((cap, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={cap.slug} className={`grid gap-8 lg:grid-cols-5 items-center ${isLeft ? "" : "lg:grid-flow-dense"}`}>
                {/* Image placeholder */}
                <div className={`lg:col-span-3 ${isLeft ? "" : "lg:col-start-3"}`}>
                  <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden shadow-sm">
                    {imgs[cap.key] ? <img src={imgs[cap.key]} alt={cap.title} className="h-full w-full object-cover" /> : <span className="text-7xl opacity-20 select-none">{cap.emoji}</span>}
                  </div>
                </div>
                {/* Content */}
                <div className={`lg:col-span-2 ${isLeft ? "" : "lg:col-start-1 lg:row-start-1"}`}>
                  <h3 className="text-2xl font-bold text-[#0F2744]">{cap.title}</h3>
                  <p className="mt-3 text-gray-500 leading-relaxed">{cap.desc}</p>
                  <Link href={`/manufacturing/${cap.slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#0F2744] hover:text-blue-700 transition-colors">
                    Learn more <span className="text-lg leading-none">→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
