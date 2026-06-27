import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Capabilities | Max Custom Acrylics",
  description: "Complete custom acrylic fabrication capabilities — laser cutting, CNC machining, diamond polishing, UV printing, assembly, and quality control.",
};

const capabilities = [
  { title: "Laser Cutting", desc: "Precision CO₂ laser cutting for intricate acrylic shapes with flame-polished edges and ±0.1mm tolerance. Ideal for displays, signage and custom components.", features: ["±0.1mm tolerance","Flame-polished edges","No tooling required"] },
  { title: "CNC Machining", desc: "Multi-axis CNC routing for 3D acrylic parts including beveled edges, threaded holes and contoured surfaces for structural and industrial applications.", features: ["3D contouring","Precision threading","Up to 50mm material"] },
  { title: "Diamond Polishing", desc: "Optical-grade edge finishing using progressive diamond abrasives — the premium choice for luxury displays, awards and high-end retail products.", features: ["Glass-like clarity","All thicknesses","Premium aesthetic"] },
  { title: "UV Printing", desc: "Full-color CMYK + White direct-to-acrylic printing at 1440dpi. Durable, vibrant graphics for branded displays, signage and personalised products.", features: ["Full color + white","Up to 2.5m width","Instant UV curing"] },
  { title: "Assembly & Packaging", desc: "Complete product assembly including hardware integration, bonding, quality inspection and export-ready packaging.", features: ["Hardware integration","Retail-ready packaging","Export documentation"] },
  { title: "Quality Control", desc: "Multi-stage inspection throughout production with documented reports so you know exactly what you are receiving.", features: ["Documented inspection","Photo reports","Pre-shipment approval"] },
];

export default function CapabilitiesPage() {
  return (
    <Container className="py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" },{ label: "Capabilities" }]} />
      <div className="mt-6"><h1 className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Our Capabilities</h1><p className="mt-4 max-w-2xl text-gray-500 leading-relaxed">From engineering support to quality-controlled production — complete custom acrylic fabrication capabilities under one roof.</p></div>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c) => (
          <div key={c.title} className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md transition-all">
            <h2 className="text-xl font-semibold text-[#0F2744]">{c.title}</h2>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">{c.desc}</p>
            <ul className="mt-4 space-y-1.5">{c.features.map((f) => (<li key={f} className="flex items-center gap-2 text-xs text-gray-500"><Check className="h-3.5 w-3.5 text-green-600 shrink-0" />{f}</li>))}</ul>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[#0F2744] hover:text-blue-700 transition-colors">Request a Quote<ArrowRight className="h-4 w-4" /></Link>
          </div>
        ))}
      </div>
      <div className="mt-16 rounded-2xl bg-[#0F2744] p-8 text-center text-white"><h2 className="text-2xl font-bold">Need a Custom Solution?</h2><p className="mt-2 text-blue-200 max-w-xl mx-auto">Our engineering team will review your requirements and recommend the best manufacturing approach.</p><Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors">Request a Quote <ArrowRight className="h-4 w-4" /></Link></div>
    </Container>
  );
}
