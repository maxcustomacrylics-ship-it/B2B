import Container from "@/components/ui/Container";

const faqs = [
  { q: "Can you customize products?", a: "Yes. All of our products are custom-manufactured to your specifications including size, material, color, finish, and branding." },
  { q: "What is your MOQ?", a: "Our MOQ is flexible depending on the product type. Prototypes and small batches are welcome — typical MOQ starts from 10–50 units." },
  { q: "How long is production?", a: "Standard production lead time is 10–18 business days depending on complexity and quantity. Rush orders available in 5–7 days." },
  { q: "Can you help with design?", a: "Absolutely. Our engineering team provides design-for-manufacturing review, 3D rendering, and prototyping support at no extra cost for production orders." },
  { q: "What materials are available?", a: "We work with cast acrylic, extruded acrylic, frosted, colored, mirror, and specialty acrylic in thicknesses from 1mm to 50mm." },
  { q: "Do you ship worldwide?", a: "Yes. We ship to 30+ countries via sea freight, air freight, and express courier. We handle export documentation and logistics." },
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">Quick answers to common questions about working with us.</p>
        </div>
        <div className="max-w-3xl mx-auto grid gap-4 sm:grid-cols-2">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-semibold text-[#0F2744]">{faq.q}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
