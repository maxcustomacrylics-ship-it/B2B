import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getCaseStudies } from "@/lib/data-store";

export const metadata: Metadata = {
  title: "Featured Projects | Max Custom Acrylics",
  description: "Explore a selection of custom acrylic projects developed for retail, hospitality, commercial and industrial applications.",
};

const industryColors: Record<string, string> = { Retail:"bg-blue-50 text-blue-700", Cosmetics:"bg-pink-50 text-pink-700", Hospitality:"bg-amber-50 text-amber-700", Museum:"bg-purple-50 text-purple-700", Exhibition:"bg-green-50 text-green-700", Corporate:"bg-gray-100 text-gray-700" };

export default async function ProjectsPage() {
  const projects = await getCaseStudies();

  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section className="relative bg-white overflow-hidden" aria-labelledby="projects-hero">
        <Container className="py-12 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <Breadcrumb items={[{ label: "Home", href: "/" },{ label: "Projects" }]} />
              <h1 id="projects-hero" className="mt-4 text-4xl font-bold tracking-tight text-[#0F2744] sm:text-5xl lg:text-[56px] lg:leading-tight">
                Featured Projects
              </h1>
              <p className="mt-5 text-base text-gray-500 leading-relaxed sm:text-lg max-w-[560px]">
                Explore a selection of custom acrylic projects developed for
                retail, hospitality, commercial and industrial applications.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2">
                  Request a Quote
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
                <Link href="/products" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#0F2744] bg-white px-6 py-3.5 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2">
                  View Products
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
            <div className="relative" aria-hidden="true">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 flex items-center justify-center shadow-sm">
                {projects[0]?.image ? (
                  <img src={projects[0].image} alt="" className="h-full w-full object-cover" />
                ) : (
                  <svg className="w-16 h-16 text-gray-300/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>
                  </svg>
                )}
              </div>
              <span className="sr-only">Featured custom acrylic project example</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ========== PROJECTS GRID ========== */}
      <Container className="pb-16 lg:pb-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="group rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg transition-all">
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center">
                {p.image ? <img src={p.image} alt={p.title} className="h-full w-full object-cover" /> : (
                  <svg className="w-10 h-10 text-gray-300/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${industryColors[p.industry] || "bg-gray-50 text-gray-600"}`}>{p.industry}</span>
                </div>
                <h2 className="font-semibold text-[#0F2744] group-hover:text-blue-700 leading-snug">{p.title}</h2>
                <p className="mt-1 text-sm text-gray-500">{p.client}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#0F2744]">
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
