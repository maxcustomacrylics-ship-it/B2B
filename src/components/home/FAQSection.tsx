import Link from "next/link";
import Container from "@/components/ui/Container";
import { Upload, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "Can you manufacture based on our drawings or samples?",
    a: "Yes. Send us your CAD files, technical drawings, or even a physical sample. Our engineering team will review everything and confirm manufacturability before providing a quotation.",
  },
  {
    q: "What is your minimum order quantity (MOQ)?",
    a: "MOQ is flexible and depends on the product type. Prototypes and small batches are welcome — typical MOQ starts from 10–50 units. We accommodate both small custom orders and large production runs.",
  },
  {
    q: "Can you help improve our design before production?",
    a: "Absolutely. Our engineering team provides design-for-manufacturing review at no extra cost. We can suggest material optimisations, process improvements, and cost-saving modifications before production begins.",
  },
  {
    q: "What acrylic materials do you use?",
    a: "We work with cast acrylic, extruded acrylic, frosted, coloured, mirror, and specialty acrylic grades. Thicknesses range from 1mm to 50mm. We also process PETG, polycarbonate, PVC and ABS for specific applications.",
  },
  {
    q: "Can you provide samples before mass production?",
    a: "Yes. We strongly recommend a pre-production sample for approval. This allows you to verify dimensions, finish quality, colour accuracy, and overall workmanship before we proceed with the full production run.",
  },
  {
    q: "How do you ensure product quality?",
    a: "Quality control is integrated throughout the process — incoming material inspection, in-process checks at key production stages, final dimensional and visual inspection, and pre-shipment photo reports. You know exactly what you are receiving.",
  },
  {
    q: "How long does production take?",
    a: "Standard production lead time is 10–18 business days depending on complexity and quantity. Rush orders can be completed in 5–7 business days. We provide a confirmed timeline with every quotation.",
  },
  {
    q: "Which countries do you ship to?",
    a: "We ship to over 30 countries worldwide via sea freight, air freight and express courier. We handle export documentation including commercial invoice, packing list and certificate of origin.",
  },
  {
    q: "Can you sign an NDA?",
    a: "Yes. We regularly sign non-disclosure agreements with clients. Your designs, specifications and project details remain confidential throughout our engagement.",
  },
  {
    q: "What file formats do you accept?",
    a: "We accept DXF, DWG, AI, EPS, PDF, SVG (vector), STEP, IGES (3D), and high-resolution reference images. Our engineering team can also work from sketches, photos or physical samples.",
  },
  {
    q: "Can you combine multiple manufacturing processes?",
    a: "Yes — and we do this regularly. A single project often involves laser cutting, CNC machining, diamond polishing, UV printing and assembly. Our engineering team coordinates all processes into one seamless workflow.",
  },
  {
    q: "Why work with Max Custom Acrylics?",
    a: "We combine engineering expertise, access to qualified manufacturing partners, rigorous quality control and professional project management. You get a single point of contact who handles everything from design review to delivery — giving you confidence and saving you time.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-gray-50">
      <Container>
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0F2744] sm:text-4xl">
            Frequently Asked Questions About Custom Acrylic Projects
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about custom acrylic fabrication, engineering support, project coordination, quality control and worldwide delivery.
          </p>
        </div>

        {/* FAQ grid */}
        <div className="max-w-4xl mx-auto grid gap-4 sm:grid-cols-2">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group rounded-xl border border-gray-200 bg-white [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="cursor-pointer px-5 py-4 text-sm font-semibold text-[#0F2744] list-none flex items-start justify-between gap-3">
                <span>{faq.q}</span>
                <span className="shrink-0 text-gray-400 group-open:hidden text-lg leading-none mt-0.5">+</span>
                <span className="shrink-0 text-gray-400 hidden group-open:block text-lg leading-none mt-0.5">−</span>
              </summary>
              <p className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 rounded-xl bg-white border border-gray-200 p-8 text-center max-w-2xl mx-auto shadow-sm">
          <h3 className="text-xl font-bold text-[#0F2744]">Still have questions?</h3>
          <p className="mt-2 text-gray-500 leading-relaxed max-w-lg mx-auto">
            Our engineering team is ready to review your project requirements and recommend the best solution.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm"
            >
              <MessageCircle className="h-4 w-4" /> Ask Our Team
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#0F2744] bg-white px-6 py-3 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors"
            >
              <Upload className="h-4 w-4" /> Upload Your Drawing
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
