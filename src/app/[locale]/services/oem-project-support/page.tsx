import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import {
  ArrowRight, Upload, Cog, Wrench, ShieldCheck, Globe,
  FileCheck, Search, ClipboardList, BarChart3, MessageSquare, Users, AlertTriangle,
  Layers, Star,
  FileText, Ruler, ScanEye, Puzzle, XCircle, Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Acrylic Quality Control & Project Support | Max Custom Acrylics",
  description:
    "Multi-stage inspection throughout production with documented reports — incoming materials, in-process checks and final QC. Engineering support for custom acrylic projects.",
};

export default function QualityControlPage() {
  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section className="relative bg-white overflow-hidden" aria-labelledby="qc-hero-heading">
        <Container className="py-14 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center min-h-[520px] lg:min-h-[560px]">
            <div>
              <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Quality Control" }]} />
              <h1 id="qc-hero-heading" className="mt-4 text-4xl font-bold tracking-tight text-[#0F2744] sm:text-5xl lg:text-[56px] lg:leading-tight">
                Acrylic Quality Control & Project Support
              </h1>
              <p className="mt-5 text-base text-gray-500 leading-relaxed sm:text-lg max-w-[620px]">
                Multi-stage inspection throughout production with documented reports so you know exactly what you are receiving — from incoming materials to pre-shipment approval.
              </p>
              <p className="mt-3 text-base text-gray-500 leading-relaxed sm:text-lg max-w-[620px]">
                Our engineering team manages quality at every stage of your custom acrylic project, providing documented inspection, photo reports and professional communication throughout the process.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3" role="group" aria-label="Call to action buttons">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2" aria-label="Request a quote for quality controlled acrylic products">
                  Request a Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#0F2744] bg-white px-6 py-3.5 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2" aria-label="Upload your drawing for project support quotation">
                  <Upload className="h-4 w-4" aria-hidden="true" /> Upload Your Drawing
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 sm:flex sm:flex-wrap sm:gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-1.5"><Cog className="h-4 w-4 text-gray-400 flex-shrink-0" aria-hidden="true" /> Engineering Review</span>
                <span className="flex items-center gap-1.5"><Wrench className="h-4 w-4 text-gray-400 flex-shrink-0" aria-hidden="true" /> Custom Manufacturing</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-gray-400 flex-shrink-0" aria-hidden="true" /> Quality Inspection</span>
                <span className="flex items-center gap-1.5"><Globe className="h-4 w-4 text-gray-400 flex-shrink-0" aria-hidden="true" /> Worldwide Delivery</span>
              </div>
            </div>
            <div className="relative" aria-hidden="true">
              <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 via-gray-50 to-blue-100 flex items-center justify-center">
                <div className="text-center select-none">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/80 shadow-sm mb-4">
                    <svg className="w-10 h-10 text-[#0F2744]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-400 tracking-wide uppercase">Multi-Stage Quality Control</p>
                </div>
              </div>
              <span className="sr-only">Quality control and project support for custom acrylic products with documented inspection reports</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ========== WHEN TO CHOOSE SECTION ========== */}
      <section className="bg-gray-50" aria-labelledby="qc-when-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]">
            <h2 id="qc-when-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">
              When Should You Invest in Quality Control & Project Support?
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">
              Multi-stage quality control and dedicated project support provide confidence that your custom acrylic products meet specifications before they ship — especially valuable for complex projects and brand-critical applications.
            </p>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-[7fr_5fr]">
            <div>
              <h3 className="text-xl font-semibold text-[#0F2744]">Best Applications</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: ClipboardList, title: "New Product Development", desc: "Engineering review and prototyping support to get your design production-ready." },
                  { icon: Search, title: "Critical Tolerance Parts", desc: "Documented measurement reports for parts with tight dimensional requirements." },
                  { icon: FileCheck, title: "Export & Overseas Orders", desc: "Pre-shipment inspection and photo reports before products leave the facility." },
                  { icon: MessageSquare, title: "Brand-Critical Products", desc: "Consistent quality across production for brand-sensitive applications." },
                  { icon: BarChart3, title: "Ongoing Supply Programs", desc: "Reliable repeat production with documented consistency across batches." },
                  { icon: Users, title: "Complex Multi-Process Projects", desc: "Single-point coordination across multiple manufacturing processes." },
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
                  { title: "Simple Standard Parts", desc: "Basic quality checks may be sufficient for commodity components." },
                  { title: "Informal QC Is Acceptable", desc: "In-house inspection may be adequate for non-critical applications." },
                  { title: "Single Prototype Orders", desc: "Full QC documentation may not be needed for concept samples." },
                  { title: "Direct Supplier Relationship", desc: "You may already have established quality protocols with your supplier." },
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
            <h3 className="text-xl font-bold text-[#0F2744] sm:text-2xl">Not sure what level of quality control your project needs?</h3>
            <p className="mt-2 text-gray-500 max-w-lg mx-auto leading-relaxed">
              Our engineering team can recommend the most appropriate quality assurance plan based on your product requirements, target market and budget.
            </p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2">
              <Upload className="h-4 w-4" aria-hidden="true" /> Upload Your Drawing
            </Link>
          </div>
        </Container>
      </section>

      {/* ========== MATERIAL COMPATIBILITY SECTION ========== */}
      <section className="bg-gray-50" aria-labelledby="qc-materials-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]">
            <h2 id="qc-materials-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Material Compatibility</h2>
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
                  <Link href={`/materials/${mat.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#0F2744] hover:text-blue-700 transition-colors">Learn More<ArrowRight className="h-3.5 w-3.5" aria-hidden="true" /></Link>
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
      <section className="bg-white" aria-labelledby="qc-design-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]">
            <h2 id="qc-design-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Design Guidelines for Better Quality Control Results</h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">Clear quality specifications and documentation requirements help ensure your products meet expectations before they ship.</p>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
            <div className="space-y-4">
              {[
                { icon: FileText, title: "Define Acceptance Criteria", desc: "Specify critical dimensions, surface quality requirements and allowable tolerances. Clear criteria enable consistent inspection and reduce ambiguity in quality decisions." },
                { icon: Ruler, title: "Document Inspection Points", desc: "Identify key stages for in-process and final inspection. Early-stage checks catch issues before value-added processing, reducing waste and rework." },
                { icon: ScanEye, title: "Provide Reference Samples", desc: "Approved physical samples serve as quality benchmarks. Reference samples help align expectations and provide a tangible standard for production batches." },
                { icon: Puzzle, title: "Plan for Documentation Needs", desc: "Specify report format, photo documentation and measurement data requirements. Structured documentation supports traceability and quality assurance processes." },
                { icon: MessageSquare, title: "Consult Engineering Early", desc: "Early QC planning reduces rejection rates and helps establish realistic quality targets aligned with your product positioning and budget." },
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
                    <path d="M55 55 L75 70 L95 60" stroke="#22c55e" strokeWidth="1.2" fill="none" />
                    <circle cx="95" cy="60" r="3" stroke="#22c55e" strokeWidth="1" fill="none" />
                    <line x1="55" y1="105" x2="145" y2="105" stroke="#94a3b8" strokeWidth="0.5" />
                    <rect x="50" y="120" width="100" height="50" rx="2" stroke="#94a3b8" strokeWidth="0.8" fill="#f8fafc" />
                    <line x1="60" y1="133" x2="140" y2="133" stroke="#94a3b8" strokeWidth="0.4" />
                    <line x1="60" y1="146" x2="140" y2="146" stroke="#94a3b8" strokeWidth="0.4" />
                    <line x1="60" y1="159" x2="120" y2="159" stroke="#94a3b8" strokeWidth="0.4" />
                  </svg>
                </div>
                <div className="px-6 pb-6 text-center"><p className="text-xs text-gray-400">Recommended: provide acceptance criteria and reference samples</p></div>
              </div>
            </div>
          </div>
          <div className="mt-12 rounded-2xl border border-blue-200 bg-blue-50/60 p-8 md:p-10 text-center">
            <h3 className="text-xl font-bold text-[#0F2744] sm:text-2xl">Need help setting quality standards?</h3>
            <p className="mt-2 text-gray-500 max-w-lg mx-auto leading-relaxed">Our engineering team can help define appropriate quality criteria and inspection plans for your custom acrylic products.</p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2"><Upload className="h-4 w-4" aria-hidden="true" /> Upload Your Drawing</Link>
          </div>
        </Container>
      </section>

      {/* ========== COMMON DESIGN MISTAKES SECTION ========== */}
      <section className="bg-gray-50" aria-labelledby="qc-mistakes-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]"><h2 id="qc-mistakes-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Common Design Mistakes to Avoid</h2><p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">Understanding common quality issues helps establish effective inspection processes and ensure products meet expectations.</p></div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Vague Acceptance Criteria", desc: "\"Good quality\" is not a measurable standard. Define specific, measurable acceptance criteria for critical dimensions, surface quality and functional requirements." },
              { title: "No Inspection Documentation", desc: "Without records, quality trends cannot be tracked. Structured documentation supports traceability and helps identify systematic issues before they affect entire production runs." },
              { title: "Skipping In-Process Checks", desc: "Waiting until final QC catches issues too late. Implement inspection points at key production stages when corrections are still cost-effective and feasible." },
              { title: "No Reference Samples", desc: "Without physical benchmarks, quality judgments become subjective. Approved reference samples provide a tangible standard that aligns expectations across teams." },
              { title: "Inconsistent Measurement Methods", desc: "Different tools and techniques produce different results. Standardize measurement equipment and methods to ensure consistent, comparable quality data." },
              { title: "Skipping Engineering Review", desc: "Early QC planning prevents systematic issues and reduces rejection rates. Our engineers can help establish appropriate quality protocols for your project." },
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

      {/* ========== TYPICAL APPLICATIONS SECTION ========== */}
      <section className="bg-white" aria-labelledby="qc-applications-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]"><h2 id="qc-applications-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Typical Applications of Quality Control & Project Support</h2><p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">Multi-stage quality control and dedicated project support provide confidence that custom acrylic products meet specifications before shipping.</p></div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "New Product Development", desc: "Engineering review and prototyping support to get your design production-ready with documented quality checkpoints.", materials: "Cast Acrylic", color: "from-blue-100 to-blue-50", icon: "🔬" },
              { title: "Brand-Critical Products", desc: "Consistent quality across production for brand-sensitive applications requiring precise color, finish and dimensional accuracy.", materials: "Cast Acrylic", color: "from-amber-100 to-amber-50", icon: "✨" },
              { title: "Export Orders", desc: "Pre-shipment inspection and photo reports before products leave the facility for international delivery and customs clearance.", materials: "Cast Acrylic, PETG", color: "from-emerald-100 to-emerald-50", icon: "🚢" },
              { title: "Medical Components", desc: "Documented measurement reports for medical device housings and healthcare components with regulatory compliance requirements.", materials: "PETG, Polycarbonate", color: "from-teal-100 to-teal-50", icon: "🏥" },
              { title: "Architectural Projects", desc: "Multi-stage QC for large-scale architectural acrylic installations requiring consistent quality across multiple production batches.", materials: "Cast Acrylic", color: "from-sky-100 to-sky-50", icon: "🏗" },
              { title: "Repeat Production Runs", desc: "Documented batch consistency for ongoing supply programs. Statistical process monitoring across production runs.", materials: "Extruded Acrylic", color: "from-indigo-100 to-indigo-50", icon: "🔄" },
              { title: "High-Value Display Products", desc: "Multi-stage inspection for luxury displays where every unit must meet exacting appearance and dimensional standards.", materials: "Cast Acrylic", color: "from-purple-100 to-purple-50", icon: "💎" },
              { title: "Tight-Tolerance Parts", desc: "Measurement reports for components with critical dimensional requirements and functional assembly tolerances.", materials: "Cast Acrylic, ABS", color: "from-slate-100 to-slate-50", icon: "📏" },
            ].map((item) => (
              <div key={item.title} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className={`aspect-[16/10] bg-gradient-to-br ${item.color} flex items-center justify-center`}><span className="text-4xl select-none">{item.icon}</span></div>
                <div className="p-4 flex flex-col flex-1"><h3 className="text-sm font-semibold text-[#0F2744]">{item.title}</h3><p className="mt-1.5 text-sm text-gray-500 leading-relaxed flex-1">{item.desc}</p><span className="mt-3 inline-block text-xs text-gray-400"><span className="font-medium text-gray-500">Typical Materials:</span> {item.materials}</span><Link href="/contact" className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[#0F2744] hover:text-blue-700 transition-colors">Learn More <ArrowRight className="h-3 w-3" aria-hidden="true" /></Link></div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========== FILE PREPARATION GUIDE SECTION ========== */}
      <section className="bg-gray-50" aria-labelledby="qc-files-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]"><h2 id="qc-files-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Preparing Your Quality Control Documentation</h2><p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">Providing clear quality specifications helps establish inspection protocols and ensures products meet your expectations.</p></div>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6"><div className="flex items-center gap-2 mb-5"><FileText className="h-5 w-5 text-[#0F2744]" aria-hidden="true" /><h3 className="text-lg font-semibold text-[#0F2744]">Accepted Document Formats</h3></div><div className="grid grid-cols-3 gap-3">{["PDF", "XLSX", "DOCX", "DXF", "STEP", "IGES"].map((fmt) => (<div key={fmt} className="flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-[#0F2744]">{fmt}</div>))}</div></div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6"><div className="flex items-center gap-2 mb-5"><ClipboardList className="h-5 w-5 text-[#0F2744]" aria-hidden="true" /><h3 className="text-lg font-semibold text-[#0F2744]">Documentation Checklist</h3></div><ul className="space-y-3">{["Define acceptance criteria per dimension.","List critical dimensions with tolerances.","Include reference photos or samples.","Specify surface quality requirements.","Define sampling plan and AQL levels.","Provide testing requirements if applicable."].map((item) => (<li key={item} className="flex items-start gap-2.5 text-sm text-gray-500"><Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />{item}</li>))}</ul></div>
          </div>
          <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50/60 p-8 md:p-10 text-center"><h3 className="text-xl font-bold text-[#0F2744] sm:text-2xl">Need help setting quality standards?</h3><p className="mt-2 text-gray-500 max-w-lg mx-auto leading-relaxed">Our engineering team can help define appropriate QC documentation for your custom acrylic products.</p><Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2"><Upload className="h-4 w-4" aria-hidden="true" /> Upload Your Drawing</Link></div>
        </Container>
      </section>
    </>
  );
}
