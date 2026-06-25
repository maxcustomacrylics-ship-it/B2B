"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import { useSettings } from "@/components/providers/SettingsProvider";

export default function CTASection() {
  const s = useSettings();

  return (
    <section style={{ backgroundColor: "#0F2744" }} className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{s.ctaTitle}</h2>
          <p className="mt-4 text-lg text-blue-200">{s.ctaSubtitle}</p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors shadow-sm"
            >
              {s.ctaButton}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
