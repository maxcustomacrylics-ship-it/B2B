import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import InquiryForm from "@/components/products/InquiryForm";
import { industryPages } from "@/data/industry-pages";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve | Max Custom Acrylics",
  description: "Custom acrylic solutions for 20+ industries — retail, cosmetics, hospitality, medical, electronics, and more. Industry-specific manufacturing with engineering support.",
};

export default function IndustriesPage() {
  return (
    <Container className="py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" },{ label: "Custom Solutions", href: "/custom-solutions" },{ label: "Industries" }]} />
      <div className="mt-6">
        <h1 className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Industries We Serve</h1>
        <p className="mt-4 max-w-2xl text-gray-500">Custom acrylic solutions for over 20 industries. Each industry page includes application examples, recommended products, manufacturing capabilities, and project FAQs.</p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {industryPages.map((ind) => (
          <Link key={ind.slug} href={`/industries/${ind.slug}`} className="group rounded-xl border border-gray-200 bg-white p-5 hover:shadow-md hover:border-blue-200 transition-all">
            <h2 className="font-semibold text-[#0F2744] group-hover:text-blue-700">{ind.name}</h2>
            <p className="mt-2 text-xs text-gray-500 line-clamp-2">{ind.metaDesc}</p>
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[#0F2744]"><ArrowRight className="h-3 w-3" /></span>
          </Link>
        ))}
      </div>
      <div className="mt-16 rounded-xl bg-[#0F2744] p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Don&apos;t See Your Industry?</h2>
        <p className="mt-2 text-blue-200">We work with clients across many sectors. Contact us to discuss your specific requirements.</p>
        <div className="mt-6 max-w-md mx-auto"><InquiryForm /></div>
      </div>
    </Container>
  );
}
