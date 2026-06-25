"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import { useSettings } from "@/components/providers/SettingsProvider";
import { ArrowRight } from "lucide-react";

const categories = [
  { key: "catImg1", title: "Acrylic Displays", href: "/products/acrylic-displays", count: "8 products", emoji: "🖼", desc: "Retail stands, cosmetic displays, brochure holders, counter displays and more." },
  { key: "catImg2", title: "Acrylic Boxes", href: "/products/acrylic-boxes", count: "6 products", emoji: "📦", desc: "Storage boxes, donation boxes, ballot boxes, display cases, lock boxes." },
  { key: "catImg3", title: "Acrylic Signage", href: "/products/acrylic-signage", count: "6 products", emoji: "📋", desc: "Office signs, door signs, name plates, QR code stands, wall signs." },
  { key: "catImg4", title: "Acrylic Home & Office", href: "/products/acrylic-home-office", count: "6 products", emoji: "🏠", desc: "Desk organizers, monitor stands, makeup organizers, trays, book stands." },
];

export default function CategoryShowcase() {
  const s = useSettings();
  const imgs: Record<string, string> = { catImg1: s.catImg1, catImg2: s.catImg2, catImg3: s.catImg3, catImg4: s.catImg4 };

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Product Range</span>
          <h2 className="mt-2 text-3xl font-bold text-[#0F2744] sm:text-4xl">Popular Acrylic Products</h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">Explore our most-requested categories — all custom manufactured to your specifications with flexible MOQ.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link key={cat.href} href={cat.href} className="group flex flex-col rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-[4/5] bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center overflow-hidden relative">
                {imgs[cat.key] ? <img src={imgs[cat.key]} alt={cat.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" /> : <span className="text-7xl transition-transform duration-300 group-hover:scale-110">{cat.emoji}</span>}
              </div>
              {/* Content — 30% */}
              <div className="p-5">
                <span className="text-xs text-gray-400">{cat.count}</span>
                <h3 className="mt-1 text-lg font-semibold text-[#0F2744] group-hover:text-blue-700 transition-colors">{cat.title}</h3>
                <p className="mt-1 text-sm text-gray-500 leading-relaxed">{cat.desc}</p>
                <div className="mt-3 flex items-center gap-1 text-sm font-medium text-[#0F2744] group-hover:gap-2 transition-all">
                  Explore <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
