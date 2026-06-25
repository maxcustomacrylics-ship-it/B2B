"use client";

import Container from "@/components/ui/Container";
import { useSettings } from "@/components/providers/SettingsProvider";

export default function FactorySection() {
  const s = useSettings();
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Inside Our Factory</span>
            <h2 className="mt-2 text-3xl font-bold text-[#0F2744] sm:text-4xl">Advanced Manufacturing Facility</h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Our 5,000㎡ facility houses state-of-the-art equipment including CNC machining centers, industrial laser cutters, UV flatbed printers, and automated polishing lines. Experienced technicians and rigorous quality control ensure consistent production quality and reliable delivery.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-gray-500">
              {["ISO 9001 Certified Quality Management","5,000㎡ Production & Assembly Workshop","50+ Skilled Technicians & Engineers","In-House Tooling, Jig & Fixture Fabrication","Export-Ready Packaging & Container Loading"].map((item) => (
                <li key={item} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-700 shrink-0" />{item}</li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[s.factoryImg1, s.factoryImg2, s.factoryImg3, s.factoryImg4].map((img, i) => (
              <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                {img ? <img src={img} alt={`Factory ${i+1}`} className="h-full w-full object-cover" /> : <span className="text-5xl opacity-30">{["🏭","🔬","📦","⚙️"][i]}</span>}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
