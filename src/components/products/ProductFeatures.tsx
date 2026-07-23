import type { Product } from "@/lib/types";

const FEATURES = [
  { key: "whyChooseImg1", title: "Factory Direct", desc: "No middlemen — you work directly with our ISO-certified manufacturing facility." },
  { key: "whyChooseImg2", title: "OEM & ODM", desc: "Custom manufacturing based on your drawings, samples, or concepts." },
  { key: "whyChooseImg3", title: "Engineering Support", desc: "Our engineers review every design for manufacturability and optimization." },
  { key: "whyChooseImg4", title: "Quality Inspection", desc: "Multi-stage QC from incoming materials to final pre-shipment inspection." },
  { key: "whyChooseImg5", title: "Fast Quotation", desc: "Receive a detailed quote within 24 hours — no minimum order required." },
  { key: "whyChooseImg6", title: "Worldwide Shipping", desc: "Reliable international logistics with full tracking and insurance options." },
  { key: "whyChooseImg7", title: "Premium Materials", desc: "High-grade cast or extruded acrylic with superior clarity and durability." },
  { key: "whyChooseImg8", title: "Export Packaging", desc: "Individual polybags, foam inserts, branded boxes, or wooden crates." },
];

export default function ProductFeatures({ product, settings }: { product: Product; settings?: Record<string, string> }) {
  return (
    <section className="mt-16" aria-labelledby="features-heading">
      <h2 id="features-heading" className="text-2xl font-bold text-[#0F2744] mb-2">Why Choose Max Custom Acrylics</h2>
      <p className="text-gray-500 text-sm mb-6">Factory direct, engineering support, and worldwide shipping — here's why businesses choose us for custom acrylic manufacturing.</p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f) => {
          const img = settings?.[f.key];
          return (
            <div key={f.title} className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm group">
              {img ? (
                <div className="aspect-[16/10] bg-gradient-to-br from-gray-50 to-gray-200/50">
                  <img src={img} alt={f.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              ) : (
                <div className="aspect-[16/10] bg-gradient-to-br from-[#0F2744]/5 to-[#0F2744]/10 flex items-center justify-center">
                  <span className="text-3xl opacity-30">{["🏭","📐","🔧","🔍","⚡","🌍","✅","📦"][FEATURES.indexOf(f)]}</span>
                </div>
              )}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-[#0F2744]">{f.title}</h3>
                <p className="mt-1 text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
