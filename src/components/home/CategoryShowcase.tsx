"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import { ArrowRight, MessageCircle } from "lucide-react";

const industries = [
  {
    slug: "retail-display",
    title: "Retail Display",
    desc: "Custom acrylic displays, POP units and store fixtures designed to maximise product visibility and reflect retail brand identity.",
    tags: ["POP Displays", "Counter Units", "Shelf Fixtures"],
    emoji: "🏪",
  },
  {
    slug: "cosmetics-display",
    title: "Cosmetics",
    desc: "Premium acrylic cosmetic displays, tester units and luxury packaging for beauty and skincare brands worldwide.",
    tags: ["Counter Displays", "Tester Units", "Travel Retail"],
    emoji: "💄",
  },
  {
    slug: "jewelry-display",
    title: "Jewelry",
    desc: "Crystal-clear acrylic jewelry displays with diamond-polished edges — ring holders, necklace busts and watch stands.",
    tags: ["Ring Displays", "Watch Stands", "Display Cases"],
    emoji: "💍",
  },
  {
    slug: "medical-healthcare",
    title: "Medical",
    desc: "Protective barriers, equipment covers and organisational displays manufactured for healthcare environments.",
    tags: ["Protective Barriers", "Equipment Covers", "Clean Room"],
    emoji: "🏥",
  },
  {
    slug: "restaurant-hospitality",
    title: "Restaurant",
    desc: "Menu holders, table signs, food displays and QR code stands designed for busy hospitality environments.",
    tags: ["Menu Holders", "Table Signs", "Food Displays"],
    emoji: "🍽",
  },
  {
    slug: "hotel-hospitality",
    title: "Hotel",
    desc: "Room signage, reception displays, amenity trays and wayfinding solutions for hotels and resorts.",
    tags: ["Room Signage", "Amenity Trays", "Wayfinding"],
    emoji: "🏨",
  },
  {
    slug: "electronics-industry",
    title: "Electronics",
    desc: "Precision acrylic display stands, protective covers and enclosure components for consumer electronics products.",
    tags: ["Device Stands", "Protective Covers", "Enclosures"],
    emoji: "📱",
  },
  {
    slug: "museum-art-gallery",
    title: "Museum",
    desc: "Museum-grade display vitrines, artifact cases and exhibition fixtures with UV-filtering acrylic for artifact protection.",
    tags: ["Display Vitrines", "Artifact Cases", "UV Protection"],
    emoji: "🏛",
  },
];

export default function CategoryShowcase() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <Container>
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Who We Serve</span>
          <h2 className="mt-2 text-3xl font-bold text-[#0F2744] sm:text-4xl">
            Custom Acrylic Solutions by Industry
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We help businesses across multiple industries develop custom acrylic products tailored to their branding, functionality and project requirements.
          </p>
        </div>

        {/* Industry cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="group flex flex-col rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center overflow-hidden">
                <span className="text-6xl opacity-30 transition-transform duration-300 group-hover:scale-110 select-none">
                  {ind.emoji}
                </span>
              </div>
              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-[#0F2744] group-hover:text-blue-700 transition-colors">
                  {ind.title}
                </h3>
                <p className="mt-1.5 text-sm text-gray-500 leading-relaxed flex-1">
                  {ind.desc}
                </p>
                {/* Application tags */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {ind.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* CTA */}
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#0F2744] group-hover:gap-2 transition-all">
                  Explore Solutions <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-xl bg-white border border-gray-200 p-8 text-center shadow-sm">
          <h3 className="text-xl font-bold text-[#0F2744]">
            Need an industry-specific acrylic solution?
          </h3>
          <p className="mt-2 text-gray-500 max-w-xl mx-auto leading-relaxed">
            Our engineering team helps design and coordinate custom acrylic products for different industries and project requirements.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#0F2744] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm"
          >
            <MessageCircle className="h-4 w-4" /> Discuss Your Project
          </Link>
        </div>
      </Container>
    </section>
  );
}
