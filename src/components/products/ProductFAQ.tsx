import type { Product } from "@/lib/types";

function generateFAQs(product: Product): { q: string; a: string }[] {
  const material = product.specs.find(s => s.label.toLowerCase().includes("material"))?.value || "acrylic";
  const thickness = product.specs.find(s => s.label.toLowerCase().includes("thickness"))?.value || "custom";
  const leadTime = product.specs.find(s => s.label.toLowerCase().includes("lead"))?.value || "10–18 business days";
  const moq = product.specs.find(s => s.label.toLowerCase().includes("moq"))?.value || "Flexible";

  return [
    { q: `What materials are used for this ${product.name.toLowerCase()}?`, a: `Our ${product.name.toLowerCase()} is manufactured using premium-grade ${material}. We offer both cast and extruded acrylic options — cast for superior optical clarity and machining, extruded for cost-effective volume production.` },
    { q: "Can I customize the dimensions and design?", a: `Yes. All dimensions including width, height, and thickness are fully customizable. We can also customize shape, color, finish, and add features like cutouts, bends, or multi-tier designs. Send us your specifications or drawings.` },
    { q: "What is the minimum order quantity?", a: `Our MOQ is ${moq}. We handle everything from single prototypes to mass production runs of 10,000+ units. For first-time orders, we recommend starting with a small batch to verify quality before scaling.` },
    { q: "How long does production and shipping take?", a: `Standard production lead time is ${leadTime}, depending on order complexity and quantity. Express service is available for urgent projects. International shipping typically takes 5–10 business days via air freight or 20–35 days via sea freight.` },
    { q: "Can you print my logo or branding on the product?", a: "Yes. We offer UV printing, laser engraving, and silk-screen printing for logos and branding. UV printing provides full-color, durable results. Laser engraving creates an elegant, permanent mark. We can also add dimensional lettering or metal badges." },
    { q: "Do you provide samples before mass production?", a: "Yes. We produce a pre-production sample for your review and approval before starting full production. This ensures the material, dimensions, finish, and branding meet your expectations. Sample cost is typically credited toward your main order." },
    { q: "What quality control measures do you have?", a: "Every product goes through our multi-stage QC process: incoming material inspection, in-process checks during production, and final inspection before packaging. We check dimensions, surface quality, edge finish, printing alignment, and structural integrity." },
    { q: "How do you package products for international shipping?", a: "We use protective packaging tailored to your product: individual polybags to prevent scratches, foam or bubble wrap cushioning, reinforced cartons, and wooden crates for large or fragile items. All export shipments include insurance and tracking." },
  ];
}

export default function ProductFAQ({ product }: { product: Product }) {
  const faqs = generateFAQs(product);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  return (
    <section className="mt-16" aria-labelledby="faq-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h2 id="faq-heading" className="text-2xl font-bold text-[#0F2744] mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4 max-w-3xl">
        {faqs.map((faq, i) => (
          <details key={i} className="group rounded-xl border border-gray-200 bg-white">
            <summary className="px-5 py-4 cursor-pointer text-sm font-semibold text-[#0F2744] hover:text-blue-700 transition-colors list-none [&::-webkit-details-marker]:hidden flex items-center justify-between">
              {faq.q}
              <span className="text-gray-300 group-open:rotate-45 transition-transform text-lg">+</span>
            </summary>
            <p className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
