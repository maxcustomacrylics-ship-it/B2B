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
                  {`${p.industry} project for ${p.client}`}
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

      {/* ========== PROJECT GALLERY ========== */}
      <section className="bg-gray-50" aria-labelledby="gallery-heading">
        <Container className="py-16 lg:py-24">
          <div className="mb-12">
            <h2 id="gallery-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Project Gallery</h2>
            <p className="mt-3 text-gray-500 max-w-2xl leading-relaxed">
              Browse more custom acrylic projects across industries and applications.
            </p>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {projects.slice(0, 9).map((p, i) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group block break-inside-avoid rounded-2xl overflow-hidden relative shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center ${
                  i % 3 === 0 ? "aspect-[4/3]" : i % 3 === 1 ? "aspect-square" : "aspect-[3/4]"
                }`}>
                  {p.image ? (
                    <img src={p.image} alt="" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <svg className="w-10 h-10 text-gray-300/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="text-sm font-semibold text-white">{p.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="bg-white" aria-labelledby="projects-cta">
        <Container className="py-20 lg:py-28">
          <div className="max-w-[640px] mx-auto text-center">
            <h2 id="projects-cta" className="text-3xl font-bold text-[#0F2744] sm:text-4xl lg:text-5xl">
              Ready to Build Your Next Project?
            </h2>
            <p className="mt-5 text-base text-gray-500 leading-relaxed sm:text-lg">
              Share your ideas or drawings with us. We'll help turn them into
              custom acrylic solutions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center" role="group" aria-label="Call to action buttons">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-8 py-4 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2">
                Request a Quote
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#0F2744] bg-white px-8 py-4 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/></svg>
                Upload Your Drawing
              </Link>
            </div>
            <p className="mt-8 text-sm text-gray-400">
              Our team typically responds within one business day.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
