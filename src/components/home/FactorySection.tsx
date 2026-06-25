"use client";

import Container from "@/components/ui/Container";
import { useSettings } from "@/components/providers/SettingsProvider";

const imgFallback = (i: number) => ["🏭","🔬","📦","⚙️","🏗"][i] || "🏭";

export default function FactorySection() {
  const s = useSettings();
  const imgs = [s.factoryImg1, s.factoryImg2, s.factoryImg3, s.factoryImg4];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Inside Our Facility</span>
          <h2 className="mt-2 text-3xl font-bold text-[#0F2744] sm:text-4xl">Advanced Manufacturing Facility</h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">5,000㎡ workshop with state-of-the-art equipment. ISO 9001 certified, 50+ skilled technicians, in-house tooling and export-ready packaging.</p>
        </div>

        {/* Gallery: large left + 4 small right grid */}
        <div className="grid gap-3 grid-cols-2 lg:grid-cols-3">
          {/* Main large image */}
          <div className="col-span-2 lg:col-span-2 lg:row-span-2 aspect-[4/3] lg:aspect-auto rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden shadow-sm">
            {imgs[0] ? <img src={imgs[0]} alt="Factory overview" className="h-full w-full object-cover" /> : <span className="text-8xl opacity-15">{imgFallback(0)}</span>}
          </div>
          {/* 4 supporting images */}
          {imgs.slice(1, 5).map((img, i) => (
            <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden shadow-sm">
              {img ? <img src={img} alt={`Factory ${i+2}`} className="h-full w-full object-cover" /> : <span className="text-5xl opacity-15">{imgFallback(i+1)}</span>}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
