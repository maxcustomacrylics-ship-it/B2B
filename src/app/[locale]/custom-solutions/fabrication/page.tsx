import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import InquiryForm from "@/components/products/InquiryForm";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Custom Acrylic Fabrication | AcrylicPro Custom",
  description: "Full in-house acrylic fabrication — laser cutting, CNC machining, diamond polishing, UV printing, hot bending, bonding, assembly, and packaging.",
};

export default function FabricationPage() {
  return (
    <Container className="py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Custom Solutions", href: "/custom-solutions" }, { label: "Fabrication" }]} />
      <SectionHeading title="Custom Acrylic Fabrication" subtitle="Complete in-house manufacturing capabilities. Every process under one roof — faster turnaround, better quality control, lower cost." />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {services.map((s) => (
          <Link key={s.slug} href={`/manufacturing/${s.slug}`} className="group rounded-xl border border-border bg-white p-6 hover:shadow-md hover:border-primary-200 transition-all">
            <h3 className="font-semibold text-foreground group-hover:text-primary-600 transition-colors">{s.title}</h3>
            <p className="mt-2 text-sm text-muted">{s.description}</p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {s.features.slice(0, 4).map((f) => (
                <span key={f} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">{f}</span>
              ))}
            </ul>
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-xl bg-primary-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Discuss Your Fabrication Needs</h2>
        <p className="mt-2 text-primary-100">Share your project details and we will recommend the optimal manufacturing process.</p>
        <div className="mt-6 max-w-md mx-auto"><InquiryForm /></div>
      </div>
    </Container>
  );
}
