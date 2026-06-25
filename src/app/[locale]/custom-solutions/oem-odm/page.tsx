import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import InquiryForm from "@/components/products/InquiryForm";

export const metadata: Metadata = {
  title: "OEM & ODM Acrylic Manufacturing | AcrylicPro Custom",
  description: "Private label acrylic manufacturing — custom design, prototyping, low MOQ, mass production, quality control, and global shipping.",
};

const steps = [
  { title: "Private Label", desc: "Manufacture acrylic products under your brand. We handle production while you focus on sales and marketing." },
  { title: "Custom Design", desc: "Our engineering team works from your sketches, CAD files, or reference samples to create production-ready designs." },
  { title: "Prototyping", desc: "Fast-turn prototyping lets you evaluate design, material, and finish before committing to full production." },
  { title: "Low MOQ", desc: "Start with as few as 10–50 units. We accommodate small batch orders while offering volume pricing for scale." },
  { title: "Mass Production", desc: "Full-scale production with consistent quality across thousands of units. Automated processes ensure repeatability." },
  { title: "Quality Control", desc: "Multi-stage QC inspection — incoming materials, in-process checks, and final inspection with detailed reports." },
  { title: "Packaging", desc: "Custom packaging solutions from individual retail boxes to bulk export crating with your branding." },
  { title: "Global Shipping", desc: "Sea, air, and express courier options. We handle export documentation including certificate of origin." },
];

export default function OEMODMPage() {
  return (
    <Container className="py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Custom Solutions", href: "/custom-solutions" }, { label: "OEM & ODM" }]} />
      <SectionHeading title="OEM & ODM Manufacturing" subtitle="Your manufacturing partner for custom acrylic products. From concept to container, we deliver quality at scale." />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {steps.map((s) => (
          <div key={s.title} className="rounded-xl border border-border bg-white p-6">
            <h3 className="font-semibold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-muted">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-xl bg-primary-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Start Your OEM Project</h2>
        <p className="mt-2 text-primary-100">Send us your requirements — we respond within 24 hours with a detailed proposal.</p>
        <div className="mt-6 max-w-md mx-auto"><InquiryForm /></div>
      </div>
    </Container>
  );
}
