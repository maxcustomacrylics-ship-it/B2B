import type { Product } from "@/lib/types";

const OPTIONS = [
  { key: "customImg1", icon: "📏", title: "Size", desc: "Custom width, height, and depth to fit your space." },
  { key: "customImg2", icon: "🔷", title: "Shape", desc: "Rectangular, round, curved, or fully custom contours." },
  { key: "customImg3", icon: "🎨", title: "Color", desc: "Clear, frosted, tinted, mirrored, or custom color matching." },
  { key: "customImg4", icon: "🖌️", title: "Logo", desc: "UV printing, laser engraving, or silk-screen branding." },
  { key: "customImg5", icon: "📐", title: "Structure", desc: "Single piece, multi-tier, modular, or collapsible designs." },
  { key: "customImg6", icon: "✨", title: "Finish", desc: "Diamond polished edges, matte, or textured surfaces." },
  { key: "customImg7", icon: "💡", title: "Lighting", desc: "Integrated LED, edge-lit, or backlit illumination options." },
  { key: "customImg8", icon: "📦", title: "Accessories", desc: "Hardware, mounting brackets, connectors, or fittings." },
];

export default function ProductCustomization({ product, settings }: { product: Product; settings?: Record<string, string> }) {
  return (
    <section className="mt-16" aria-labelledby="customization-heading">
      <h2 id="customization-heading" className="text-2xl font-bold text-[#0F2744] mb-2">Customization Options</h2>
      <p className="text-gray-500 text-sm mb-6">
        Every {product.name.toLowerCase()} can be fully customized. Choose from the following options — our engineering team will help optimize your design.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {OPTIONS.map((opt) => {
          const img = settings?.[opt.key];
          return (
            <div key={opt.title} className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm group">
              {img ? (
                <div className="aspect-[16/10] bg-gradient-to-br from-gray-50 to-gray-200/50">
                  <img src={img} alt={opt.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              ) : (
                <div className="aspect-[16/10] bg-gradient-to-br from-[#0F2744]/5 to-[#0F2744]/10 flex items-center justify-center">
                  <span className="text-3xl opacity-30">{opt.icon}</span>
                </div>
              )}
              <div className="p-4">
                <h4 className="text-sm font-semibold text-[#0F2744]">{opt.title}</h4>
                <p className="mt-1 text-xs text-gray-500">{opt.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-sm text-gray-500">
        Contact our team to discuss your specific requirements — we accommodate custom requests of all types.
      </p>
    </section>
  );
}
