import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getCaseStudies } from "@/lib/data-store";

export const metadata: Metadata = {
  title: "Featured Projects | Max Custom Acrylics",
  description: "Explore a selection of custom acrylic projects developed for retail, hospitality, commercial and industrial applications.",
};

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

      {/* ========== FEATURED PROJECTS ========== */}
      <Container className="pb-16 lg:pb-24">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Featured Projects</h2>
          <p className="mt-3 text-gray-500 max-w-2xl leading-relaxed">
            A selection of custom acrylic projects developed for clients worldwide.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center">
                {p.image ? <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" /> : (
                  <svg className="w-12 h-12 text-gray-300/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-sm font-semibold text-[#0F2744] group-hover:text-blue-700 transition-colors leading-snug">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm text-gray-500 leading-relaxed flex-1 line-clamp-2">
                  {p.description || `${p.industry} — ${p.client}`}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[#0F2744] group-hover:text-blue-700 transition-colors">
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
