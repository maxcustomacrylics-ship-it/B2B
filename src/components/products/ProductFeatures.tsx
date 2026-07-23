import type { Product } from "@/lib/types";

const DEFAULT_FEATURES = [
  { icon: "✅", title: "Premium Materials", desc: "High-grade cast or extruded acrylic with superior clarity and durability." },
  { icon: "📐", title: "Custom Dimensions", desc: "Made to your exact size requirements — width, height, and thickness." },
  { icon: "🏭", title: "OEM & ODM Service", desc: "Full custom manufacturing based on your drawings, samples, or ideas." },
  { icon: "🎨", title: "Multiple Finishes", desc: "Diamond polished, flame polished, frosted, colored, or mirrored surfaces." },
  { icon: "🖨️", title: "Logo & Branding", desc: "UV printing, laser engraving, silk-screen, or dimensional lettering." },
  { icon: "📦", title: "Export Packaging", desc: "Individual polybags, foam inserts, branded boxes, or wooden crates." },
  { icon: "⚡", title: "Fast Turnaround", desc: "Efficient production with standard lead times of 10–18 business days." },
  { icon: "🌍", title: "Global Shipping", desc: "Reliable international logistics with full tracking and insurance options." },
];

export default function ProductFeatures({ product }: { product: Product }) {
  return (
    <section className="mt-16" aria-labelledby="features-heading">
      <h2 id="features-heading" className="text-2xl font-bold text-[#0F2744] mb-2">Product Features</h2>
      <p className="text-gray-500 text-sm mb-6">What makes our {product.name.toLowerCase()} the right choice for your business.</p>
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
