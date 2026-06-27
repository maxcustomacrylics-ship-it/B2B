import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import {
  ArrowRight, Upload, Cog, Wrench, ShieldCheck, Globe,
  Cuboid, Drill, Layers, Ruler, Sliders, Repeat, AlertTriangle,
  PenTool, Sparkles, Timer, FlaskConical, Pen, Box, Target,
  Check, Minus, Star,
  FileText, ScanEye, Puzzle, MessageSquare, XCircle, ClipboardList,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Precision CNC Acrylic Machining Services | Max Custom Acrylics",
  description:
    "Multi-axis CNC machining for 3D acrylic parts — contouring, beveling, drilling, tapping. Engineering review, quality inspection, worldwide delivery.",
};

export default function CncMachiningPage() {
  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section className="relative bg-white overflow-hidden" aria-labelledby="cnc-hero-heading">
        <Container className="py-14 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center min-h-[520px] lg:min-h-[560px]">
            <div>
              <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "CNC Machining" }]} />
              <h1 id="cnc-hero-heading" className="mt-4 text-4xl font-bold tracking-tight text-[#0F2744] sm:text-5xl lg:text-[56px] lg:leading-tight">
                Precision CNC Acrylic Machining Services
              </h1>
              <p className="mt-5 text-base text-gray-500 leading-relaxed sm:text-lg max-w-[620px]">
                Multi-axis CNC routing for 3D acrylic parts including beveled edges, threaded holes and contoured surfaces for structural and industrial applications.
              </p>
              <p className="mt-3 text-base text-gray-500 leading-relaxed sm:text-lg max-w-[620px]">
                Our engineering team reviews every project and coordinates the most suitable manufacturing process to deliver accurate, production-ready acrylic components with consistent quality and worldwide delivery support.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3" role="group" aria-label="Call to action buttons">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2" aria-label="Request a quote for custom acrylic CNC machining">
                  Request a Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#0F2744] bg-white px-6 py-3.5 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2" aria-label="Upload your drawing for CNC machining quotation">
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
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="2" /><circle cx="15.5" cy="8.5" r="2" />
                      <circle cx="8.5" cy="15.5" r="2" /><circle cx="15.5" cy="15.5" r="2" />
                      <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-400 tracking-wide uppercase">Precision CNC Acrylic Machining</p>
                </div>
              </div>
              <span className="sr-only">CNC machining service for precision acrylic components with 3D contouring and threaded features</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ========== WHEN TO CHOOSE SECTION ========== */}
      <section className="bg-gray-50" aria-labelledby="cnc-when-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]">
            <h2 id="cnc-when-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">
              When Should You Choose CNC Machining?
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">
              CNC machining handles complex 3D acrylic fabrication that goes beyond flat sheet cutting. Selecting the right process depends on your part geometry, features and precision requirements.
            </p>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-[7fr_5fr]">
            <div>
              <h3 className="text-xl font-semibold text-[#0F2744]">Best Applications</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Cuboid, title: "3D Contouring", desc: "Create angled edges, pockets, channels and multi-level surfaces." },
                  { icon: Ruler, title: "Beveled & V-Groove Edges", desc: "Precision angled edges for display stands and architectural panels." },
                  { icon: Drill, title: "Drilling & Tapping", desc: "Threaded holes for screws, standoffs and hardware assembly." },
                  { icon: Layers, title: "Thick Material Processing", desc: "Machine acrylic up to 50mm thickness with precision." },
                  { icon: Sliders, title: "Mechanical Features", desc: "Slots, recesses, snap-fits and precise mounting points." },
                  { icon: Repeat, title: "Consistent Batch Quality", desc: "CNC programs ensure identical parts across production runs." },
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
                  { title: "Simple 2D Profiles", desc: "Laser cutting may be faster and more economical." },
                  { title: "Flame-Polished Edges Needed", desc: "Laser cutting produces polished edges directly." },
                  { title: "Very Thin Material", desc: "Laser cutting handles thin sheets with less material stress." },
                  { title: "Tighter Lead Time Required", desc: "Laser cutting typically offers shorter turnaround." },
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
            <h3 className="text-xl font-bold text-[#0F2744] sm:text-2xl">Not sure which process is right?</h3>
            <p className="mt-2 text-gray-500 max-w-lg mx-auto leading-relaxed">
              Our engineering team can review your drawings and recommend the most suitable manufacturing process based on your project goals.
            </p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2">
              <Upload className="h-4 w-4" aria-hidden="true" /> Upload Your Drawing
            </Link>
          </div>
        </Container>
      </section>

      {/* ========== COMPARISON SECTION ========== */}
      <section className="bg-white" aria-labelledby="cnc-comparison-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]">
            <h2 id="cnc-comparison-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">
              CNC Machining vs Laser Cutting
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">
              Both CNC machining and laser cutting are widely used for custom
              acrylic fabrication. Choosing the right process depends on your
              design, material and performance requirements.
            </p>
          </div>

          {/* Desktop: Comparison Table */}
          <div className="mt-10 hidden lg:block">
            <div className="rounded-2xl border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-[220px_1fr_1fr] bg-[#0F2744] text-white">
                <div className="px-6 py-4 text-sm font-semibold">Feature</div>
                <div className="px-6 py-4 text-sm font-semibold text-center border-l border-white/20">CNC Machining</div>
                <div className="px-6 py-4 text-sm font-semibold text-center border-l border-white/20">Laser Cutting</div>
              </div>
              {[
                { icon: Layers, label: "Suitable Materials", cnc: "Cast & extruded acrylic, PETG, polycarbonate, PVC, ABS", laser: "Cast & extruded acrylic, PETG, polycarbonate, PVC" },
                { icon: PenTool, label: "Complex Shapes", cnc: "Good for 2D; excels at 3D contours and pockets", laser: "Excellent for intricate 2D profiles and fine details", laserBest: true },
                { icon: Sparkles, label: "Edge Finish", cnc: "Machined finish; may require secondary polishing", laser: "Flame-polished, smooth as-cut finish directly from machine", laserBest: true },
                { icon: Timer, label: "Production Speed", cnc: "Slower initial setup; faster on thick materials", laser: "Fast processing; no physical tooling or setup required", laserBest: true },
                { icon: FlaskConical, label: "Prototype Support", cnc: "Good — requires CAM programming for each design", laser: "Excellent — zero tooling cost, ideal for sampling", laserBest: true },
                { icon: Pen, label: "Engraving Capability", cnc: "Possible with specialized engraving bits and toolpaths", laser: "Excellent — raster and vector engraving built in", laserBest: true },
                { icon: Drill, label: "Deep Machining", cnc: "Excellent — machines acrylic up to 50mm thickness", laser: "Limited to laser-rated material thickness, typically ≤25mm", cncBest: true },
                { icon: Box, label: "3D Features", cnc: "Excellent — beveled edges, pockets, threaded holes, contours", laser: "Not available — 2D profile cutting only", cncBest: true },
                { icon: Target, label: "Typical Applications", cnc: "Structural parts, enclosures, machine guards, threaded assemblies", laser: "Displays, signage, decorative panels, POP, awards" },
              ].map((row, i) => (
                <div key={row.label} className={`grid grid-cols-[220px_1fr_1fr] ${i % 2 === 0 ? "bg-gray-50/50" : "bg-white"}`}>
                  <div className="px-6 py-4 flex items-center gap-3 border-t border-gray-100">
                    <row.icon className="h-4 w-4 text-gray-400 flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm font-medium text-[#0F2744]">{row.label}</span>
                  </div>
                  <div className="px-6 py-4 flex items-center border-t border-l border-gray-100">
                    <div className="flex items-start gap-2 w-full">
                      {row.cncBest ? <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" /> : row.laserBest ? <Minus className="h-4 w-4 text-gray-300 flex-shrink-0 mt-0.5" aria-hidden="true" /> : <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />}
                      <span className="text-sm text-gray-500 leading-relaxed">{row.cnc}</span>
                    </div>
                  </div>
                  <div className="px-6 py-4 flex items-center border-t border-l border-gray-100">
                    <div className="flex items-start gap-2 w-full">
                      {row.laserBest ? <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" /> : row.cncBest ? <Minus className="h-4 w-4 text-gray-300 flex-shrink-0 mt-0.5" aria-hidden="true" /> : <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />}
                      <span className="text-sm text-gray-500 leading-relaxed">{row.laser}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Stacked Cards */}
          <div className="mt-8 lg:hidden space-y-4">
            {[
              { icon: Layers, label: "Suitable Materials", cnc: "Cast & extruded acrylic, PETG, polycarbonate, PVC, ABS", laser: "Cast & extruded acrylic, PETG, polycarbonate, PVC" },
              { icon: PenTool, label: "Complex Shapes", cnc: "Good for 2D; excels at 3D contours and pockets", laser: "Excellent for intricate 2D profiles and fine details", laserBest: true },
              { icon: Sparkles, label: "Edge Finish", cnc: "Machined finish; may require secondary polishing", laser: "Flame-polished, smooth as-cut finish directly from machine", laserBest: true },
              { icon: Timer, label: "Production Speed", cnc: "Slower initial setup; faster on thick materials", laser: "Fast processing; no physical tooling or setup required", laserBest: true },
              { icon: FlaskConical, label: "Prototype Support", cnc: "Good — requires CAM programming for each design", laser: "Excellent — zero tooling cost, ideal for sampling", laserBest: true },
              { icon: Pen, label: "Engraving Capability", cnc: "Possible with specialized engraving bits and toolpaths", laser: "Excellent — raster and vector engraving built in", laserBest: true },
              { icon: Drill, label: "Deep Machining", cnc: "Excellent — machines acrylic up to 50mm thickness", laser: "Limited to laser-rated material thickness, typically ≤25mm", cncBest: true },
              { icon: Box, label: "3D Features", cnc: "Excellent — beveled edges, pockets, threaded holes, contours", laser: "Not available — 2D profile cutting only", cncBest: true },
              { icon: Target, label: "Typical Applications", cnc: "Structural parts, enclosures, machine guards, threaded assemblies", laser: "Displays, signage, decorative panels, POP, awards" },
            ].map((row) => (
              <div key={row.label} className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm">
                <div className="flex items-center gap-2 px-5 py-3 bg-gray-50 border-b border-gray-100">
                  <row.icon className="h-4 w-4 text-gray-400" aria-hidden="true" />
                  <span className="text-sm font-semibold text-[#0F2744]">{row.label}</span>
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-100">
                  <div className="p-4">
                    <span className="text-xs font-semibold text-[#0F2744] uppercase tracking-wide">CNC Machining</span>
                    <p className="mt-1 text-sm text-gray-500 leading-relaxed">{row.cnc}</p>
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-semibold text-[#0F2744] uppercase tracking-wide">Laser Cutting</span>
                    <p className="mt-1 text-sm text-gray-500 leading-relaxed">{row.laser}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Info Box */}
          <div className="mt-12 rounded-2xl border border-blue-200 bg-blue-50/60 p-8 md:p-10">
            <h3 className="text-xl font-bold text-[#0F2744] sm:text-2xl">Which Process Should You Choose?</h3>
            <p className="mt-3 text-gray-500 max-w-3xl leading-relaxed">
              CNC machining is generally preferred for projects requiring deep machining, three-dimensional features or tighter mechanical tolerances, while laser cutting excels at intricate 2D profiles and rapid prototyping.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="/services/laser-cutting" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#0F2744] bg-white px-6 py-3 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2">
                View Laser Cutting <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2">
                Request a Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
      {/* ========== END COMPARISON SECTION ========== */}

      {/* ========== MATERIAL COMPATIBILITY SECTION ========== */}
      <section className="bg-gray-50" aria-labelledby="cnc-materials-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]">
            <h2 id="cnc-materials-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Material Compatibility</h2>
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
      <section className="bg-white" aria-labelledby="cnc-design-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]">
            <h2 id="cnc-design-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Design Guidelines for Better CNC Machining Results</h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">Following good design practices helps improve manufacturing efficiency, part accuracy and overall project success.</p>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
            <div className="space-y-4">
              {[
                { icon: FileText, title: "Use 3D CAD Models", desc: "Preferred formats include STEP, IGES and STL. 3D models enable accurate toolpath generation and help our engineers assess manufacturability before programming." },
                { icon: Ruler, title: "Specify Tolerances", desc: "Define critical dimensions and acceptable tolerance ranges. Clear tolerance specifications help us select appropriate tooling and machining strategies for your parts." },
                { icon: ScanEye, title: "Consider Tool Accessibility", desc: "Design with tool reach and clearance in mind. Deep pockets and narrow channels may require specialized long-reach tooling, impacting cost and lead time." },
                { icon: Puzzle, title: "Plan for Fixturing", desc: "Include features for secure workholding during machining. Tabs, reference edges and mounting holes help maintain part position for consistent accuracy." },
                { icon: MessageSquare, title: "Consult Engineering Early", desc: "Early design review can reduce programming time and production costs. Our engineers can identify potential machining challenges before you finalize your design." },
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
                    <circle cx="80" cy="75" r="6" strokeDasharray="3 2" strokeWidth="0.8" />
                    <circle cx="120" cy="75" r="6" strokeDasharray="3 2" strokeWidth="0.8" />
                    <line x1="50" y1="40" x2="150" y2="40" stroke="#94a3b8" strokeWidth="0.6" />
                    <line x1="50" y1="36" x2="50" y2="44" stroke="#94a3b8" strokeWidth="0.6" />
                    <line x1="150" y1="36" x2="150" y2="44" stroke="#94a3b8" strokeWidth="0.6" />
                    <line x1="40" y1="50" x2="40" y2="130" stroke="#94a3b8" strokeWidth="0.6" />
                    <line x1="36" y1="50" x2="44" y2="50" stroke="#94a3b8" strokeWidth="0.6" />
                    <line x1="36" y1="130" x2="44" y2="130" stroke="#94a3b8" strokeWidth="0.6" />
                    <rect x="65" y="140" width="20" height="20" rx="1" stroke="#0F2744" strokeWidth="0.8" fill="#f1f5f9" />
                    <rect x="65" y="140" width="8" height="20" rx="1" stroke="#0F2744" strokeWidth="1" fill="none" />
                    <rect x="115" y="155" width="30" height="8" rx="1" stroke="#0F2744" strokeWidth="0.8" fill="#f1f5f9" />
                  </svg>
                </div>
                <div className="px-6 pb-6 text-center"><p className="text-xs text-gray-400">Recommended: submit 3D CAD models with tolerance specifications</p></div>
              </div>
            </div>
          </div>
          <div className="mt-12 rounded-2xl border border-blue-200 bg-blue-50/60 p-8 md:p-10 text-center">
            <h3 className="text-xl font-bold text-[#0F2744] sm:text-2xl">Need help reviewing your design?</h3>
            <p className="mt-2 text-gray-500 max-w-lg mx-auto leading-relaxed">Our engineering team can review your CAD files and provide feedback on manufacturability before you commit to production.</p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2"><Upload className="h-4 w-4" aria-hidden="true" /> Upload Your Drawing</Link>
          </div>
        </Container>
      </section>

      {/* ========== COMMON DESIGN MISTAKES SECTION ========== */}
      <section className="bg-gray-50" aria-labelledby="cnc-mistakes-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]"><h2 id="cnc-mistakes-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Common Design Mistakes to Avoid</h2><p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">Understanding common design issues helps reduce revisions, improve machining efficiency and achieve better finished parts.</p></div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Ignoring Tool Radius", desc: "Sharp internal corners require consideration of tool diameter. CNC tools are round — internal corners will have a radius equal to the tool radius unless secondary operations are planned." },
              { title: "Unspecified Tolerances", desc: "Missing tolerance data can lead to fit issues. Without specified tolerances, parts may not assemble correctly. Define critical dimensions and acceptable deviation ranges." },
              { title: "Deep Narrow Pockets", desc: "Tool reach and chip evacuation become challenging in deep, narrow cavities. Design pockets with adequate width-to-depth ratios for clean, efficient machining." },
              { title: "Thin Wall Sections", desc: "Walls too thin may deflect or break during machining. Maintain minimum wall thickness relative to material type and overall part dimensions for structural integrity." },
              { title: "Missing Fixturing Features", desc: "Without workholding provisions, accuracy suffers. Include reference edges, tabs or mounting holes in your design to enable secure, repeatable fixturing." },
              { title: "Skipping Engineering Review", desc: "Early engineering feedback helps avoid costly rework. A quick design review can identify machining challenges and optimize your design for production efficiency." },
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
      <section className="bg-white" aria-labelledby="cnc-applications-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]"><h2 id="cnc-applications-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Typical Applications of CNC Acrylic Machining</h2><p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">CNC machining enables complex 3D acrylic parts with mechanical features that go beyond flat sheet fabrication.</p></div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Display Stands", desc: "Beveled edges, threaded inserts and contoured surfaces for premium retail display stands with integrated assembly features.", materials: "Cast Acrylic", color: "from-blue-100 to-blue-50", icon: "🖥" },
              { title: "Architectural Panels", desc: "Precision-drilled mounting holes and V-groove details for architectural installations requiring accurate fit and finish.", materials: "Cast Acrylic, Extruded Acrylic", color: "from-sky-100 to-sky-50", icon: "🏗" },
              { title: "Machine Guards", desc: "Impact-resistant enclosures with threaded mounting points for industrial equipment safety and operator protection.", materials: "Polycarbonate", color: "from-amber-100 to-amber-50", icon: "⚙️" },
              { title: "Electronic Enclosures", desc: "Custom housings with precise cutouts, vents and mounting bosses for electronic device integration and thermal management.", materials: "ABS, Polycarbonate", color: "from-slate-100 to-slate-50", icon: "🔌" },
              { title: "Medical Equipment", desc: "Precision-machined PETG housings with smooth contours and mounting features for healthcare device applications.", materials: "PETG", color: "from-emerald-100 to-emerald-50", icon: "🏥" },
              { title: "Industrial Components", desc: "Structural parts with threaded holes, pockets and precisely machined mating surfaces for mechanical assemblies.", materials: "Polycarbonate, ABS", color: "from-purple-100 to-purple-50", icon: "🔧" },
              { title: "Structural Brackets", desc: "Load-bearing acrylic components with reinforced geometry and threaded inserts for secure mechanical fastening.", materials: "Cast Acrylic, ABS", color: "from-teal-100 to-teal-50", icon: "📐" },
              { title: "Threaded Assemblies", desc: "Multi-part products with tapped holes, threaded inserts and precision-fit components for reliable mechanical connections.", materials: "Cast Acrylic", color: "from-indigo-100 to-indigo-50", icon: "🔩" },
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
      <section className="bg-gray-50" aria-labelledby="cnc-files-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]"><h2 id="cnc-files-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Preparing Your Files for CNC Machining</h2><p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">Providing complete 3D models and technical drawings helps speed up engineering review and quotation.</p></div>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6"><div className="flex items-center gap-2 mb-5"><FileText className="h-5 w-5 text-[#0F2744]" aria-hidden="true" /><h3 className="text-lg font-semibold text-[#0F2744]">Accepted File Formats</h3></div><div className="grid grid-cols-3 gap-3">{["STEP", "IGES", "STL", "DXF", "DWG", "3DM"].map((fmt) => (<div key={fmt} className="flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-[#0F2744]">{fmt}</div>))}</div></div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6"><div className="flex items-center gap-2 mb-5"><ClipboardList className="h-5 w-5 text-[#0F2744]" aria-hidden="true" /><h3 className="text-lg font-semibold text-[#0F2744]">Drawing Checklist</h3></div><ul className="space-y-3">{["Provide 3D models where possible.","Specify tolerances for critical dimensions.","Include thread specifications and types.","Mark critical surfaces and finish requirements.","Define tool accessibility considerations.","Include material grade and thickness."].map((item) => (<li key={item} className="flex items-start gap-2.5 text-sm text-gray-500"><Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />{item}</li>))}</ul></div>
          </div>
          <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50/60 p-8 md:p-10 text-center"><h3 className="text-xl font-bold text-[#0F2744] sm:text-2xl">Need help preparing your files?</h3><p className="mt-2 text-gray-500 max-w-lg mx-auto leading-relaxed">Our engineering team can review your 3D models and provide feedback before production.</p><Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2"><Upload className="h-4 w-4" aria-hidden="true" /> Upload Your Drawing</Link></div>
        </Container>
      </section>
    </>
  );
}
