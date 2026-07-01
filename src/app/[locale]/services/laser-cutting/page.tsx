import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getSettings } from "@/lib/data-store";

export const dynamic = "force-dynamic";
import {
  ArrowRight,
  Upload,
  Cog,
  Wrench,
  ShieldCheck,
  Globe,
  PenTool,
  Zap,
  Store,
  Sliders,
  Repeat,
  AlertTriangle,
  Layers,
  Sparkles,
  Timer,
  FlaskConical,
  Pen,
  Drill,
  Box,
  Target,
  Check,
  Minus,
  Star,
  ShoppingBag,
  FileText,
  Ruler,
  ScanEye,
  Puzzle,
  MessageSquare,
  Lightbulb,
  XCircle,
  ClipboardList,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Acrylic Laser Cutting Services | Max Custom Acrylics",
  description:
    "Precision laser cutting solutions for custom acrylic displays, signage, retail fixtures, protective panels and industrial components. Engineering review, quality inspection, worldwide delivery.",
};

export default async function LaserCuttingPage() {
  const s = await getSettings();
  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section className="relative bg-gradient-to-br from-[#0F2744] via-[#1E3A5F] to-[#0F2744] overflow-hidden" aria-labelledby="laser-cutting-hero-heading">
        <div className="absolute inset-0 opacity-5"><div className="grid grid-cols-6 gap-2 h-full p-8">{[...Array(18)].map((_,i)=>(<div key={i} className="bg-blue-400 rounded-full" />))}</div></div>
        <Container className="relative py-20 lg:py-28 text-center">
          <Breadcrumb items={[{ label: "Home", href: "/" },{ label: "Custom Acrylic" }]} />
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-blue-300 tracking-wide mt-6">Precision Fabrication</span>
          <h1 id="laser-cutting-hero-heading" className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[56px] lg:leading-tight">Custom Acrylic Laser Cutting Services</h1>
          <p className="mt-5 text-base text-blue-200 leading-relaxed sm:text-lg max-w-[640px] mx-auto">Precision laser cutting solutions for custom acrylic displays, signage, retail fixtures, protective panels and industrial components.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center" role="group" aria-label="Call to action buttons">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F2744]">Request a Quote <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-transparent px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"><Upload className="h-4 w-4" aria-hidden="true" /> Upload Your Drawing</Link>
          </div>
        </Container>
      </section>

      {/* ========== WHEN TO CHOOSE SECTION ========== */}
      <section
        className="bg-gray-50"
        aria-labelledby="when-to-choose-heading"
      >
        <Container className="py-16 lg:py-24">
          {/* Section heading */}
          <div className="max-w-[720px]">
            <h2
              id="when-to-choose-heading"
              className="text-3xl font-bold text-[#0F2744] sm:text-4xl"
            >
              When Should You Choose Laser Cutting?
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">
              Laser cutting is an excellent choice for many custom acrylic
              applications, but selecting the right manufacturing process
              depends on your design, material and project requirements.
            </p>
          </div>

          {/* Two columns */}
          <div className="mt-12 grid gap-10 lg:grid-cols-[7fr_5fr]">
            {/* —— Left Column: Best Applications —— */}
            <div>
              <h3 className="text-xl font-semibold text-[#0F2744]">
                Best Applications
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: PenTool,
                    title: "Intricate Shapes",
                    desc: "Ideal for complex contours and detailed cut patterns.",
                  },
                  {
                    icon: Zap,
                    title: "Smooth Edge Finish",
                    desc: "Produces clean polished edges on suitable acrylic materials.",
                  },
                  {
                    icon: Repeat,
                    title: "Fast Prototyping",
                    desc: "Suitable for prototype development and low-volume production.",
                  },
                  {
                    icon: Store,
                    title: "Retail Displays",
                    desc: "Perfect for display stands, signage and branded fixtures.",
                  },
                  {
                    icon: Sliders,
                    title: "Custom Fabrication",
                    desc: "Supports highly customized acrylic components.",
                  },
                  {
                    icon: Cog,
                    title: "Efficient Production",
                    desc: "Suitable for repeat production with consistent quality.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                  >
                    <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-blue-50 text-[#0F2744]">
                      <item.icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <h4 className="mt-3 text-sm font-semibold text-[#0F2744]">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* —— Right Column: Consider Other Processes If —— */}
            <div>
              <h3 className="text-xl font-semibold text-[#0F2744]">
                Consider Other Processes If
              </h3>
              <div className="mt-6 space-y-4">
                {[
                  {
                    title: "Deep Grooves Required",
                    desc: "Consider CNC Machining.",
                  },
                  {
                    title: "Thick Material Processing",
                    desc: "Alternative machining methods may be more suitable.",
                  },
                  {
                    title: "Threaded Features",
                    desc: "Secondary machining may be required.",
                  },
                  {
                    title: "Three-Dimensional Machining",
                    desc: "CNC machining is often recommended.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-amber-200 bg-amber-50/50 p-5"
                  >
                    <div className="flex gap-3">
                      <AlertTriangle
                        className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div>
                        <h4 className="text-sm font-semibold text-[#0F2744]">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Highlight CTA */}
          <div className="mt-14 rounded-2xl border border-blue-200 bg-blue-50/60 p-8 md:p-10 text-center">
            <h3 className="text-xl font-bold text-[#0F2744] sm:text-2xl">
              Not sure which process is right?
            </h3>
            <p className="mt-2 text-gray-500 max-w-lg mx-auto leading-relaxed">
              Our engineering team can review your drawings and recommend the
              most suitable manufacturing process based on your project goals.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2"
            >
              <Upload className="h-4 w-4" aria-hidden="true" />
              Upload Your Drawing
            </Link>
          </div>
        </Container>
      </section>
      {/* ========== END WHEN TO CHOOSE SECTION ========== */}

      {/* ========== COMPARISON SECTION ========== */}
      <section className="bg-white" aria-labelledby="comparison-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]">
            <h2
              id="comparison-heading"
              className="text-3xl font-bold text-[#0F2744] sm:text-4xl"
            >
              Laser Cutting vs CNC Machining
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">
              Both laser cutting and CNC machining are widely used for custom
              acrylic fabrication. Choosing the right process depends on your
              design, material and performance requirements.
            </p>
          </div>

          {/* Comparison Table — responsive */}
          <div className="mt-10 overflow-x-auto">
            <div className="rounded-2xl border border-gray-200 overflow-hidden min-w-[640px]">
              {/* Header */}
              <div className="grid grid-cols-[220px_1fr_1fr] bg-[#0F2744] text-white">
                <div className="px-6 py-4 text-sm font-semibold">Feature</div>
                <div className="px-6 py-4 text-sm font-semibold text-center border-l border-white/20">
                  Laser Cutting
                </div>
                <div className="px-6 py-4 text-sm font-semibold text-center border-l border-white/20">
                  CNC Machining
                </div>
              </div>
              {/* Rows */}
              {[
                {
                  icon: Layers,
                  label: "Suitable Materials",
                  laser: "Cast & extruded acrylic, PETG, polycarbonate, PVC",
                  cnc: "Cast & extruded acrylic, PETG, polycarbonate, PVC, ABS",
                  laserBest: true,
                },
                {
                  icon: PenTool,
                  label: "Complex Shapes",
                  laser: "Excellent for intricate 2D profiles and fine details",
                  cnc: "Good for 2D; excels at 3D contours and pockets",
                },
                {
                  icon: Sparkles,
                  label: "Edge Finish",
                  laser: "Flame-polished, smooth as-cut finish directly from machine",
                  cnc: "Machined finish; may require secondary polishing",
                  laserBest: true,
                },
                {
                  icon: Timer,
                  label: "Production Speed",
                  laser: "Fast processing; no physical tooling or setup required",
                  cnc: "Slower initial setup; faster on thick materials",
                  laserBest: true,
                },
                {
                  icon: FlaskConical,
                  label: "Prototype Support",
                  laser: "Excellent — zero tooling cost, ideal for sampling",
                  cnc: "Good — requires CAM programming for each design",
                  laserBest: true,
                },
                {
                  icon: Pen,
                  label: "Engraving Capability",
                  laser: "Excellent — raster and vector engraving built in",
                  cnc: "Possible with specialized engraving bits and toolpaths",
                  laserBest: true,
                },
                {
                  icon: Drill,
                  label: "Deep Machining",
                  laser: "Limited to laser-rated material thickness, typically ≤25mm",
                  cnc: "Excellent — machines acrylic up to 50mm thickness",
                  cncBest: true,
                },
                {
                  icon: Box,
                  label: "3D Features",
                  laser: "Not available — 2D profile cutting only",
                  cnc: "Excellent — beveled edges, pockets, threaded holes, contours",
                  cncBest: true,
                },
                {
                  icon: Target,
                  label: "Typical Applications",
                  laser: "Displays, signage, decorative panels, POP, awards",
                  cnc: "Structural parts, enclosures, machine guards, threaded assemblies",
                },
              ].map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-[220px_1fr_1fr] ${
                    i % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                  }`}
                >
                  {/* Label */}
                  <div className="px-6 py-4 flex items-center gap-3 border-t border-gray-100">
                    <row.icon className="h-4 w-4 text-gray-400 flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm font-medium text-[#0F2744]">{row.label}</span>
                  </div>
                  {/* Laser Cutting */}
                  <div className="px-6 py-4 flex items-center border-t border-l border-gray-100">
                    <div className="flex items-start gap-2 w-full">
                      {row.laserBest ? (
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      ) : row.cncBest ? (
                        <Minus className="h-4 w-4 text-gray-300 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      ) : (
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      )}
                      <span className="text-sm text-gray-500 leading-relaxed">{row.laser}</span>
                    </div>
                  </div>
                  {/* CNC Machining */}
                  <div className="px-6 py-4 flex items-center border-t border-l border-gray-100">
                    <div className="flex items-start gap-2 w-full">
                      {row.cncBest ? (
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      ) : row.laserBest ? (
                        <Minus className="h-4 w-4 text-gray-300 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      ) : (
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      )}
                      <span className="text-sm text-gray-500 leading-relaxed">{row.cnc}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Info Box */}
          <div className="mt-12 rounded-2xl border border-blue-200 bg-blue-50/60 p-8 md:p-10">
            <h3 className="text-xl font-bold text-[#0F2744] sm:text-2xl">
              Which Process Should You Choose?
            </h3>
            <p className="mt-3 text-gray-500 max-w-3xl leading-relaxed">
              Laser cutting is generally preferred for intricate acrylic sheet
              fabrication, while CNC machining is better suited for projects
              requiring deep machining, complex three-dimensional features or
              tighter mechanical tolerances.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/services/cnc-machining"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#0F2744] bg-white px-6 py-3 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2"
              >
                View CNC Machining
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
      {/* ========== END COMPARISON SECTION ========== */}

      {/* ========== 
      {/* ========== END MATERIAL COMPATIBILITY SECTION ========== */}

      {/* ========== DESIGN GUIDELINES SECTION ========== */}
      <section className="bg-white" aria-labelledby="design-guidelines-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]">
            <h2
              id="design-guidelines-heading"
              className="text-3xl font-bold text-[#0F2744] sm:text-4xl"
            >
              Design Guidelines for Better Laser Cutting Results
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">
              Following good design practices helps improve manufacturing
              efficiency, product quality and overall project success.
            </p>
          </div>

          {/* Two columns */}
          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
            {/* —— Left: Design Recommendation Cards —— */}
            <div className="space-y-4">
              {[
                {
                  icon: FileText,
                  title: "Use Vector Files",
                  desc: "Preferred formats include AI, DXF and DWG. Vector files preserve precise geometry and ensure accurate toolpath generation for laser cutting.",
                },
                {
                  icon: Ruler,
                  title: "Consider Material Thickness",
                  desc: "Choose material thickness according to product function. Thinner sheets cut faster and are more economical; thicker materials provide structural rigidity.",
                },
                {
                  icon: ScanEye,
                  title: "Avoid Extremely Small Details",
                  desc: "Very fine details may increase manufacturing complexity. Maintain minimum feature sizes proportional to material thickness for consistent, reliable results.",
                },
                {
                  icon: Puzzle,
                  title: "Plan Assembly Features",
                  desc: "Design slots, tabs and interlocking features with assembly requirements in mind. Include appropriate clearances for a smooth fit without excessive play.",
                },
                {
                  icon: MessageSquare,
                  title: "Consult Engineering Early",
                  desc: "Early design review can reduce revisions and production costs. Our engineering team can identify potential manufacturing issues before you finalize your design.",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-4">
                    {/* Step number */}
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0F2744] text-white flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <item.icon className="h-4 w-4 text-[#0F2744]" aria-hidden="true" />
                        <h3 className="text-sm font-semibold text-[#0F2744]">
                          {item.title}
                        </h3>
                      </div>
                      <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* —— Right: Design Illustration —— */}
            <div className="relative" aria-hidden="true">
              <div className="sticky top-24 rounded-2xl border border-gray-200 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
                {/* CAD-style diagram */}
                <div className="aspect-[4/5] flex items-center justify-center p-8">
                  <svg
                    className="w-full h-full max-w-[320px]"
                    viewBox="0 0 200 260"
                    fill="none"
                    stroke="#0F2744"
                    strokeWidth="0.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {/* Outer frame */}
                    <rect x="20" y="20" width="160" height="220" rx="4" stroke="#cbd5e1" strokeWidth="1" />
                    {/* Inner cut shape */}
                    <rect x="50" y="50" width="100" height="80" rx="2" stroke="#0F2744" strokeWidth="1.2" strokeDasharray="4 2" />
                    {/* Dimension lines */}
                    <line x1="50" y1="40" x2="150" y2="40" stroke="#94a3b8" strokeWidth="0.6" />
                    <line x1="50" y1="36" x2="50" y2="44" stroke="#94a3b8" strokeWidth="0.6" />
                    <line x1="150" y1="36" x2="150" y2="44" stroke="#94a3b8" strokeWidth="0.6" />
                    <text x="90" y="36" fontSize="6" fill="#94a3b8" stroke="none">100.0 mm</text>
                    {/* Vertical dimension */}
                    <line x1="40" y1="50" x2="40" y2="130" stroke="#94a3b8" strokeWidth="0.6" />
                    <line x1="36" y1="50" x2="44" y2="50" stroke="#94a3b8" strokeWidth="0.6" />
                    <line x1="36" y1="130" x2="44" y2="130" stroke="#94a3b8" strokeWidth="0.6" />
                    <text x="22" y="90" fontSize="6" fill="#94a3b8" stroke="none" transform="rotate(-90 22 90)">80.0 mm</text>
                    {/* Slot feature */}
                    <rect x="70" y="155" width="15" height="30" rx="1" stroke="#0F2744" strokeWidth="0.8" />
                    {/* Tab feature */}
                    <rect x="115" y="175" width="20" height="8" rx="1" stroke="#0F2744" strokeWidth="0.8" />
                    {/* Annotation lines */}
                    <line x1="85" y1="155" x2="85" y2="142" stroke="#64748b" strokeWidth="0.5" />
                    <line x1="85" y1="142" x2="120" y2="142" stroke="#64748b" strokeWidth="0.5" />
                    <text x="125" y="140" fontSize="6" fill="#64748b" stroke="none">Slot 15×30mm</text>
                    <line x1="135" y1="175" x2="135" y2="198" stroke="#64748b" strokeWidth="0.5" />
                    <line x1="135" y1="198" x2="155" y2="198" stroke="#64748b" strokeWidth="0.5" />
                    <text x="160" y="196" fontSize="6" fill="#64748b" stroke="none">Tab 20×8mm</text>
                    {/* Corner radius callout */}
                    <circle cx="50" cy="50" r="20" stroke="#64748b" strokeWidth="0.4" fill="none" />
                    <line x1="70" y1="50" x2="78" y2="50" stroke="#64748b" strokeWidth="0.5" />
                    <text x="80" y="52" fontSize="5" fill="#64748b" stroke="none">R20</text>
                  </svg>
                </div>
                {/* Caption */}
                <div className="px-6 pb-6 text-center">
                  <p className="text-xs text-gray-400">Recommended: submit vector CAD files with dimensions and tolerances</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 rounded-2xl border border-blue-200 bg-blue-50/60 p-8 md:p-10 text-center">
            <h3 className="text-xl font-bold text-[#0F2744] sm:text-2xl">
              Need help reviewing your design?
            </h3>
            <p className="mt-2 text-gray-500 max-w-lg mx-auto leading-relaxed">
              Our engineering team can review your CAD files and provide
              feedback on manufacturability before you commit to production.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2"
            >
              <Upload className="h-4 w-4" aria-hidden="true" />
              Upload Your Drawing
            </Link>
          </div>
        </Container>
      </section>
      {/* ========== END DESIGN GUIDELINES SECTION ========== */}

      {/* ========== COMMON DESIGN MISTAKES SECTION ========== */}
      <section className="bg-gray-50" aria-labelledby="mistakes-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]">
            <h2 id="mistakes-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">
              Common Design Mistakes to Avoid
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">
              Understanding common design issues helps reduce revisions, improve
              manufacturing efficiency and achieve better finished products.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Avoid Raster Images", desc: "Use vector drawings whenever possible. Raster images cannot be accurately converted to toolpaths and may result in jagged or imprecise cut edges." },
              { title: "Tiny Holes", desc: "Very small holes may not be suitable depending on material thickness. As a guideline, hole diameter should be at least equal to material thickness for clean results." },
              { title: "Overly Complex Geometry", desc: "Simplify unnecessary design details when appropriate. Excessive complexity increases processing time and may not add proportional value to the finished product." },
              { title: "Insufficient Edge Distance", desc: "Leave adequate spacing between cut features. Features placed too close together can cause material warping or weaken the finished part." },
              { title: "Ignoring Material Properties", desc: "Different materials perform differently during fabrication. Cast and extruded acrylic, for example, respond differently to laser cutting and edge finishing." },
              { title: "Skipping Engineering Review", desc: "Early engineering feedback helps avoid costly revisions. A quick design review before production can identify potential issues and save significant time and expense." },
            ].map((item) => (
              <div key={item.title} className="group rounded-xl border border-rose-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-rose-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#0F2744]">{item.title}</h3>
                    <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-blue-200 bg-blue-50/60 p-8 md:p-10 text-center">
            <h3 className="text-xl font-bold text-[#0F2744] sm:text-2xl">
              Good design starts with good communication.
            </h3>
            <p className="mt-2 text-gray-500 max-w-lg mx-auto leading-relaxed">
              Our engineering team is happy to review your drawings before production.
            </p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2">
              <Upload className="h-4 w-4" aria-hidden="true" /> Upload Your Drawing
            </Link>
          </div>
        </Container>
      </section>
      {/* ========== END COMMON DESIGN MISTAKES SECTION ========== */}

      {/* ========== FILE PREPARATION GUIDE SECTION ========== */}
      <section className="bg-gray-50" aria-labelledby="laser-files-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]">
            <h2 id="laser-files-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">
              Preparing Your Files for Laser Cutting
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">
              Providing clear production files helps speed up engineering review and quotation.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* Left: File Formats */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-2 mb-5">
                <FileText className="h-5 w-5 text-[#0F2744]" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-[#0F2744]">Accepted File Formats</h3>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {["AI", "PDF", "DXF", "DWG", "EPS", "SVG"].map((fmt) => (
                  <div key={fmt} className="flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-[#0F2744]">
                    {fmt}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Drawing Checklist */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-2 mb-5">
                <ClipboardList className="h-5 w-5 text-[#0F2744]" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-[#0F2744]">Drawing Checklist</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Convert text to outlines.",
                  "Use vector graphics wherever possible.",
                  "Include dimensions where possible.",
                  "Indicate material thickness.",
                  "Mark engraving areas separately.",
                  "Separate cut and engrave layers.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-500">
                    <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50/60 p-8 md:p-10 text-center">
            <h3 className="text-xl font-bold text-[#0F2744] sm:text-2xl">
              Need help preparing your files?
            </h3>
            <p className="mt-2 text-gray-500 max-w-lg mx-auto leading-relaxed">
              Our engineering team can review your drawings and provide feedback before you finalize production files.
            </p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2">
              <Upload className="h-4 w-4" aria-hidden="true" /> Upload Your Drawing
            </Link>
          </div>
        </Container>
      </section>
      {/* ========== END FILE PREPARATION GUIDE SECTION ========== */}

      {/* ========== FAQ SECTION ========== */}
      <section className="py-16 lg:py-24 bg-gray-50" aria-labelledby="laser-faq-heading">
        <Container>
          <div className="text-center mb-12">
            <h2 id="laser-faq-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto leading-relaxed">Find answers to common questions about custom acrylic laser cutting, engineering support and project delivery.</p>
          </div>
          <div className="max-w-4xl mx-auto grid gap-4 sm:grid-cols-2">
            {[
              { q: "Can you manufacture from my drawings?", a: "Yes. Send us your DXF, DWG, AI or PDF files and our engineering team will review them for manufacturability before providing a quotation." },
              { q: "Do you support prototype orders?", a: "Absolutely. Laser cutting has zero tooling cost, making it ideal for prototypes and small-batch production. We handle single units to full production runs." },
              { q: "Which materials work best for laser cutting?", a: "Cast acrylic produces the best flame-polished edge finish. Extruded acrylic is more economical for volume production. PETG and polycarbonate are also compatible." },
              { q: "Can laser cutting be combined with CNC machining?", a: "Yes. Many projects combine both processes — laser cutting for 2D profiles and CNC machining for 3D features, threaded holes and beveled edges." },
              { q: "What file types do you accept?", a: "We accept AI, PDF, DXF, DWG, EPS and SVG vector files. Our engineering team can also work from sketches, photos or physical samples." },
              { q: "How is quality inspected?", a: "Multi-stage inspection throughout production — incoming material check, in-process dimensional verification and final QC with documented photo reports before shipment." },
              { q: "Do you support international shipping?", a: "Yes. We ship to over 30 countries with export-ready packaging including custom foam inserts, wooden crates and complete export documentation." },
              { q: "How do I start my project?", a: "Upload your drawing through our website or contact our engineering team directly. We will review your requirements and provide a quotation within 24 hours." },
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
      {/* ========== END FAQ SECTION ========== */}

      {/* ========== FINAL CTA SECTION ========== */}
      <section className="bg-white" aria-labelledby="laser-cta-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]">
            <h2 id="laser-cta-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">
              Ready to Discuss Your Project?
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">
              Whether you already have detailed drawings or just an initial
              concept, our engineering team is ready to help you evaluate your
              project and recommend the most suitable manufacturing solution.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* Left: Trust Indicators */}
            <div className="space-y-4">
              {[
                { icon: Cog, title: "Engineering Review", desc: "Your design reviewed by experienced engineers for manufacturability and cost optimization." },
                { icon: Layers, title: "Material Recommendation", desc: "Expert guidance on material selection based on your application and performance requirements." },
                { icon: FlaskConical, title: "Prototype Support", desc: "Prototyping and sampling available to validate your design before full production." },
                { icon: Globe, title: "Worldwide Delivery", desc: "Export-ready packaging and international logistics to over 30 countries." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-[#0F2744]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#0F2744]">{item.title}</h3>
                    <p className="mt-0.5 text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Inquiry Card */}
            <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-[#0F2744] to-[#1a3a5c] p-8 text-white flex flex-col justify-center">
              <h3 className="text-xl font-bold">Start Your Project Today</h3>
              <p className="mt-3 text-blue-200 leading-relaxed text-sm">
                Send us your drawings or project brief. Our team will review
                your requirements and respond with a detailed quotation and
                manufacturing recommendations.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F2744]"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-transparent px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F2744]"
                >
                  <Upload className="h-4 w-4" aria-hidden="true" />
                  Upload Your Drawing
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-400">
            Our team typically responds within one business day.
          </p>
        </Container>
      </section>
      {/* ========== END FINAL CTA SECTION ========== */}
    </>
  );
}
