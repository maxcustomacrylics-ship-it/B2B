import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FAQSection from "@/components/home/FAQSection";
import { getBlogPosts, getCaseStudies } from "@/lib/data-store";

export const metadata: Metadata = {
  title: "Max Custom Acrylics — Custom Acrylic Solutions",
  description: "Engineering-driven custom acrylic solutions. From design review to worldwide delivery — premium acrylic products for retail, commercial and industrial applications.",
};

export default async function HomePage() {
  const posts = await getBlogPosts();
  const projects = (await getCaseStudies()).slice(0, 3);

  return (
    <div className="bg-white text-slate-900">

      {/* ========== 1. HERO ========== */}
      <section className="relative bg-white overflow-hidden" aria-labelledby="home-hero">
        <Container className="py-16 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 tracking-wide mb-4">Engineering & Project Partner</span>
              <h1 id="home-hero" className="text-4xl font-bold tracking-tight text-[#0F2744] sm:text-5xl lg:text-[56px] lg:leading-tight">
                Custom Acrylic Solutions for Your Business
              </h1>
              <p className="mt-5 text-base text-gray-500 leading-relaxed sm:text-lg max-w-[560px]">
                We help businesses develop custom acrylic products through
                engineering support, coordinated production and quality-focused
                project management — from concept to worldwide delivery.
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
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { color: "from-blue-100 to-blue-200/50", label: "Displays" },
                  { color: "from-sky-100 to-sky-200/50", label: "Boxes" },
                  { color: "from-indigo-100 to-indigo-200/50", label: "Signs" },
                  { color: "from-emerald-100 to-emerald-200/50", label: "Trays" },
                  { color: "from-amber-100 to-amber-200/50", label: "Shelves" },
                  { color: "from-purple-100 to-purple-200/50", label: "Custom" },
                ].map((img, i) => (
                  <div key={i} className={`aspect-square rounded-xl overflow-hidden bg-gradient-to-br ${img.color} flex items-center justify-center shadow-sm`}>
                    <svg className="w-6 h-6 text-gray-400/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
                    <span className="absolute bottom-1.5 left-0 right-0 text-center text-[9px] text-gray-400 font-medium">{img.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========== 2. WHY CHOOSE US ========== */}
      <section className="bg-gray-50" aria-labelledby="why-us-heading">
        <Container className="py-[120px]">
          <div className="max-w-[640px] mb-12">
            <h2 id="why-us-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Why Choose Us</h2>
            <p className="mt-3 text-gray-500 leading-relaxed">We combine engineering expertise with coordinated production to deliver consistent, high-quality results.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "📐", title: "Engineering Support", desc: "Design review and manufacturability analysis for every project." },
              { icon: "📋", title: "Flexible Production", desc: "From prototypes to full production with consistent quality." },
              { icon: "🛡", title: "Quality Control", desc: "Multi-stage inspection with documented reports at every stage." },
              { icon: "🌐", title: "Global Delivery", desc: "Export-ready packaging and logistics to over 30 countries." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm flex items-start gap-4">
                <span className="text-2xl select-none">{item.icon}</span>
                <div><h3 className="text-sm font-semibold text-[#0F2744]">{item.title}</h3><p className="mt-0.5 text-sm text-gray-500 leading-relaxed">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========== 3. CAPABILITIES ========== */}
      <section className="bg-white" aria-labelledby="capabilities-heading">
        <Container className="py-[120px]">
          <div className="max-w-[640px] mb-12">
            <h2 id="capabilities-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Our Capabilities</h2>
            <p className="mt-3 text-gray-500 leading-relaxed">Comprehensive acrylic fabrication capabilities coordinated through engineering and quality management.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Laser Cutting", slug: "/services/laser-cutting", desc: "Precision CO₂ laser cutting with flame-polished edges and ±0.1mm tolerance.", icon: "🔬" },
              { title: "CNC Machining", slug: "/services/cnc-machining", desc: "Multi-axis CNC routing for 3D parts, threaded holes and contoured surfaces.", icon: "⚙️" },
              { title: "Diamond Polishing", slug: "/services/diamond-polishing", desc: "Optical-grade edge finishing for luxury displays and premium products.", icon: "💎" },
              { title: "UV Printing", slug: "/services/uv-printing", desc: "Full-color CMYK + White direct-to-acrylic printing at 1440dpi.", icon: "🎨" },
              { title: "Assembly & Packaging", slug: "/services/bonding-assembly", desc: "Complete product assembly with hardware integration and export packaging.", icon: "📦" },
              { title: "Quality Control", slug: "/services/oem-project-support", desc: "Multi-stage inspection with documented reports and photo verification.", icon: "🛡" },
            ].map((cap) => (
              <Link key={cap.slug} href={cap.slug} className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all flex items-start gap-4">
                <span className="text-2xl select-none">{cap.icon}</span>
                <div>
                  <h3 className="text-sm font-semibold text-[#0F2744] group-hover:text-blue-700 transition-colors">{cap.title}</h3>
                  <p className="mt-0.5 text-sm text-gray-500 leading-relaxed">{cap.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ========== 4. PRODUCT CATEGORIES ========== */}
      <section className="bg-gray-50" aria-labelledby="categories-heading">
        <Container className="py-[120px]">
          <div className="mb-12">
            <h2 id="categories-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Product Categories</h2>
            <p className="mt-3 text-gray-500 max-w-2xl leading-relaxed">Explore our range of custom acrylic products designed for commercial and industrial applications.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Custom Acrylic Products", slug: "/products/custom-acrylic-products", color: "from-blue-100 to-blue-200/50" },
              { title: "Acrylic Displays", slug: "/products/acrylic-displays-2", color: "from-sky-100 to-sky-200/50" },
              { title: "Acrylic Boxes", slug: "/products/acrylic-boxes-2", color: "from-indigo-100 to-indigo-200/50" },
              { title: "Acrylic Signs", slug: "/products/acrylic-signs-2", color: "from-emerald-100 to-emerald-200/50" },
              { title: "Acrylic Trays & Shelves", slug: "/products/acrylic-trays-shelves", color: "from-amber-100 to-amber-200/50" },
              { title: "Protective Products", slug: "/products/protective-products-2", color: "from-purple-100 to-purple-200/50" },
            ].map((cat) => (
              <Link key={cat.slug} href={cat.slug} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className={`aspect-[16/9] bg-gradient-to-br ${cat.color} flex items-center justify-center`}>
                  <svg className="w-10 h-10 text-gray-400/25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-[#0F2744] group-hover:text-blue-700 transition-colors">{cat.title}</h3>
                  <span className="text-xs font-medium text-[#0F2744] group-hover:text-blue-700 transition-colors shrink-0">Explore →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/products" className="inline-flex items-center gap-2 rounded-lg border-2 border-[#0F2744] px-6 py-3 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors">View All Categories<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></Link>
          </div>
        </Container>
      </section>

      {/* ========== 5. FEATURED PROJECTS ========== */}
      <section className="bg-white" aria-labelledby="projects-heading">
        <Container className="py-[120px]">
          <div className="mb-12">
            <h2 id="projects-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Featured Projects</h2>
            <p className="mt-3 text-gray-500 max-w-2xl leading-relaxed">A selection of custom acrylic projects delivered for clients worldwide.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {projects.map((p, i) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className={`aspect-[4/3] bg-gradient-to-br flex items-center justify-center ${["from-blue-50 to-blue-200/50","from-sky-50 to-sky-200/50","from-indigo-50 to-indigo-200/50"][i]}`}>
                  {p.image ? <img src={p.image} alt="" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" /> : (
                    <svg className="w-12 h-12 text-gray-300/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
                  )}
                </div>
                <div className="p-4">
                  <span className="text-xs text-gray-400">{p.industry}</span>
                  <h3 className="mt-1 text-sm font-semibold text-[#0F2744] group-hover:text-blue-700 transition-colors line-clamp-2">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/projects" className="inline-flex items-center gap-2 rounded-lg border-2 border-[#0F2744] px-6 py-3 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors">View All Projects<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></Link>
          </div>
        </Container>
      </section>

      {/* ========== 6. INDUSTRY INSIGHTS ========== */}
      <section className="bg-gray-50" aria-labelledby="insights-heading">
        <Container className="py-[120px]">
          <div className="mb-12">
            <h2 id="insights-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Industry Insights</h2>
            <p className="mt-3 text-gray-500 max-w-2xl leading-relaxed">Practical guides, material knowledge and design ideas for custom acrylic projects.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center">
                  {post.image ? <img src={post.image} alt="" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" /> : (
                    <svg className="w-10 h-10 text-gray-300/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
                  )}
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <p className="text-xs text-gray-400">{post.date}</p>
                  <h3 className="mt-1.5 text-sm font-semibold text-[#0F2744] group-hover:text-blue-700 transition-colors line-clamp-2">{post.title}</h3>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-[#0F2744] group-hover:text-blue-700 transition-colors">Read More<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/blog" className="inline-flex items-center gap-2 rounded-lg border-2 border-[#0F2744] px-6 py-3 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors">View All Resources<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></Link>
          </div>
        </Container>
      </section>

      {/* ========== 7. FAQ ========== */}
      <FAQSection />

      {/* ========== 8. FINAL CTA ========== */}
      <section className="bg-white" aria-labelledby="final-cta-heading">
        <Container className="py-[120px]">
          <div className="max-w-[640px] mx-auto text-center">
            <h2 id="final-cta-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl lg:text-5xl">Ready to Start Your Project?</h2>
            <p className="mt-5 text-base text-gray-500 leading-relaxed sm:text-lg">Tell us about your requirements and our engineering team will provide a tailored solution.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-8 py-4 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm">Request a Quote<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#0F2744] bg-white px-8 py-4 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/></svg>Upload Your Drawing</Link>
            </div>
            <p className="mt-8 text-sm text-gray-400">Our team typically responds within one business day.</p>
          </div>
        </Container>
      </section>

    </div>
  );
}
