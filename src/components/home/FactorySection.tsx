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

        {/* Gallery: left large + right 2×2 grid */}
        <div className="flex flex-col lg:flex-row gap-3">
          {/* Left — Large image */}
          <div className="lg:w-[55%] aspect-[4/3] rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden shadow-sm">
            {imgs[0] ? <img src={imgs[0]} alt="Factory overview" className="h-full w-full object-cover" /> : <span className="text-8xl opacity-15 select-none">{imgFallback(0)}</span>}
          </div>
          {/* Right — 2×2 grid */}
          <div className="lg:w-[45%] grid grid-cols-2 gap-3">
            {imgs.slice(1, 5).map((img, i) => (
              <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden shadow-sm">
                {img ? <img src={img} alt={`Factory area ${i+2}`} className="h-full w-full object-cover" /> : <span className="text-5xl opacity-15 select-none">{imgFallback(i+1)}</span>}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
