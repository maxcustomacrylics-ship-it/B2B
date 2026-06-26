import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import InquiryForm from "@/components/products/InquiryForm";
import { servicePages } from "@/data/service-pages";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Acrylic Services | Max Custom Acrylics",
  description: "Complete custom acrylic fabrication services — laser cutting, CNC machining, diamond polishing, UV printing, thermoforming, bonding & assembly, and OEM project support.",
};

export default function ServicesPage() {
  return (
    <Container className="py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" },{ label: "Services" }]} />
      <div className="mt-6">
        <h1 className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Custom Acrylic Services</h1>
        <p className="mt-4 max-w-2xl text-gray-500">Engineering-driven custom acrylic fabrication — from single prototypes to full production runs. Every service backed by professional project management and quality inspection.</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {servicePages.map((s) => (
          <Link key={s.slug} href={`/services/${s.slug}`} className="group rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md hover:border-blue-200 transition-all">
            <h2 className="text-xl font-semibold text-[#0F2744] group-hover:text-blue-700">{s.title}</h2>
            <p className="mt-2 text-sm text-gray-500 line-clamp-2">{s.metaDesc}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#0F2744]"><ArrowRight className="h-4 w-4" /></span>
          </Link>
        ))}
      </div>

      <div className="mt-16 rounded-xl bg-[#0F2744] p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Not Sure Which Service You Need?</h2>
        <p className="mt-2 text-blue-200">Tell us about your project and our engineers will recommend the best approach.</p>
        <div className="mt-6 max-w-md mx-auto"><InquiryForm /></div>
      </div>
    </Container>
  );
}
