export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import Link from "next/link";
import { getSettings } from "@/lib/data-store";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import {
  ArrowRight, Upload, Cog, Wrench, ShieldCheck, Globe,
  Box, Package, Puzzle, ClipboardCheck, Truck, Hammer, AlertTriangle,
  Layers, Star,
  FileText, Ruler, ScanEye, MessageSquare, XCircle, ClipboardList, Check, FlaskConical,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Acrylic Assembly & Packaging | Max Custom Acrylics",
  description:
    "Complete product assembly including hardware integration, bonding, quality inspection and export-ready packaging. Finished goods delivered ready for retail or end use.",
};

export default async function AssemblyPage() {
  const s = await getSettings();
  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section className="relative bg-gradient-to-br from-[#0F2744] via-[#1E3A5F] to-[#0F2744] overflow-hidden" aria-labelledby="bonding-assembly-hero-heading">
        <div className="absolute inset-0 opacity-5"><div className="grid grid-cols-6 gap-2 h-full p-8">{[...Array(18)].map((_,i)=>(<div key={i} className="bg-blue-400 rounded-full" />))}</div></div>
        <Container className="relative py-20 lg:py-28 text-center">
          <Breadcrumb items={[{ label: "Home", href: "/" },{ label: "Professional Acrylic" }]} />
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-blue-300 tracking-wide mt-6">Complete Assembly & Export Packaging</span>
          <h1 id="bonding-assembly-hero-heading" className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[56px] lg:leading-tight">Professional Acrylic Assembly & Packaging</h1>
          <p className="mt-5 text-base text-blue-200 leading-relaxed sm:text-lg max-w-[640px] mx-auto">Complete product assembly including hardware integration, bonding, quality inspection and export-ready packaging — finished goods delivered to your door.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center" role="group" aria-label="Call to action buttons">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F2744]">Request a Quote <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-transparent px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"><Upload className="h-4 w-4" aria-hidden="true" /> Upload Your Drawing</Link>
          </div>
        </Container>
      </section>

      {/* ========== WHEN TO CHOOSE SECTION ========== */}
      <section className="bg-gray-50" aria-labelledby="assembly-when-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]">
            <h2 id="assembly-when-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">
              When Should You Choose Full Assembly & Packaging?
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">
              Professional assembly and packaging transforms individual acrylic components into finished products ready for retail, distribution or end-use — saving you time and coordination effort.
            </p>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-[7fr_5fr]">
            <div>
              <h3 className="text-xl font-semibold text-[#0F2744]">Best Applications</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Puzzle, title: "Multi-Component Products", desc: "Complex assemblies combining multiple acrylic parts into one finished product." },
                  { icon: Hammer, title: "Hardware Integration", desc: "Hinges, locks, standoffs, threaded inserts and mounting hardware." },
                  { icon: Box, title: "Display Cases & Boxes", desc: "Crystal-clear bonded display cases with seamless joints." },
                  { icon: Package, title: "Retail-Ready Packaging", desc: "Individual packaging, branded boxes and barcode labeling." },
                  { icon: ClipboardCheck, title: "Final Quality Inspection", desc: "Documented inspection before shipment to ensure flawless products." },
                  { icon: Truck, title: "Export-Ready Crating", desc: "Custom foam inserts and wooden crates for international shipping." },
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
                  { title: "Single-Component Orders", desc: "Assembly services may not be needed for individual parts." },
                  { title: "Self-Assembly Planned", desc: "If your team handles assembly, we can supply components only." },
                  { title: "Local Delivery", desc: "Standard packaging may be sufficient for local transportation." },
                  { title: "Simple Bonding Only", desc: "Solvent bonding alone may suffice without full assembly service." },
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
            <h3 className="text-xl font-bold text-[#0F2744] sm:text-2xl">Not sure what level of assembly you need?</h3>
            <p className="mt-2 text-gray-500 max-w-lg mx-auto leading-relaxed">
              Our engineering team can review your product design and recommend the optimal assembly and packaging approach based on your requirements.
            </p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2">
              <Upload className="h-4 w-4" aria-hidden="true" /> Upload Your Drawing
            </Link>
          </div>
        </Container>
      </section>

      {/* ========== MATERIAL COMPATIBILITY SECTION ========== */}
      <section className="bg-gray-50" aria-labelledby="assembly-materials-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]">
            <h2 id="assembly-materials-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Material Compatibility</h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">Choosing the appropriate material is essential for achieving the desired appearance, durability and manufacturing performance. Our engineering team can recommend suitable materials based on your application.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: s.mat1Name || "Cast Acrylic", rating: Number(s.mat1Rating) || 5, badge: s.mat1Badge || "Excellent", color: "from-blue-100 to-blue-50", bestFor: (s.mat1BestFor || "Luxury displays, Signage, Display cases").split(",").map((t) => t.trim()), desc: s.mat1Desc || "Premium optical clarity with superior surface hardness.", slug: "cast-acrylic" },
              { name: s.mat2Name || "Extruded Acrylic", rating: Number(s.mat2Rating) || 4, badge: s.mat2Badge || "Very Good", color: "from-sky-100 to-sky-50", bestFor: (s.mat2BestFor || "General fabrication, Retail displays").split(",").map((t) => t.trim()), desc: s.mat2Desc || "Consistent thickness with good optical properties.", slug: "extruded-acrylic" },
              { name: s.mat3Name || "PETG", rating: Number(s.mat3Rating) || 4, badge: s.mat3Badge || "Very Good", color: "from-emerald-100 to-emerald-50", bestFor: (s.mat3BestFor || "Protective panels, Medical applications").split(",").map((t) => t.trim()), desc: s.mat3Desc || "Excellent impact resistance with good clarity.", slug: "petg" },
              { name: s.mat4Name || "Polycarbonate", rating: Number(s.mat4Rating) || 3, badge: s.mat4Badge || "Moderate", color: "from-amber-100 to-amber-50", bestFor: (s.mat4BestFor || "Impact-resistant components, Industrial guards").split(",").map((t) => t.trim()), desc: s.mat4Desc || "Maximum impact strength and heat resistance.", slug: "polycarbonate" },
              { name: s.mat5Name || "PVC Foam Board", rating: Number(s.mat5Rating) || 3, badge: s.mat5Badge || "Moderate", color: "from-purple-100 to-purple-50", bestFor: (s.mat5BestFor || "Indoor signage, Exhibitions").split(",").map((t) => t.trim()), desc: s.mat5Desc || "Lightweight, cost-effective substrate.", slug: "pvc-foam-board" },
              { name: s.mat6Name || "ABS", rating: Number(s.mat6Rating) || 2, badge: s.mat6Badge || "Limited", color: "from-rose-100 to-rose-50", bestFor: (s.mat6BestFor || "Functional engineering parts").split(",").map((t) => t.trim()), desc: s.mat6Desc || "Tough, rigid engineering plastic.", slug: "abs" },
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
      <section className="bg-white" aria-labelledby="assembly-design-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]">
            <h2 id="assembly-design-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Design Guidelines for Better Assembly Results</h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">Following good design practices helps streamline assembly, improve product quality and reduce production costs.</p>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
            <div className="space-y-4">
              {[
                { icon: FileText, title: "Design for Assembly", desc: "Include alignment features such as slots, tabs and registration edges. Self-locating parts reduce assembly time and improve consistency across production runs." },
                { icon: Ruler, title: "Specify Hardware Requirements", desc: "Define screw types, threaded insert specifications and standoff sizes. Clear hardware specifications ensure correct procurement and trouble-free integration." },
                { icon: ScanEye, title: "Consider Packaging Early", desc: "Design with shipping and handling in mind. Products with fragile projections or sharp corners may need custom foam inserts or reinforced packaging." },
                { icon: Puzzle, title: "Plan Quality Checkpoints", desc: "Define inspection points and acceptance criteria for each assembly stage. In-process checks catch issues before they affect downstream operations." },
                { icon: MessageSquare, title: "Consult Engineering Early", desc: "Early design review can optimize assembly sequence and reduce labor cost. Our engineers can recommend joining methods and hardware for your product." },
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
                    <rect x="20" y="30" width="160" height="200" rx="4" stroke="#cbd5e1" strokeWidth="1" />
                    <rect x="50" y="60" width="100" height="60" rx="2" stroke="#0F2744" strokeWidth="1.2" />
                    <rect x="45" y="130" width="110" height="4" rx="1" stroke="#0F2744" strokeWidth="1" fill="#f1f5f9" />
                    <rect x="60" y="145" width="15" height="25" rx="1" stroke="#0F2744" strokeWidth="0.8" />
                    <rect x="125" y="155" width="18" height="6" rx="1" stroke="#0F2744" strokeWidth="0.8" />
                    <line x1="45" y1="125" x2="58" y2="125" stroke="#94a3b8" strokeWidth="0.5" />
                    <circle cx="100" cy="180" r="8" stroke="#64748b" strokeWidth="0.8" fill="#f8fafc" />
                    <circle cx="100" cy="180" r="2" stroke="#64748b" strokeWidth="1" fill="none" />
                  </svg>
                </div>
                <div className="px-6 pb-6 text-center"><p className="text-xs text-gray-400">Recommended: include assembly sequence and hardware specifications</p></div>
              </div>
            </div>
          </div>
          <div className="mt-12 rounded-2xl border border-blue-200 bg-blue-50/60 p-8 md:p-10 text-center">
            <h3 className="text-xl font-bold text-[#0F2744] sm:text-2xl">Need help reviewing your design?</h3>
            <p className="mt-2 text-gray-500 max-w-lg mx-auto leading-relaxed">Our engineering team can review your product design and recommend the optimal assembly and packaging approach.</p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2"><Upload className="h-4 w-4" aria-hidden="true" /> Upload Your Drawing</Link>
          </div>
        </Container>
      </section>

      {/* ========== COMMON DESIGN MISTAKES SECTION ========== */}
      <section className="bg-gray-50" aria-labelledby="assembly-mistakes-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]"><h2 id="assembly-mistakes-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Common Design Mistakes to Avoid</h2><p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">Understanding common assembly issues helps streamline production, reduce labor costs and improve final product quality.</p></div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "No Alignment Features", desc: "Parts without guides or registration features are harder to assemble consistently. Include slots, tabs or alignment marks to ensure accurate, repeatable assembly." },
              { title: "Overlooking Bond Strength", desc: "Joint designs must account for load requirements. Solvent-bonded joints achieve approximately 80% of base material strength — verify this is adequate for your application." },
              { title: "Mixed Material Compatibility", desc: "Some adhesives and solvents do not work with certain materials. Confirm bonding compatibility when combining acrylic with PETG, polycarbonate or other substrates." },
              { title: "Inadequate Packaging Protection", desc: "Insufficient protection leads to shipping damage. Design packaging requirements alongside product design to ensure finished goods arrive in perfect condition." },
              { title: "Missing Hardware Specifications", desc: "Unspecified hardware causes procurement delays. Define screw types, thread sizes, insert specifications and finish requirements early in the design process." },
              { title: "Skipping Engineering Review", desc: "Early review streamlines assembly sequence and reduces labor cost. Our engineers can recommend optimal joining methods and hardware for your specific product." },
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
      <section className="bg-gray-50" aria-labelledby="assembly-files-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]"><h2 id="assembly-files-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Preparing Your Files for Assembly & Packaging</h2><p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">Providing complete assembly documentation helps speed up engineering review and ensures accurate quotation.</p></div>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6"><div className="flex items-center gap-2 mb-5"><FileText className="h-5 w-5 text-[#0F2744]" aria-hidden="true" /><h3 className="text-lg font-semibold text-[#0F2744]">Accepted File Formats</h3></div><div className="grid grid-cols-3 gap-3">{["PDF", "DXF", "DWG", "STEP", "IGES", "AI"].map((fmt) => (<div key={fmt} className="flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-[#0F2744]">{fmt}</div>))}</div></div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6"><div className="flex items-center gap-2 mb-5"><ClipboardList className="h-5 w-5 text-[#0F2744]" aria-hidden="true" /><h3 className="text-lg font-semibold text-[#0F2744]">Drawing Checklist</h3></div><ul className="space-y-3">{["Include exploded assembly view.","Specify hardware types and quantities.","Define bonding areas and joint types.","Indicate assembly sequence or steps.","Mark QC inspection points.","Include packaging requirements and constraints."].map((item) => (<li key={item} className="flex items-start gap-2.5 text-sm text-gray-500"><Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />{item}</li>))}</ul></div>
          </div>
          <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50/60 p-8 md:p-10 text-center"><h3 className="text-xl font-bold text-[#0F2744] sm:text-2xl">Need help preparing your files?</h3><p className="mt-2 text-gray-500 max-w-lg mx-auto leading-relaxed">Our engineering team can review your assembly documentation and recommend the optimal approach.</p><Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2"><Upload className="h-4 w-4" aria-hidden="true" /> Upload Your Drawing</Link></div>
        </Container>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section className="py-16 lg:py-24 bg-gray-50" aria-labelledby="assembly-faq-heading">
        <Container>
          <div className="text-center mb-12"><h2 id="assembly-faq-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Frequently Asked Questions</h2><p className="mt-3 text-gray-500 max-w-2xl mx-auto leading-relaxed">Find answers to common questions about acrylic assembly, hardware integration and export packaging.</p></div>
          <div className="max-w-4xl mx-auto grid gap-4 sm:grid-cols-2">
            {[
              { q: "What types of hardware can you integrate?", a: "We integrate hinges, locks, handles, standoffs, threaded inserts and custom hardware. We can also source specialty hardware based on your requirements." },
              { q: "How strong are solvent-bonded joints?", a: "Solvent-bonded joints achieve approximately 80% of the base material strength. For most display and enclosure applications, this is more than sufficient." },
              { q: "Will the bond line be visible?", a: "When done correctly by our experienced technicians, solvent-bonded joints are completely transparent with no visible bond line — a key advantage over adhesive-based joining." },
              { q: "Can you package for retail?", a: "Yes. We offer branded retail boxes, barcode labeling, individual polybagging and custom foam inserts. Products arrive ready for retail display or distribution." },
              { q: "Do you offer export crating?", a: "Yes. Custom foam inserts and wooden crates are available for international shipping. Packaging is designed based on product fragility, shipping method and destination." },
              { q: "What's the minimum order for assembly?", a: "No strict minimum. We handle single prototypes to mass production. Assembly pricing becomes more economical at higher quantities." },
              { q: "Can you source hardware for us?", a: "Yes. We can procure standard and specialty hardware including hinges, locks, threaded inserts and mounting brackets to your specifications." },
              { q: "How do I start my project?", a: "Send your assembly drawings with hardware specifications. Our engineering team will review your requirements and provide a quotation within 24 hours." },
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
      <section className="bg-white" aria-labelledby="assembly-cta-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]"><h2 id="assembly-cta-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Ready to Discuss Your Project?</h2><p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">Whether you already have detailed drawings or just an initial concept, our engineering team is ready to help you evaluate your project and recommend the most suitable manufacturing solution.</p></div>
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
