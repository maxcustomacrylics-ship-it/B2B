import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { ArrowRight, Upload, Cog, Wrench, ShieldCheck, Globe } from "lucide-react";

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
                  { label: "Services", href: "/services" },
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
    </>
  );
}
