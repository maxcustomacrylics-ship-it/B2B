"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import { useSettings } from "@/components/providers/SettingsProvider";
import { ArrowRight, Upload, Cog, PackageCheck, Globe, ShieldCheck, Clock } from "lucide-react";

export default function Hero() {
  const s = useSettings();

  return (
    <section className="relative bg-white overflow-hidden" aria-labelledby="hero-heading">
      <Container className="py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

          {/* ——— Left Column ——— */}
          <div>
            {/* Badge */}
            <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 tracking-wide mb-4">
              {s.heroBadge}
            </span>

            {/* H1 — single instance */}
            <h1 id="hero-heading" className="text-4xl font-bold tracking-tight text-[#0F2744] sm:text-5xl lg:text-6xl leading-tight">
              {s.heroHeadline}
            </h1>

            {/* Supporting copy */}
            <p className="mt-5 text-lg text-gray-500 leading-relaxed max-w-xl">
              {s.heroSubheadline}
            </p>

            {/* CTA Buttons — 3 */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3" role="group" aria-label="Call to action buttons">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm"
                aria-label="Request a quote for your custom acrylic project"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#0F2744] bg-white px-6 py-3.5 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors"
                aria-label="Upload your drawing for a fast quotation"
              >
                <Upload className="h-4 w-4" /> Upload Your Drawing
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#0F2744] hover:border-[#0F2744] transition-colors sm:mt-0 mt-0"
                aria-label="Browse our acrylic product categories"
              >
                View Products
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 sm:flex sm:flex-wrap sm:gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-1.5"><Cog className="h-4 w-4 text-green-600 flex-shrink-0" aria-hidden="true" /> Engineering Support</span>
              <span className="flex items-center gap-1.5"><PackageCheck className="h-4 w-4 text-green-600 flex-shrink-0" aria-hidden="true" /> Flexible MOQ</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-green-600 flex-shrink-0" aria-hidden="true" /> Quality Controlled</span>
              <span className="flex items-center gap-1.5"><Globe className="h-4 w-4 text-green-600 flex-shrink-0" aria-hidden="true" /> Worldwide Shipping</span>
            </div>

            {/* Response Promise */}
            <div className="mt-5 flex flex-col sm:flex-row gap-2 sm:gap-6 text-xs text-gray-400">
              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-green-500" aria-hidden="true" /> Response within 24 hours</span>
              <span className="flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5 text-green-500" aria-hidden="true" /> NDA available upon request</span>
            </div>
          </div>

          {/* ——— Right Column — Product Collage ——— */}
          <div className="relative" aria-hidden="true">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                  {s.heroImg1 ? <img src={s.heroImg1} alt="Custom acrylic display product" className="h-full w-full object-cover" /> : <span className="text-6xl">🖼</span>}
                </div>
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  {s.heroImg2 ? <img src={s.heroImg2} alt="Custom acrylic box product" className="h-full w-full object-cover" /> : <span className="text-5xl">📦</span>}
                </div>
              </div>
              <div className="space-y-3 pt-8">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  {s.heroImg3 ? <img src={s.heroImg3} alt="Custom acrylic signage" className="h-full w-full object-cover" /> : <span className="text-5xl">🏆</span>}
                </div>
                <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                  {s.heroImg4 ? <img src={s.heroImg4} alt="Custom acrylic stand" className="h-full w-full object-cover" /> : <span className="text-6xl">📋</span>}
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
