"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";

const industries = [
  { title: "Retail", href: "/industries/retail", emoji: "🏪", desc: "POP displays, counter units, shelf displays and store fixtures for retail chains." },
  { title: "Cosmetics", href: "/industries/cosmetics", emoji: "💄", desc: "Display stands, tester units, and luxury packaging for beauty and skincare brands." },
  { title: "Hotels", href: "/industries/hotel", emoji: "🏨", desc: "Room signage, reception displays, brochure holders and amenity presentation." },
  { title: "Restaurants", href: "/industries/restaurant", emoji: "🍽", desc: "Menu holders, table signs, food displays and QR code stands." },
  { title: "Medical", href: "/industries/medical", emoji: "🏥", desc: "Protective barriers, equipment covers, signage and organizational displays." },
  { title: "Electronics", href: "/industries/electronics", emoji: "📱", desc: "Product stands, display fixtures and enclosure components." },
  { title: "Jewelry", href: "/industries/jewelry", emoji: "💍", desc: "Premium display cases, busts and presentation trays for fine jewelry." },
  { title: "Museum", href: "/industries/museum", emoji: "🏛", desc: "Display vitrines, artifact cases, signage and exhibition fixtures." },
];

export default function CategoryShowcase() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Who We Serve</span>
          <h2 className="mt-2 text-3xl font-bold text-[#0F2744] sm:text-4xl">Industries We Serve</h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">Custom acrylic solutions tailored to your industry — from retail displays to medical equipment components.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind) => (
            <Link key={ind.href} href={ind.href} className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 hover:shadow-md hover:border-blue-200 transition-all">
              <span className="text-3xl shrink-0">{ind.emoji}</span>
              <div>
                <h3 className="font-semibold text-[#0F2744] group-hover:text-blue-700 transition-colors">{ind.title}</h3>
                <p className="mt-1 text-sm text-gray-500 leading-relaxed">{ind.desc}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-[#0F2744]"><ArrowRight className="h-3 w-3" /></span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
