import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Capabilities | Max Custom Acrylics",
  description: "Complete custom acrylic fabrication capabilities under one roof.",
};

export default function CapabilitiesPage() {
  return (
    <Container className="py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" },{ label: "Capabilities" }]} />
      <div className="mt-6">
        <h1 className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Our Capabilities</h1>
        <p className="mt-4 max-w-2xl text-gray-500 leading-relaxed">
          From engineering support to quality-controlled production — complete custom acrylic fabrication capabilities under one roof.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap items-center gap-2 text-sm text-gray-500">
        {["Laser Cutting", "CNC Machining", "Diamond Polishing", "UV Printing", "Assembly & Packaging", "Quality Control"].map((item, i) => (
          <span key={item} className="flex items-center gap-2">
            <span className="text-gray-400">{item}</span>
            {i < 5 && <span className="text-gray-300">/</span>}
          </span>
        ))}
      </div>
      <div className="mt-16 rounded-2xl bg-[#0F2744] p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Need a Custom Solution?</h2>
        <p className="mt-2 text-blue-200 max-w-xl mx-auto">
          Our engineering team will review your requirements and recommend the best manufacturing approach.
        </p>
        <Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors">
          Request a Quote <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Container>
  );
}
