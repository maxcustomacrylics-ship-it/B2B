import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import InquiryForm from "@/components/products/InquiryForm";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Manufacturing Capabilities | AcrylicPro Custom",
  description: "Full in-house acrylic manufacturing — laser cutting, CNC machining, diamond polishing, UV printing, hot bending, bonding, assembly and packaging.",
};

export default function ManufacturingPage() {
  return (
    <Container className="py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Manufacturing" }]} />
      <SectionHeading title="Manufacturing Capabilities" subtitle="ISO-certified factory with complete in-house manufacturing. Every process controlled under one roof for quality, speed, and cost efficiency." />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Link key={s.slug} href={`/manufacturing/${s.slug}`} className="group rounded-xl border border-border bg-white p-6 hover:shadow-md hover:border-primary-200 transition-all">
            <h3 className="font-semibold text-foreground group-hover:text-primary-600">{s.title}</h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">{s.description}</p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {s.features.slice(0, 3).map((f) => <span key={f} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">{f}</span>)}
            </ul>
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary-600"><ArrowRight className="h-3 w-3" /></span>
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-xl bg-primary-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Request Manufacturing Support</h2>
        <p className="mt-2 text-primary-100">Tell us about your project and we will recommend the optimal manufacturing process.</p>
        <div className="mt-6 max-w-md mx-auto"><InquiryForm /></div>
      </div>
    </Container>
  );
}
