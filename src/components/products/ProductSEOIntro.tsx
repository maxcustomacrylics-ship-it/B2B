import type { Product } from "@/lib/types";

export default function ProductSEOIntro({ product }: { product: Product }) {
  return (
    <section className="mt-16 max-w-3xl" aria-labelledby="seo-intro">
      <h2 id="seo-intro" className="text-2xl font-bold text-[#0F2744] mb-4">
        Custom {product.name} — Precision Acrylic Manufacturing
      </h2>
      <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-3">
        <p>
          At Max Custom Acrylics, we specialize in manufacturing high-quality <strong>{product.name.toLowerCase()}</strong> products
          tailored to your exact specifications. With over 15 years of experience in acrylic fabrication, our factory delivers
          precision-engineered solutions for businesses worldwide.
        </p>
        <p>
          Our <strong>{product.name.toLowerCase()}</strong> is manufactured using premium-grade {product.specs.find(s => s.label.toLowerCase().includes("material"))?.value || "acrylic materials"},
          ensuring exceptional clarity, durability, and finish quality. Whether you need a single prototype or mass production,
          our ISO-certified facility can accommodate orders of any scale.
        </p>
        <p>
          Every {product.name.toLowerCase()} we produce undergoes rigorous quality inspection — from material selection and
          precision cutting to edge polishing and final assembly. We serve industries including retail display, cosmetics,
          hospitality, electronics, and corporate branding, delivering products that meet international standards.
        </p>
        <p>
          Fully customizable in size, shape, color, thickness, and finish — our engineering team reviews every project
          to optimize design for manufacturability, ensuring you get the best quality at competitive pricing with reliable
          global shipping.
        </p>
      </div>
    </section>
  );
}
