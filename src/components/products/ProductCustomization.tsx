import type { Product } from "@/lib/types";

const OPTIONS = [
  { icon: "📏", title: "Size", desc: "Custom width, height, and depth to fit your space." },
  { icon: "🔷", title: "Shape", desc: "Rectangular, round, curved, or fully custom contours." },
  { icon: "🎨", title: "Color", desc: "Clear, frosted, tinted, mirrored, or custom color matching." },
  { icon: "🖌️", title: "Logo", desc: "UV printing, laser engraving, or silk-screen branding." },
  { icon: "📐", title: "Structure", desc: "Single piece, multi-tier, modular, or collapsible designs." },
  { icon: "✨", title: "Finish", desc: "Diamond polished edges, matte, or textured surfaces." },
  { icon: "💡", title: "Lighting", desc: "Integrated LED, edge-lit, or backlit illumination options." },
  { icon: "📦", title: "Accessories", desc: "Hardware, mounting brackets, connectors, or fittings." },
];

export default function ProductCustomization({ product }: { product: Product }) {
  return (
    <section className="mt-16" aria-labelledby="customization-heading">
      <h2 id="customization-heading" className="text-2xl font-bold text-[#0F2744] mb-2">Customization Options</h2>
      <p className="text-gray-500 text-sm mb-6">
        Every {product.name.toLowerCase()} can be fully customized. Choose from the following options — our engineering team will help optimize your design.
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {OPTIONS.map((opt) => (
          <div key={opt.title} className="rounded-lg border border-gray-200 bg-white p-4">
            <span className="text-lg">{opt.icon}</span>
            <h4 className="mt-1 text-sm font-semibold text-[#0F2744]">{opt.title}</h4>
            <p className="mt-0.5 text-xs text-gray-500">{opt.desc}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-500">
        Contact our team to discuss your specific requirements — we accommodate custom requests of all types.
      </p>
    </section>
  );
}
