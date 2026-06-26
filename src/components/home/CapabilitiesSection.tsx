"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import { useSettings } from "@/components/providers/SettingsProvider";
import { Check, ArrowRight, MessageCircle } from "lucide-react";

const capabilities = [
  {
    slug: "laser-cutting",
    title: "Laser Cutting",
    desc: "Precision CO₂ laser cutting for intricate acrylic shapes with polished edges and tight tolerances — ideal for displays, signage and custom components.",
    features: ["±0.1mm tolerance", "Flame-polished edges", "No tooling required"],
    emoji: "🔬",
  },
  {
    slug: "cnc-machining",
    title: "CNC Machining",
    desc: "Multi-axis CNC routing for 3D acrylic parts including beveled edges, threaded holes and contoured surfaces for structural applications.",
    features: ["3D contouring capability", "Precision threading", "Up to 50mm material"],
    emoji: "⚙️",
  },
  {
    slug: "diamond-polishing",
    title: "Diamond Polishing",
    desc: "Optical-grade edge finishing using progressive diamond abrasives — the premium choice for luxury displays, awards and high-end retail products.",
    features: ["Glass-like clarity", "All thicknesses", "Premium aesthetic"],
    emoji: "💎",
  },
  {
    slug: "uv-printing",
    title: "UV Printing",
    desc: "Full-color CMYK + White direct-to-acrylic printing at 1440dpi. Durable, vibrant graphics for branded displays, signage and personalised products.",
    features: ["Full color + white", "Up to 2.5m width", "Instant UV curing"],
    emoji: "🖨",
  },
  {
    slug: "assembly",
    title: "Assembly & Packaging",
    desc: "Complete product assembly including hardware integration, bonding, quality inspection and export-ready packaging — finished goods delivered to your door.",
    features: ["Hardware integration", "Retail-ready packaging", "Export documentation"],
    emoji: "📦",
  },
  {
    slug: "oem-project-support",
    title: "Quality Control",
    desc: "Multi-stage inspection throughout production — incoming materials, in-process checks and final QC with documented reports so you know exactly what you are receiving.",
    features: ["Documented inspection", "Photo reports", "Pre-shipment approval"],
    emoji: "🔍",
  },
];

export default function CapabilitiesSection() {
  const s = useSettings();

  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        {/* Section heading */}
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">What We Do</span>
          <h2 className="mt-2 text-3xl font-bold text-[#0F2744] sm:text-4xl">Our Capabilities</h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            From engineering support to quality-controlled production, we help customers develop custom acrylic products through carefully managed manufacturing capabilities.
          </p>
        </div>

        {/* Capability cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <div key={cap.slug} className="group rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg transition-all flex flex-col">
              {/* Image */}
              <div className="aspect-[16/10] bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center overflow-hidden">
                <span className="text-6xl opacity-30 select-none transition-transform duration-300 group-hover:scale-110">{cap.emoji}</span>
              </div>
              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-[#0F2744]">{cap.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{cap.desc}</p>
                <ul className="mt-3 space-y-1.5 flex-1">
                  {cap.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-500">
                      <Check className="h-3.5 w-3.5 text-green-600 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${cap.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#0F2744] hover:text-blue-700 transition-colors"
                >
                  Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-xl bg-gray-50 border border-gray-200 p-8 text-center">
          <h3 className="text-xl font-bold text-[#0F2744]">Need multiple manufacturing processes?</h3>
          <p className="mt-2 text-gray-500 max-w-xl mx-auto leading-relaxed">
            Our engineering team helps combine the right manufacturing methods to achieve the best quality, cost and delivery for your custom acrylic project.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#0F2744] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm"
          >
            <MessageCircle className="h-4 w-4" /> Discuss Your Project
          </Link>
        </div>
      </Container>
    </section>
  );
}
