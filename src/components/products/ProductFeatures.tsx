import type { Product } from "@/lib/types";

const DEFAULT_FEATURES = [
  { icon: "🏭", title: "Factory Direct", desc: "No middlemen — you work directly with our ISO-certified manufacturing facility." },
  { icon: "📐", title: "OEM & ODM", desc: "Custom manufacturing based on your drawings, samples, or concepts." },
  { icon: "🔧", title: "Engineering Support", desc: "Our engineers review every design for manufacturability and optimization." },
  { icon: "🔍", title: "Quality Inspection", desc: "Multi-stage QC from incoming materials to final pre-shipment inspection." },
  { icon: "⚡", title: "Fast Quotation", desc: "Receive a detailed quote within 24 hours — no minimum order required." },
  { icon: "🌍", title: "Worldwide Shipping", desc: "Reliable international logistics with full tracking and insurance options." },
  { icon: "✅", title: "Premium Materials", desc: "High-grade cast or extruded acrylic with superior clarity and durability." },
  { icon: "📦", title: "Export Packaging", desc: "Individual polybags, foam inserts, branded boxes, or wooden crates." },
];

export default function ProductFeatures({ product }: { product: Product }) {
  return (
    <section className="mt-16" aria-labelledby="features-heading">
      <h2 id="features-heading" className="text-2xl font-bold text-[#0F2744] mb-2">Why Choose Max Custom Acrylics</h2>
      <p className="text-gray-500 text-sm mb-6">Factory direct, engineering support, and worldwide shipping — here's why businesses choose us for custom acrylic manufacturing.</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {DEFAULT_FEATURES.map((f) => (
          <div key={f.title} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <span className="text-xl">{f.icon}</span>
            <h3 className="mt-2 text-sm font-semibold text-[#0F2744]">{f.title}</h3>
            <p className="mt-1 text-xs text-gray-500 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
