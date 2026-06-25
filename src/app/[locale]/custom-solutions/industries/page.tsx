import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import InquiryForm from "@/components/products/InquiryForm";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve | AcrylicPro Custom",
  description: "Custom acrylic solutions for cosmetics, retail, jewelry, hospitality, medical, electronics, and luxury packaging industries.",
};

const industries = [
  { title: "Cosmetics", href: "/industries/cosmetics", desc: "Display stands, tester units, and retail fixtures for beauty brands." },
  { title: "Retail", href: "/industries/retail", desc: "POS displays, counter units, and store fixtures for retail environments." },
  { title: "Jewelry", href: "/industries/jewelry", desc: "Premium display cases, busts, and presentation trays for fine jewelry." },
  { title: "Restaurant", href: "/industries/restaurant", desc: "Menu holders, table signs, food displays, and QR code stands." },
  { title: "Hotel", href: "/industries/hotel", desc: "Room signage, reception displays, brochure holders, and amenity trays." },
  { title: "Medical", href: "/industries/medical", desc: "Equipment covers, protective barriers, signage, and organizational displays." },
  { title: "Electronics", href: "/industries/electronics", desc: "Product stands, enclosure components, and retail display fixtures." },
  { title: "Luxury Packaging", href: "/industries/luxury-packaging", desc: "Premium gift boxes, presentation cases, and branded packaging solutions." },
];

export default function IndustriesPage() {
  return (
    <Container className="py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Custom Solutions", href: "/custom-solutions" }, { label: "Industries" }]} />
      <SectionHeading title="Industries We Serve" subtitle="We don't just make acrylic products — we solve industry-specific challenges with custom manufacturing solutions." />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((ind) => (
          <Link key={ind.href} href={ind.href} className="group rounded-xl border border-border bg-white p-6 hover:shadow-md hover:border-primary-200 transition-all">
            <h3 className="font-semibold text-foreground group-hover:text-primary-600 transition-colors">{ind.title}</h3>
            <p className="mt-2 text-sm text-muted">{ind.desc}</p>
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary-600"><ArrowRight className="h-3 w-3" /></span>
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-xl bg-primary-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Not Sure What You Need?</h2>
        <p className="mt-2 text-primary-100">Our team will analyze your requirements and recommend the best solution for your industry.</p>
        <div className="mt-6 max-w-md mx-auto"><InquiryForm /></div>
      </div>
    </Container>
  );
}
