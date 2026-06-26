import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import InquiryForm from "@/components/products/InquiryForm";
import { getCaseStudies } from "@/lib/data-store";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Acrylic Projects | Max Custom Acrylics",
  description: "Explore our custom acrylic project portfolio — retail displays, luxury packaging, exhibition fixtures, and OEM solutions delivered for clients worldwide.",
};

const industryColors: Record<string, string> = { Retail:"bg-blue-50 text-blue-700", Cosmetics:"bg-pink-50 text-pink-700", Hospitality:"bg-amber-50 text-amber-700", Museum:"bg-purple-50 text-purple-700", Exhibition:"bg-green-50 text-green-700", Corporate:"bg-gray-100 text-gray-700" };

export default async function ProjectsPage() {
  const projects = await getCaseStudies();
  return (
    <Container className="py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" },{ label: "Projects" }]} />
      <div className="mt-6"><h1 className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Custom Acrylic Projects</h1><p className="mt-4 max-w-2xl text-gray-500">Real projects delivered for clients worldwide. Each project demonstrates our engineering capability, quality control, and commitment to client success.</p></div>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="group rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg transition-all">
            <div className="aspect-video bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center overflow-hidden">
              {p.image ? <img src={p.image} alt={p.title} className="h-full w-full object-cover" /> : <span className="text-5xl opacity-20">📂</span>}
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${industryColors[p.industry] || "bg-gray-50 text-gray-600"}`}>{p.industry}</span>
              </div>
              <h2 className="font-semibold text-[#0F2744] group-hover:text-blue-700 leading-snug">{p.title}</h2>
              <p className="mt-1 text-sm text-gray-500">{p.client}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#0F2744]"><ArrowRight className="h-4 w-4" /></span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-16 rounded-xl bg-[#0F2744] p-8 text-center text-white"><h2 className="text-2xl font-bold">Have a Similar Project?</h2><p className="mt-2 text-blue-200">Tell us about your requirements and we will provide a custom solution.</p><div className="mt-6 max-w-md mx-auto"><InquiryForm /></div></div>
    </Container>
  );
}
