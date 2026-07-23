import type { Product } from "@/lib/types";

const CATEGORY_LABELS: Record<string, string> = {
  "acrylic-precision-instruments": "Acrylic Precision Instruments",
  "acrylic-displays": "Acrylic Displays",
  "acrylic-boxes": "Acrylic Boxes",
  "acrylic-signage": "Acrylic Signage",
  "acrylic-home-office": "Acrylic Trays & Shelves",
  "acrylic-awards-gifts": "Acrylic Protective Products",
  "acrylic-furniture": "Acrylic Furniture",
  "acrylic-trophies": "Acrylic Trophies",
  "custom-acrylic": "Custom Acrylic Products",
};

export default function ProductSEOIntro({ product }: { product: Product }) {
  const catLabel = CATEGORY_LABELS[product.category] || product.category;
  const material = product.specs.find(s => s.label.toLowerCase().includes("material"))?.value || "acrylic";

  // Use longDescription as the core SEO content; fall back to a short summary
  const longDesc = product.longDescription?.trim();

  return (
    <section className="mt-16 max-w-3xl" aria-labelledby="seo-intro">
      <h2 id="seo-intro" className="text-2xl font-bold text-[#0F2744] mb-4">
        Custom {product.name} — {catLabel} Manufacturer
      </h2>

      {longDesc ? (
        <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-3">
          {longDesc.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          <p>
            <strong>Category:</strong> {catLabel}. <strong>Material:</strong> {material}.
            Manufactured by Max Custom Acrylics — 15+ years of expertise, ISO-certified factory,
            worldwide shipping. Contact us for a free quote within 24 hours.
          </p>
        </div>
      ) : (
        <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-3">
          <p>
            At Max Custom Acrylics, we specialize in manufacturing high-quality{" "}
            <strong>{product.name.toLowerCase()}</strong> for {catLabel.toLowerCase()} applications.
            With over 15 years of experience, our ISO-certified factory delivers precision-engineered
            acrylic solutions to businesses worldwide.
          </p>
          <p>
            Every {product.name.toLowerCase()} is made from premium {material}, fully customizable
            in size, shape, color, thickness, and finish. Whether you need a single prototype or
            mass production, our engineering team optimizes your design for manufacturability and
            consistent quality at competitive pricing.
          </p>
          <p>
            <strong>Category:</strong> {catLabel}. Contact us for a free quote within 24 hours.
          </p>
        </div>
      )}
    </section>
  );
}
