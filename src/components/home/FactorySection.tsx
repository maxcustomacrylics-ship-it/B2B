"use client";

import Container from "@/components/ui/Container";
import { useSettings } from "@/components/providers/SettingsProvider";

const steps = [
  { step: "01", title: "Inquiry & Requirements", desc: "Share your project details, drawings, or reference samples. Our team reviews and provides initial feedback within 24 hours." },
  { step: "02", title: "Engineering Review", desc: "Our engineers evaluate design feasibility, material selection, and manufacturing approach to optimize quality and cost." },
  { step: "03", title: "Quotation & Proposal", desc: "Receive a detailed quotation with transparent pricing, lead time, and production plan tailored to your project." },
  { step: "04", title: "Prototype & Approval", desc: "We produce a prototype or pre-production sample for your evaluation and approval before full production." },
  { step: "05", title: "Production & QC", desc: "Manufacturing proceeds with in-process quality checks at every stage. Inspection reports provided." },
  { step: "06", title: "Packaging & Delivery", desc: "Products are professionally packed with protective materials and shipped via your preferred method worldwide." },
];

export default function FactorySection() {
  const s = useSettings();

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Our Process</span>
          <h2 className="mt-2 text-3xl font-bold text-[#0F2744] sm:text-4xl">{s.factoryTitle}</h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">{s.factoryDesc}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((st, i) => (
            <div key={i} className="flex gap-6 pb-10 last:pb-0">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0F2744] text-white text-sm font-bold">{st.step}</div>
                {i < steps.length - 1 && <div className="w-0.5 flex-1 bg-blue-200 mt-2" />}
              </div>
              {/* Content */}
              <div className="pt-1.5">
                <h3 className="text-lg font-semibold text-[#0F2744]">{st.title}</h3>
                <p className="mt-1 text-gray-500 leading-relaxed">{st.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
