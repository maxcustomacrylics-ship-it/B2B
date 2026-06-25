import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import InquiryForm from "@/components/products/InquiryForm";
import SchemaOrg from "@/components/shared/SchemaOrg";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/utils";
import { Cog, Wrench, Building2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Acrylic Solutions | AcrylicPro Custom",
  description: "OEM & ODM custom acrylic manufacturing — private label, custom fabrication, and industry-specific solutions. Low MOQ, global shipping.",
};

const solutions = [
  { title: "OEM & ODM", href: "/custom-solutions/oem-odm", desc: "Private label manufacturing, custom design, prototyping, and mass production for brands worldwide.", icon: Cog },
  { title: "Custom Fabrication", href: "/custom-solutions/fabrication", desc: "Laser cutting, CNC machining, diamond polishing, UV printing — full in-house manufacturing capabilities.", icon: Wrench },
  { title: "Industries We Serve", href: "/custom-solutions/industries", desc: "Tailored acrylic solutions for cosmetics, retail, jewelry, hospitality, medical, and more.", icon: Building2 },
];

export default function CustomSolutionsPage() {
  const bcSchema = generateBreadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Custom Solutions", url: `${SITE_URL}/custom-solutions` }]);

  return (
    <>
      <SchemaOrg data={[bcSchema]} />
      <Container className="py-12">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Custom Solutions" }]} />
        <SectionHeading title="Custom Solutions" subtitle="We don't just sell acrylic products — we manufacture them. From concept to delivery, every project is built to your exact specifications." />

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {solutions.map((s) => (
            <Link key={s.href} href={s.href} className="group rounded-xl border border-border bg-white p-8 hover:shadow-lg hover:border-primary-200 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-600"><s.icon className="h-6 w-6" /></div>
              <h2 className="mt-4 text-xl font-semibold text-foreground group-hover:text-primary-600 transition-colors">{s.title}</h2>
              <p className="mt-2 text-sm text-muted leading-relaxed">{s.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600"><ArrowRight className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>

        <div className="mt-16 rounded-xl bg-primary-600 p-8 text-center text-white">
          <h2 className="text-2xl font-bold">Need a Custom Solution?</h2>
          <p className="mt-2 text-primary-100 max-w-xl mx-auto">Tell us your requirements and our team will provide a tailored manufacturing solution.</p>
          <div className="mt-6 max-w-md mx-auto"><InquiryForm /></div>
        </div>
      </Container>
    </>
  );
}
