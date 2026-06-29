import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import {
  ArrowRight, Upload, Cog, Wrench, ShieldCheck, Globe,
  Gem, Sparkles, Eye, Award, ShoppingBag, ClipboardCheck, AlertTriangle,
  Layers, Star,
  FileText, Ruler, ScanEye, Puzzle, MessageSquare, XCircle, ClipboardList, Check, FlaskConical,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Premium Diamond Edge Polishing for Acrylic | Max Custom Acrylics",
  description:
    "Optical-grade diamond polishing for acrylic edges — crystal-clear, glass-like finish. Premium finishing for luxury displays, awards, and high-end retail products.",
};

export default function DiamondPolishingPage() {
  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section className="relative bg-gradient-to-br from-[#0F2744] via-[#1E3A5F] to-[#0F2744] overflow-hidden" aria-labelledby="dp-hero-heading">
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-6 gap-2 h-full p-8">{[...Array(18)].map((_,i)=>(<div key={i} className="bg-amber-400 rounded-full" />))}</div>
        </div>
        <Container className="relative py-20 lg:py-28 text-center">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Diamond Polishing" }]} />
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-amber-300 tracking-wide mt-6">Optical-Grade Premium Finish</span>
          <h1 id="dp-hero-heading" className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[56px] lg:leading-tight">Premium Diamond Edge Polishing for Acrylic</h1>
          <p className="mt-5 text-base text-blue-200 leading-relaxed sm:text-lg max-w-[640px] mx-auto">Optical-grade edge finishing using progressive diamond abrasives — the premium choice for luxury displays, awards and high-end retail products.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center" role="group" aria-label="Call to action buttons">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#0F2744] hover:bg-amber-50 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F2744]" aria-label="Request a quote for diamond polished acrylic products">Request a Quote <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-transparent px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white" aria-label="Upload your drawing for diamond polishing quotation"><Upload className="h-4 w-4" aria-hidden="true" /> Upload Your Drawing</Link>
          </div>
        </Container>
      </section>

      {/* ========== WHEN TO CHOOSE SECTION ========== */}
      <section className="bg-gray-50" aria-labelledby="dp-when-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]">
            <h2 id="dp-when-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">
              When Should You Choose Diamond Polishing?
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">
              Diamond polishing delivers the highest quality edge finish available for acrylic products. Understanding when to invest in this premium process helps you balance visual impact and production cost.
            </p>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-[7fr_5fr]">
            <div>
              <h3 className="text-xl font-semibold text-[#0F2744]">Best Applications</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Gem, title: "Luxury Retail Displays", desc: "Premium edge finish that elevates perceived product value." },
                  { icon: Award, title: "Corporate Awards & Trophies", desc: "Flawless presentation for high-visibility recognition pieces." },
                  { icon: Eye, title: "Architectural Features", desc: "Optical-grade clarity where edge finish is a design element." },
                  { icon: ShoppingBag, title: "High-End Retail Products", desc: "Jewelry cases, vitrines and premium point-of-sale displays." },
                  { icon: Sparkles, title: "Museum Exhibits", desc: "Crystal-clear vitrines and display cases for artifact presentation." },
                  { icon: ClipboardCheck, title: "Premium Gift Products", desc: "Elevate corporate gifts with glass-like edge transparency." },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-blue-50 text-[#0F2744]">
                      <item.icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <h4 className="mt-3 text-sm font-semibold text-[#0F2744]">{item.title}</h4>
                    <p className="mt-1 text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0F2744]">Consider Other Processes If</h3>
              <div className="mt-6 space-y-4">
                {[
                  { title: "Budget Is the Priority", desc: "Flame polishing offers a cost-effective glossy alternative." },
                  { title: "Edges Are Not Visible", desc: "Standard as-cut edges may be sufficient for hidden surfaces." },
                  { title: "Production Speed Matters", desc: "Flame polishing processes edges significantly faster." },
                  { title: "Complex Internal Cutouts", desc: "Internal edge polishing has geometric limitations." },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-amber-200 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <h4 className="text-sm font-semibold text-[#0F2744]">{item.title}</h4>
                        <p className="mt-1 text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-14 rounded-2xl border border-blue-200 bg-blue-50/60 p-8 md:p-10 text-center">
            <h3 className="text-xl font-bold text-[#0F2744] sm:text-2xl">Not sure which finish is right for your product?</h3>
            <p className="mt-2 text-gray-500 max-w-lg mx-auto leading-relaxed">
              Our engineering team can review your design and recommend the optimal edge finishing approach based on your product positioning and budget.
            </p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2">
              <Upload className="h-4 w-4" aria-hidden="true" /> Upload Your Drawing
            </Link>
          </div>
        </Container>
      </section>

      {/* ========== MATERIAL COMPATIBILITY SECTION ========== */}
      <section className="bg-gray-50" aria-labelledby="dp-materials-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]">
            <h2 id="dp-materials-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Material Compatibility</h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">Choosing the appropriate material is essential for achieving the desired appearance, durability and manufacturing performance. Our engineering team can recommend suitable materials based on your application.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Cast Acrylic", rating: 5, badge: "Excellent", color: "from-blue-100 to-blue-50", bestFor: ["Luxury displays", "Signage", "Display cases"], desc: "Premium optical clarity with superior surface hardness. The preferred choice for high-end display products, awards and architectural applications requiring flawless transparency.", slug: "cast-acrylic" },
              { name: "Extruded Acrylic", rating: 4, badge: "Very Good", color: "from-sky-100 to-sky-50", bestFor: ["General fabrication", "Retail displays"], desc: "Consistent thickness with good optical properties at an economical price point. Ideal for volume production of retail fixtures, POP displays and standard signage.", slug: "extruded-acrylic" },
              { name: "PETG", rating: 4, badge: "Very Good", color: "from-emerald-100 to-emerald-50", bestFor: ["Protective panels", "Medical applications"], desc: "Excellent impact resistance with good clarity and formability. Suitable for protective barriers, medical device housings and retail fixtures requiring durability.", slug: "petg" },
              { name: "Polycarbonate", rating: 3, badge: "Moderate", color: "from-amber-100 to-amber-50", bestFor: ["Impact-resistant components", "Industrial guards"], desc: "Maximum impact strength and heat resistance among clear plastics. Used for machine guards, safety components and industrial applications where durability is critical.", slug: "polycarbonate" },
              { name: "PVC Foam Board", rating: 3, badge: "Moderate", color: "from-purple-100 to-purple-50", bestFor: ["Indoor signage", "Exhibitions"], desc: "Lightweight, cost-effective substrate for indoor signage, exhibition displays and temporary installations. Easy to print and fabricate.", slug: "pvc-foam-board" },
              { name: "ABS", rating: 2, badge: "Limited", color: "from-rose-100 to-rose-50", bestFor: ["Functional engineering parts"], desc: "Tough, rigid engineering plastic for functional components. Suitable for structural parts and industrial applications where optical clarity is not required.", slug: "abs" },
            ].map((mat) => (
              <div key={mat.name} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className={`aspect-[16/9] bg-gradient-to-br ${mat.color} flex items-center justify-center`}>
                  <div className="text-center select-none">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/70 shadow-sm">
                      <Layers className="h-6 w-6 text-[#0F2744]" aria-hidden="true" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`h-3.5 w-3.5 ${i < mat.rating ? "fill-amber-400 text-amber-400" : "fill-none text-gray-200"}`} aria-hidden="true" />
                    ))}
                    <span className="ml-1.5 text-xs font-medium text-gray-500">{mat.badge}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-[#0F2744]">{mat.name}</h3>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {mat.bestFor.map((tag) => (
                      <span key={tag} className="inline-block rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">{tag}</span>
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed">{mat.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#0F2744]">Learn More</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14 rounded-2xl border border-blue-200 bg-blue-50/60 p-8 md:p-10 text-center">
            <h3 className="text-xl font-bold text-[#0F2744] sm:text-2xl">Need Help Choosing Materials?</h3>
            <p className="mt-2 text-gray-500 max-w-lg mx-auto leading-relaxed">Our engineering team can recommend the most suitable material based on your product design, application and manufacturing requirements.</p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2">Contact Engineering Team<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </Container>
      </section>

      {/* ========== DESIGN GUIDELINES SECTION ========== */}
      <section className="bg-white" aria-labelledby="dp-design-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]">
            <h2 id="dp-design-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Design Guidelines for Better Diamond Polishing Results</h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">Following good design practices helps achieve optical-grade edge quality, reduce processing time and ensure consistent finishing results.</p>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
            <div className="space-y-4">
              {[
                { icon: FileText, title: "Specify Edge Geometry", desc: "Define whether edges should be flat, beveled or rounded. Clear edge profile specifications help us select the right diamond tooling and polishing sequence." },
                { icon: ScanEye, title: "Identify Visible Edges", desc: "Mark which edges require optical-grade finish versus standard finish. Focusing premium polishing on visible surfaces helps manage cost while maximizing visual impact." },
                { icon: Ruler, title: "Choose Cast Acrylic for Best Results", desc: "Cast acrylic produces superior polishing results due to its hardness and optical properties. Extruded acrylic can be polished but may not achieve the same clarity." },
                { icon: Puzzle, title: "Allow for Process Sequence", desc: "Polish after cutting and before assembly. Planning the manufacturing sequence correctly ensures polished edges remain pristine through subsequent processes." },
                { icon: MessageSquare, title: "Consult Engineering Early", desc: "Early design review ensures achievable edge quality targets. Our engineers can recommend the optimal edge profile and finish level for your product positioning." },
              ].map((item, i) => (
                <div key={item.title} className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0F2744] text-white flex items-center justify-center text-xs font-bold">{i + 1}</div>
                    <div>
                      <div className="flex items-center gap-2"><item.icon className="h-4 w-4 text-[#0F2744]" aria-hidden="true" /><h3 className="text-sm font-semibold text-[#0F2744]">{item.title}</h3></div>
                      <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative" aria-hidden="true">
              <div className="sticky top-24 rounded-2xl border border-gray-200 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
                <div className="aspect-[4/5] flex items-center justify-center p-8">
                  <svg className="w-full h-full max-w-[320px]" viewBox="0 0 200 260" fill="none" stroke="#0F2744" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="20" y="20" width="160" height="220" rx="4" stroke="#cbd5e1" strokeWidth="1" />
                    <rect x="50" y="50" width="100" height="80" rx="2" stroke="#0F2744" strokeWidth="1.2" />
                    <path d="M50 50 C50 30,60 20,80 20" stroke="#f59e0b" strokeWidth="2" fill="none" />
                    <circle cx="78" cy="22" r="2" fill="#f59e0b" stroke="none" />
                    <line x1="78" y1="22" x2="78" y2="42" stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="3 2" />
                    <line x1="40" y1="85" x2="40" y2="95" stroke="#0F2744" strokeWidth="1.5" />
                    <line x1="50" y1="88" x2="40" y2="88" stroke="#94a3b8" strokeWidth="0.5" />
                    <rect x="30" y="120" width="25" height="25" rx="10" stroke="#0F2744" strokeWidth="0.8" fill="#f8fafc" />
                    <rect x="30" y="120" width="25" height="25" rx="10" stroke="#f59e0b" strokeWidth="1.2" fill="none" />
                  </svg>
                </div>
                <div className="px-6 pb-6 text-center"><p className="text-xs text-gray-400">Recommended: mark edges requiring optical-grade finish on your drawing</p></div>
              </div>
            </div>
          </div>
          <div className="mt-12 rounded-2xl border border-blue-200 bg-blue-50/60 p-8 md:p-10 text-center">
            <h3 className="text-xl font-bold text-[#0F2744] sm:text-2xl">Need help reviewing your design?</h3>
            <p className="mt-2 text-gray-500 max-w-lg mx-auto leading-relaxed">Our engineering team can review your drawings and recommend the optimal edge finishing approach for your product.</p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2"><Upload className="h-4 w-4" aria-hidden="true" /> Upload Your Drawing</Link>
          </div>
        </Container>
      </section>

      {/* ========== COMMON DESIGN MISTAKES SECTION ========== */}
      <section className="bg-gray-50" aria-labelledby="dp-mistakes-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]"><h2 id="dp-mistakes-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Common Design Mistakes to Avoid</h2><p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">Understanding common finishing issues helps achieve the desired edge quality and avoid unnecessary rework.</p></div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Unspecified Edge Requirements", desc: "Not identifying which edges need polishing leads to inconsistent results. Clearly mark edges requiring optical-grade finish versus standard finish on your drawings." },
              { title: "Sharp Internal Corners", desc: "Internal corners cannot be polished effectively with diamond tooling. Design with adequate internal radii to enable consistent polishing access and quality." },
              { title: "Wrong Material Selection", desc: "Extruded acrylic produces inferior polish results compared to cast acrylic. For premium edge clarity, specify cast acrylic for parts requiring diamond polishing." },
              { title: "Overlooking Process Sequence", desc: "Polishing at the wrong production stage leads to rework. Always polish after cutting and before assembly to maintain edge quality through subsequent processes." },
              { title: "Unrealistic Expectations", desc: "Not all geometries can achieve optical-grade clarity. Consult with engineering early to understand achievable finish levels for your specific design." },
              { title: "Skipping Engineering Review", desc: "Early review clarifies achievable finish levels and helps set realistic quality targets. Our engineers can recommend the optimal polishing approach for your product." },
            ].map((item) => (
              <div key={item.title} className="group rounded-xl border border-rose-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3"><XCircle className="h-5 w-5 text-rose-400 flex-shrink-0 mt-0.5" aria-hidden="true" /><div><h3 className="text-sm font-semibold text-[#0F2744]">{item.title}</h3><p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{item.desc}</p></div></div>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-blue-200 bg-blue-50/60 p-8 md:p-10 text-center">
            <h3 className="text-xl font-bold text-[#0F2744] sm:text-2xl">Good design starts with good communication.</h3>
            <p className="mt-2 text-gray-500 max-w-lg mx-auto leading-relaxed">Our engineering team is happy to review your drawings before production.</p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2"><Upload className="h-4 w-4" aria-hidden="true" /> Upload Your Drawing</Link>
          </div>
        </Container>
      </section>

      {/* ========== FILE PREPARATION GUIDE SECTION ========== */}
      <section className="bg-gray-50" aria-labelledby="dp-files-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]"><h2 id="dp-files-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Preparing Your Files for Diamond Polishing</h2><p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">Providing clear edge finish specifications helps speed up engineering review and ensures the desired result.</p></div>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6"><div className="flex items-center gap-2 mb-5"><FileText className="h-5 w-5 text-[#0F2744]" aria-hidden="true" /><h3 className="text-lg font-semibold text-[#0F2744]">Accepted File Formats</h3></div><div className="grid grid-cols-3 gap-3">{["AI", "PDF", "DXF", "DWG", "STEP", "IGES"].map((fmt) => (<div key={fmt} className="flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-[#0F2744]">{fmt}</div>))}</div></div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6"><div className="flex items-center gap-2 mb-5"><ClipboardList className="h-5 w-5 text-[#0F2744]" aria-hidden="true" /><h3 className="text-lg font-semibold text-[#0F2744]">Drawing Checklist</h3></div><ul className="space-y-3">{["Mark edges requiring optical-grade polish.","Specify edge profile — flat, bevel or round.","Indicate visible surfaces vs hidden edges.","Define required finish level per edge.","Include material specification (cast recommended).","Note process sequence requirements."].map((item) => (<li key={item} className="flex items-start gap-2.5 text-sm text-gray-500"><Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />{item}</li>))}</ul></div>
          </div>
          <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50/60 p-8 md:p-10 text-center"><h3 className="text-xl font-bold text-[#0F2744] sm:text-2xl">Need help preparing your files?</h3><p className="mt-2 text-gray-500 max-w-lg mx-auto leading-relaxed">Our engineering team can review your edge finish specifications and recommend the optimal approach.</p><Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2"><Upload className="h-4 w-4" aria-hidden="true" /> Upload Your Drawing</Link></div>
        </Container>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section className="py-16 lg:py-24 bg-gray-50" aria-labelledby="dp-faq-heading">
        <Container>
          <div className="text-center mb-12"><h2 id="dp-faq-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Frequently Asked Questions</h2><p className="mt-3 text-gray-500 max-w-2xl mx-auto leading-relaxed">Find answers to common questions about diamond edge polishing, finish quality and project delivery.</p></div>
          <div className="max-w-4xl mx-auto grid gap-4 sm:grid-cols-2">
            {[
              { q: "How does diamond polishing compare to flame polishing?", a: "Diamond polishing produces optical-grade clarity — the highest quality edge finish available. Flame polishing provides a glossy finish that is faster and more economical for production volumes." },
              { q: "Can all edges be diamond polished?", a: "Straight external edges polish best. Internal corners, sharp angles and complex profiles may have limitations. Our engineers can advise on achievable results for your specific design." },
              { q: "Which acrylic grade polishes best?", a: "Cast acrylic produces superior diamond polishing results due to its material hardness and optical properties. Extruded acrylic can be polished but may not achieve the same clarity." },
              { q: "Does polishing affect part dimensions?", a: "Diamond polishing removes an extremely thin surface layer with negligible impact on dimensions. For tight-tolerance parts, our process accounts for material removal in the cutting stage." },
              { q: "How long does polishing add to lead time?", a: "Typically 3–5 additional business days depending on the number of edges and quantity. For large orders, we allocate dedicated polishing stations to maintain schedule." },
              { q: "Can you polish complex shapes?", a: "Straight edges and gentle external curves are ideal. Sharp internal corners and intricate profiles are better suited to flame polishing or alternative finishing methods." },
              { q: "Is diamond polishing worth the cost?", a: "For luxury displays, awards, architectural features and premium retail products where edge appearance directly impacts perceived value — absolutely. It is the gold standard for edge finishing." },
              { q: "How do I start my project?", a: "Send your design with edge finish requirements clearly marked. Our engineering team will recommend the optimal polishing approach and provide a quotation within 24 hours." },
            ].map((faq, i) => (
              <details key={i} className="group rounded-xl border border-gray-200 bg-white [&_summary::-webkit-details-marker]:hidden">
                <summary className="cursor-pointer px-5 py-4 text-sm font-semibold text-[#0F2744] list-none flex items-start justify-between gap-3"><span>{faq.q}</span><span className="shrink-0 text-gray-400 group-open:hidden text-lg leading-none mt-0.5">+</span><span className="shrink-0 text-gray-400 hidden group-open:block text-lg leading-none mt-0.5">−</span></summary>
                <p className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* ========== FINAL CTA SECTION ========== */}
      <section className="bg-white" aria-labelledby="dp-cta-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]"><h2 id="dp-cta-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Ready to Discuss Your Project?</h2><p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">Whether you already have detailed drawings or just an initial concept, our engineering team is ready to help you evaluate your project and recommend the most suitable manufacturing solution.</p></div>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              {[
                { icon: Cog, title: "Engineering Review", desc: "Your design reviewed by experienced engineers for manufacturability and cost optimization." },
                { icon: Layers, title: "Material Recommendation", desc: "Expert guidance on material selection based on your application and performance requirements." },
                { icon: FlaskConical, title: "Prototype Support", desc: "Prototyping and sampling available to validate your design before full production." },
                { icon: Globe, title: "Worldwide Delivery", desc: "Export-ready packaging and international logistics to over 30 countries." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm"><div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center"><item.icon className="h-5 w-5 text-[#0F2744]" aria-hidden="true" /></div><div><h3 className="text-sm font-semibold text-[#0F2744]">{item.title}</h3><p className="mt-0.5 text-sm text-gray-500 leading-relaxed">{item.desc}</p></div></div>
              ))}
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-[#0F2744] to-[#1a3a5c] p-8 text-white flex flex-col justify-center">
              <h3 className="text-xl font-bold">Start Your Project Today</h3>
              <p className="mt-3 text-blue-200 leading-relaxed text-sm">Send us your drawings or project brief. Our team will review your requirements and respond with a detailed quotation and manufacturing recommendations.</p>
              <div className="mt-6 flex flex-col gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F2744]">Request a Quote<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-transparent px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F2744]"><Upload className="h-4 w-4" aria-hidden="true" />Upload Your Drawing</Link>
              </div>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-gray-400">Our team typically responds within one business day.</p>
        </Container>
      </section>
    </>
  );
}
