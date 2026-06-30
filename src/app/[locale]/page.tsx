import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { getBlogPosts, getCaseStudies, getSettings } from "@/lib/data-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Custom Acrylic Products Designed Around Your Business | Max Custom Acrylics",
  description: "From concept to delivery, we manufacture premium custom acrylic products for retail, commercial and industrial applications. Engineering support, quality inspection, worldwide delivery.",
};

export default async function HomePage() {
  const posts = await getBlogPosts();
  const projects = await getCaseStudies();
  const s = await getSettings();

  return (
    <div className="bg-white text-slate-900">

      {/* ========== 1. HERO ========== */}
      <section className="relative bg-white" aria-labelledby="hero-heading">
        <Container className="py-16 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <h1 id="hero-heading" className="text-4xl font-bold tracking-tight text-[#0F2744] sm:text-5xl lg:text-[56px] lg:leading-[1.08]">
                {s.heroHeadline || "Custom Acrylic Products Designed Around Your Business"}
              </h1>
              <p className="mt-6 text-base text-gray-500 leading-relaxed sm:text-lg max-w-[520px]">
                From concept to delivery, we manufacture premium custom acrylic
                products for retail, commercial and industrial applications.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F2744] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm">
                  Request a Quote
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-[#0F2744] hover:border-[#0F2744] hover:bg-blue-50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/></svg>
                  Upload Your Drawing
                </Link>
              </div>
            </div>
            <div aria-hidden="true">
              <div className="aspect-[4/3] rounded-[24px] bg-gradient-to-br from-blue-50 via-slate-100 to-blue-100 flex items-center justify-center overflow-hidden shadow-lg">
                <svg className="w-20 h-20 text-gray-300/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========== 2. PRODUCT CATEGORIES ========== */}
      <section className="bg-gray-50" aria-labelledby="categories-heading">
        <Container className="py-[120px]">
          <div className="max-w-[520px] mb-12">
            <h2 id="categories-heading" className="text-3xl font-bold tracking-tight text-[#0F2744] sm:text-4xl">What We Make</h2>
            <p className="mt-3 text-gray-500 leading-relaxed">Browse our range of custom acrylic products designed for commercial and industrial applications.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Custom Acrylic Products", slug: "/products/custom-acrylic-products", color: "from-blue-100 to-blue-200/60" },
              { title: "Acrylic Displays", slug: "/products/acrylic-displays-2", color: "from-sky-100 to-sky-200/60" },
              { title: "Acrylic Boxes", slug: "/products/acrylic-boxes-2", color: "from-indigo-100 to-indigo-200/60" },
              { title: "Acrylic Signs", slug: "/products/acrylic-signs-2", color: "from-emerald-100 to-emerald-200/60" },
              { title: "Acrylic Trays & Shelves", slug: "/products/acrylic-trays-shelves", color: "from-amber-100 to-amber-200/60" },
              { title: "Protective Products", slug: "/products/protective-products-2", color: "from-purple-100 to-purple-200/60" },
            ].map((cat) => (
              <Link key={cat.slug} href={cat.slug} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className={`aspect-[16/10] bg-gradient-to-br ${cat.color} flex items-center justify-center relative`}>
                  <svg className="w-12 h-12 text-gray-400/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-[#0F2744] group-hover:text-blue-700 transition-colors">{cat.title}</h3>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-[#0F2744] group-hover:text-blue-700 transition-colors">Explore Collection<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ========== 3. WHY CHOOSE US ========== */}
      <section className="bg-white" aria-labelledby="why-heading">
        <Container className="py-[120px]">
          <div className="max-w-[520px] mb-12">
            <h2 id="why-heading" className="text-3xl font-bold tracking-tight text-[#0F2744] sm:text-4xl">Why Choose Max Custom Acrylic</h2>
            <p className="mt-3 text-gray-500 leading-relaxed">Engineering-driven approach with quality management throughout your project.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Fully Customized", desc: "Every product manufactured to your exact specifications.", color: "from-blue-100 to-blue-200/50", imgKey: "whyImg1" },
              { title: "Premium Materials", desc: "High-clarity cast and extruded acrylic options.", color: "from-sky-100 to-sky-200/50", imgKey: "whyImg2" },
              { title: "OEM & ODM Support", desc: "Custom manufacturing for your brand requirements.", color: "from-indigo-100 to-indigo-200/50", imgKey: "whyImg3" },
              { title: "Worldwide Delivery", desc: "Export-ready packaging to over 30 countries.", color: "from-emerald-100 to-emerald-200/50", imgKey: "whyImg4" },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className={`w-28 h-28 mx-auto rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center overflow-hidden`}>
                  {s[item.imgKey] ? <img src={s[item.imgKey]} alt="" className="w-full h-full object-cover" /> : <svg className="w-10 h-10 text-gray-400/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>}
                </div>
                <h3 className="mt-4 text-sm font-semibold text-[#0F2744]">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========== 4. CAPABILITIES ========== */}
      <section className="bg-gray-50" aria-labelledby="cap-heading">
        <Container className="py-[120px]">
          <div className="max-w-[520px] mb-12">
            <h2 id="cap-heading" className="text-3xl font-bold tracking-tight text-[#0F2744] sm:text-4xl">Manufacturing Capabilities</h2>
            <p className="mt-3 text-gray-500 leading-relaxed">Comprehensive acrylic fabrication coordinated through engineering and quality management.</p>
          </div>
          <div className="flex gap-5 overflow-x-auto pb-4 -mx-4 px-4 snap-x">
            {[
              { title: "Laser Cutting", slug: "/services/laser-cutting", color: "from-blue-100 to-blue-200/60", imgKey: "capImg1" },
              { title: "CNC Machining", slug: "/services/cnc-machining", color: "from-slate-100 to-slate-200/60", imgKey: "capImg2" },
              { title: "Diamond Polishing", slug: "/services/diamond-polishing", color: "from-amber-100 to-amber-200/60", imgKey: "capImg3" },
              { title: "UV Printing", slug: "/services/uv-printing", color: "from-purple-100 to-purple-200/60", imgKey: "capImg4" },
              { title: "Thermoforming", slug: "/services/laser-cutting", color: "from-rose-100 to-rose-200/60", imgKey: "capImg5" },
              { title: "Assembly", slug: "/services/bonding-assembly", color: "from-emerald-100 to-emerald-200/60", imgKey: "capImg6" },
            ].map((cap) => (
              <Link key={cap.title} href={cap.slug} className="group flex-shrink-0 w-[220px] snap-start rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className={`aspect-[4/3] bg-gradient-to-br ${cap.color} flex items-center justify-center`}>
                  {s[cap.imgKey] ? <img src={s[cap.imgKey]} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /> : <svg className="w-10 h-10 text-gray-400/25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>}
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-[#0F2744] group-hover:text-blue-700 transition-colors">{cap.title}</h3>
                  <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-[#0F2744] group-hover:text-blue-700 transition-colors">View Capability<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ========== 5. FEATURED PROJECTS ========== */}
      <section className="bg-white" aria-labelledby="projects-heading">
        <Container className="py-[120px]">
          <div className="max-w-[520px] mb-12">
            <h2 id="projects-heading" className="text-3xl font-bold tracking-tight text-[#0F2744] sm:text-4xl">Featured Projects</h2>
            <p className="mt-3 text-gray-500 leading-relaxed">Custom acrylic solutions delivered for clients worldwide.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {projects[0] && (
              <Link href={`/projects/${projects[0].slug}`} className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow lg:row-span-2">
                <div className="aspect-[4/5] lg:aspect-auto lg:h-full bg-gradient-to-br from-blue-100 to-blue-200/50 flex items-center justify-center">
                  {projects[0].image ? <img src={projects[0].image} alt="" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" /> : <svg className="w-16 h-16 text-gray-300/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <span className="text-xs font-medium text-blue-200">{projects[0].industry}</span>
                  <h3 className="mt-1 text-lg font-semibold text-white">{projects[0].title}</h3>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-white">View Project<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
                </div>
              </Link>
            )}
            <div className="grid gap-6">
              {projects.slice(1, 3).map((p, i) => (
                <Link key={p.slug} href={`/projects/${p.slug}`} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow flex">
                  <div className={`w-2/5 bg-gradient-to-br flex items-center justify-center shrink-0 ${["from-sky-100 to-sky-200/50","from-indigo-100 to-indigo-200/50"][i]}`}>
                    {p.image ? <img src={p.image} alt="" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" /> : <svg className="w-8 h-8 text-gray-300/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>}
                  </div>
                  <div className="p-4 flex flex-col justify-center flex-1">
                    <span className="text-xs text-gray-400">{p.industry}</span>
                    <h3 className="mt-1 text-sm font-semibold text-[#0F2744] group-hover:text-blue-700 transition-colors line-clamp-2">{p.title}</h3>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-[#0F2744] group-hover:text-blue-700 transition-colors">View Project<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ========== 6. PROCESS ========== */}
      <section className="bg-gray-50" aria-labelledby="process-heading">
        <Container className="py-[120px]">
          <div className="max-w-[520px] mb-12">
            <h2 id="process-heading" className="text-3xl font-bold tracking-tight text-[#0F2744] sm:text-4xl">How We Work</h2>
            <p className="mt-3 text-gray-500 leading-relaxed">A proven process from your initial inquiry to final delivery.</p>
          </div>
          <div className="flex flex-wrap items-start justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Inquiry", icon: "💬" },
              { step: "02", title: "Design", icon: "📐" },
              { step: "03", title: "Prototype", icon: "🔬" },
              { step: "04", title: "Production", icon: "⚙️" },
              { step: "05", title: "Delivery", icon: "🚢" },
            ].map((s, i) => (
              <div key={s.step} className="flex items-center">
                <div className="flex flex-col items-center text-center w-[90px] sm:w-[110px]">
                  <span className="text-5xl sm:text-6xl">{s.icon}</span>
                  <span className="mt-3 text-xs font-bold text-gray-300 tracking-wider">{s.step}</span>
                  <span className="mt-2 text-sm font-semibold text-[#0F2744]">{s.title}</span>
                </div>
                {i < 4 && <span className="text-2xl text-gray-300 mx-1 sm:mx-2 mb-8">→</span>}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========== 7. INSIGHTS ========== */}
      <section className="bg-white" aria-labelledby="insights-heading">
        <Container className="py-[120px]">
          <div className="flex items-end justify-between mb-12">
            <div className="max-w-[520px]">
              <h2 id="insights-heading" className="text-3xl font-bold tracking-tight text-[#0F2744] sm:text-4xl">Industry Insights</h2>
              <p className="mt-3 text-gray-500 leading-relaxed">Practical guides and design ideas for custom acrylic projects.</p>
            </div>
            <Link href="/blog" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-[#0F2744] hover:text-blue-700 transition-colors shrink-0">View All Articles<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {posts.slice(0, 2).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center">
                  {post.image ? <img src={post.image} alt="" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" /> : <svg className="w-12 h-12 text-gray-300/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#0F2744] group-hover:text-blue-700 transition-colors line-clamp-2">{post.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#0F2744] group-hover:text-blue-700 transition-colors">Read More<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ========== 8. FAQ ========== */}
      <section className="bg-gray-50" aria-labelledby="faq-heading">
        <Container className="py-[120px]">
          <div className="max-w-[520px] mb-12">
            <h2 id="faq-heading" className="text-3xl font-bold tracking-tight text-[#0F2744] sm:text-4xl">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl grid gap-4 sm:grid-cols-2">
            {[
              { q: "Can all products be customized?", a: "Yes. Every product can be customized in dimensions, material, color, finish, and branding to match your exact requirements." },
              { q: "What is your MOQ?", a: "MOQ is flexible. We handle single prototypes to full production runs. Contact us to discuss your specific project needs." },
              { q: "Can you manufacture from drawings?", a: "Absolutely. Send us your CAD files, sketches, or reference samples. Our engineering team will review and provide a quotation within 24 hours." },
              { q: "What is your lead time?", a: "Standard lead time is 10–18 business days depending on complexity and quantity. Rush orders can often be accommodated." },
            ].map((faq, i) => (
              <details key={i} className="group rounded-xl border border-gray-200 bg-white [&_summary::-webkit-details-marker]:hidden">
                <summary className="cursor-pointer px-5 py-4 text-sm font-semibold text-[#0F2744] list-none flex items-start justify-between gap-3">
                  <span>{faq.q}</span>
                  <span className="shrink-0 text-gray-400 group-open:hidden text-lg leading-none mt-0.5">+</span>
                  <span className="shrink-0 text-gray-400 hidden group-open:block text-lg leading-none mt-0.5">−</span>
                </summary>
                <p className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* ========== 9. FINAL CTA ========== */}
      <section className="bg-[#0F2744]" aria-labelledby="cta-heading">
        <Container className="py-[120px] text-center">
          <h2 id="cta-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{s.ctaTitle || "Let's Build Your Next Acrylic Project"}</h2>
          <p className="mt-5 text-lg text-blue-200 leading-relaxed max-w-[560px] mx-auto">{s.ctaSub || "Tell us your ideas and we'll provide the right acrylic solution."}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors shadow-sm">Request a Quote<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-transparent px-8 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/></svg>Upload Your Drawing</Link>
          </div>
          <p className="mt-8 text-sm text-blue-300/70">Our team typically responds within one business day.</p>
        </Container>
      </section>

    </div>
  );
}
