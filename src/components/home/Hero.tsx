"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import { useSettings } from "@/components/providers/SettingsProvider";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";

export default function Hero() {
  const s = useSettings();

  return (
    <section className="relative bg-white overflow-hidden">
      <Container className="py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 tracking-wide mb-4">{s.heroBadge}</span>
            <h1 className="text-4xl font-bold tracking-tight text-[#0F2744] sm:text-5xl lg:text-6xl leading-tight">{s.heroHeadline}</h1>
            <p className="mt-5 text-lg text-gray-500 leading-relaxed max-w-xl">{s.heroSubheadline}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href={s.heroBtnPrimaryUrl} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm"><ArrowRight className="h-4 w-4" />Get Free Quote</Link>
              <Link href={s.heroBtnSecondaryUrl} className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#0F2744] hover:border-[#0F2744] transition-colors">View Products</Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-5 text-sm text-gray-500">
              <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-green-600" />ISO Certified</span>
              <span className="flex items-center gap-1.5"><Zap className="h-4 w-4 text-green-600" />24h Response</span>
              <span className="flex items-center gap-1.5"><Globe className="h-4 w-4 text-green-600" />Global Shipping</span>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                  {s.heroImg1 ? <img src={s.heroImg1} alt="Product sample" className="h-full w-full object-cover" /> : <span className="text-6xl">🖼</span>}
                </div>
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  {s.heroImg2 ? <img src={s.heroImg2} alt="Product sample" className="h-full w-full object-cover" /> : <span className="text-5xl">📦</span>}
                </div>
              </div>
              <div className="space-y-3 pt-8">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  {s.heroImg3 ? <img src={s.heroImg3} alt="Product sample" className="h-full w-full object-cover" /> : <span className="text-5xl">🏆</span>}
                </div>
                <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                  {s.heroImg4 ? <img src={s.heroImg4} alt="Product sample" className="h-full w-full object-cover" /> : <span className="text-6xl">📋</span>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
