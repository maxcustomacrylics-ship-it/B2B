import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Acrylic Laser Cutting Services | Max Custom Acrylics",
  description:
    "Precision laser cutting solutions for custom acrylic displays, signage, retail fixtures, protective panels and industrial components. Engineering review, quality inspection, worldwide delivery.",
};

export default function LaserCuttingPage() {
  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section
        className="relative bg-white overflow-hidden"
        aria-labelledby="laser-cutting-hero-heading"
      >
        <Container className="py-14 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center min-h-[520px] lg:min-h-[560px]">

            {/* —— Left Column —— */}
            <div>
              {/* Breadcrumb */}
              <Breadcrumb
                items={[
                  { label: "Home", href: "/" },
                  { label: "Laser Cutting" },
                ]}
              />

              {/* H1 */}
              <h1
                id="laser-cutting-hero-heading"
                className="mt-4 text-4xl font-bold tracking-tight text-[#0F2744] sm:text-5xl lg:text-[56px] lg:leading-tight"
              >
                Custom Acrylic Laser Cutting Services
              </h1>

              {/* Supporting paragraph */}
              <p className="mt-5 text-base text-gray-500 leading-relaxed sm:text-lg max-w-[620px]">
                Precision laser cutting solutions for custom acrylic displays,
                signage, retail fixtures, protective panels and industrial
                components.
              </p>
              <p className="mt-3 text-base text-gray-500 leading-relaxed sm:text-lg max-w-[620px]">
                Our engineering team reviews every project and coordinates the
                most suitable manufacturing process to deliver accurate,
                production-ready acrylic products with consistent quality and
                worldwide delivery support.
              </p>

              {/* CTA Buttons */}
              <div
                className="mt-8 flex flex-col sm:flex-row gap-3"
                role="group"
                aria-label="Call to action buttons"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2"
                  aria-label="Request a quote for custom acrylic laser cutting"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#0F2744] bg-white px-6 py-3.5 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2"
                  aria-label="Upload your drawing for laser cutting quotation"
                >
                  <Upload className="h-4 w-4" aria-hidden="true" />
                  Upload Your Drawing
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 sm:flex sm:flex-wrap sm:gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <Cog className="h-4 w-4 text-gray-400 flex-shrink-0" aria-hidden="true" />
                  Engineering Review
                </span>
                <span className="flex items-center gap-1.5">
                  <Wrench className="h-4 w-4 text-gray-400 flex-shrink-0" aria-hidden="true" />
                  Custom Manufacturing
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-gray-400 flex-shrink-0" aria-hidden="true" />
                  Quality Inspection
                </span>
                <span className="flex items-center gap-1.5">
                  <Globe className="h-4 w-4 text-gray-400 flex-shrink-0" aria-hidden="true" />
                  Worldwide Delivery
                </span>
              </div>
            </div>

            {/* —— Right Column — Hero Image —— */}
            <div className="relative" aria-hidden="true">
              <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 via-gray-50 to-blue-100 flex items-center justify-center">
                {/* Premium placeholder — precision laser cutting theme */}
                <div className="text-center select-none">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/80 shadow-sm mb-4">
                    <svg
                      className="w-10 h-10 text-[#0F2744]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {/* Precision crosshair + acrylic sheet icon */}
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                      <line x1="12" y1="2" x2="12" y2="6" />
                      <line x1="12" y1="18" x2="12" y2="22" />
                      <line x1="2" y1="12" x2="6" y2="12" />
                      <line x1="18" y1="12" x2="22" y2="12" />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-400 tracking-wide uppercase">
                    Precision Acrylic Fabrication
                  </p>
                </div>
              </div>
              {/* ALT text for screen readers */}
              <span className="sr-only">
                Custom acrylic laser cutting service for precision fabricated
                acrylic products
              </span>
            </div>

          </div>
        </Container>
      </section>
      {/* ========== END HERO SECTION ========== */}

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

      {/* ========== MATERIAL COMPATIBILITY SECTION ========== */}
      <section className="bg-gray-50" aria-labelledby="materials-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]">
            <h2 id="materials-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">
              Material Compatibility
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">
              Choosing the appropriate material is essential for achieving the
              desired appearance, durability and manufacturing performance. Our
              engineering team can recommend suitable materials based on your
              application.
            </p>
          </div>

          {/* Material Cards — 3 × 2 grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Cast Acrylic",
                rating: 5,
                badge: "Excellent",
                color: "from-blue-100 to-blue-50",
                bestFor: ["Luxury displays", "Signage", "Display cases"],
                desc: "Premium optical clarity with superior surface hardness. The preferred choice for high-end display products, awards and architectural applications requiring flawless transparency.",
                slug: "cast-acrylic",
              },
              {
                name: "Extruded Acrylic",
                rating: 4,
                badge: "Very Good",
                color: "from-sky-100 to-sky-50",
                bestFor: ["General fabrication", "Retail displays"],
                desc: "Consistent thickness with good optical properties at an economical price point. Ideal for volume production of retail fixtures, POP displays and standard signage.",
                slug: "extruded-acrylic",
              },
              {
                name: "PETG",
                rating: 4,
                badge: "Very Good",
                color: "from-emerald-100 to-emerald-50",
                bestFor: ["Protective panels", "Medical applications"],
                desc: "Excellent impact resistance with good clarity and formability. Suitable for protective barriers, medical device housings and retail fixtures requiring durability.",
                slug: "petg",
              },
              {
                name: "Polycarbonate",
                rating: 3,
                badge: "Moderate",
                color: "from-amber-100 to-amber-50",
                bestFor: ["Impact-resistant components", "Industrial guards"],
                desc: "Maximum impact strength and heat resistance among clear plastics. Used for machine guards, safety components and industrial applications where durability is critical.",
                slug: "polycarbonate",
              },
              {
                name: "PVC Foam Board",
                rating: 3,
                badge: "Moderate",
                color: "from-purple-100 to-purple-50",
                bestFor: ["Indoor signage", "Exhibitions"],
                desc: "Lightweight, cost-effective substrate for indoor signage, exhibition displays and temporary installations. Easy to print and fabricate.",
                slug: "pvc-foam-board",
              },
              {
                name: "ABS",
                rating: 2,
                badge: "Limited",
                color: "from-rose-100 to-rose-50",
                bestFor: ["Functional engineering parts"],
                desc: "Tough, rigid engineering plastic for functional components. Suitable for structural parts and industrial applications where optical clarity is not required.",
                slug: "abs",
              },
            ].map((mat) => (
              <div
                key={mat.name}
                className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Material Image — gradient placeholder */}
                <div className={`aspect-[16/9] bg-gradient-to-br ${mat.color} flex items-center justify-center`}>
                  <div className="text-center select-none">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/70 shadow-sm">
                      <Layers className="h-6 w-6 text-[#0F2744]" aria-hidden="true" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Compatibility Rating */}
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 ${
                          i < mat.rating
                            ? "fill-amber-400 text-amber-400"
                            : "fill-none text-gray-200"
                        }`}
                        aria-hidden="true"
                      />
                    ))}
                    <span className="ml-1.5 text-xs font-medium text-gray-500">
                      {mat.badge}
                    </span>
                  </div>

                  {/* Material Name */}
                  <h3 className="mt-3 text-lg font-semibold text-[#0F2744]">
                    {mat.name}
                  </h3>

                  {/* Best For Tags */}
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {mat.bestFor.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                    {mat.desc}
                  </p>

                  {/* Learn More */}
                  <Link
                    href={`/materials/${mat.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#0F2744] hover:text-blue-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Highlight CTA */}
          <div className="mt-14 rounded-2xl border border-blue-200 bg-blue-50/60 p-8 md:p-10 text-center">
            <h3 className="text-xl font-bold text-[#0F2744] sm:text-2xl">
              Need Help Choosing Materials?
            </h3>
            <p className="mt-2 text-gray-500 max-w-lg mx-auto leading-relaxed">
              Our engineering team can recommend the most suitable material based
              on your product design, application and manufacturing requirements.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2"
            >
              Contact Engineering Team
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>
      {/* ========== END MATERIAL COMPATIBILITY SECTION ========== */}
    </>
  );
}
