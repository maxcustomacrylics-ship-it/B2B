import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  FileText, Search, ClipboardCheck, Cube,
  Users, ShieldCheck, Package, Truck, Upload,
} from "lucide-react";

const steps = [
  { icon: FileText, num: "01", title: "Project Inquiry", desc: "Share your drawings, ideas or requirements." },
  { icon: Search, num: "02", title: "Engineering Review", desc: "Review drawings, materials and manufacturing feasibility." },
  { icon: ClipboardCheck, num: "03", title: "Solution & Quotation", desc: "Recommend suitable production methods and provide a detailed quotation." },
  { icon: Cube, num: "04", title: "Prototype (Optional)", desc: "Produce samples for approval before mass production." },
  { icon: Users, num: "05", title: "Production Coordination", desc: "Coordinate qualified manufacturing partners and monitor production progress." },
  { icon: ShieldCheck, num: "06", title: "Quality Inspection", desc: "Inspect dimensions, finish, assembly and packaging before shipment." },
  { icon: Package, num: "07", title: "Secure Packaging", desc: "Use appropriate protective packaging for international transportation." },
  { icon: Truck, num: "08", title: "Worldwide Delivery", desc: "Arrange reliable shipping and support your project until delivery." },
];

export default function FactorySection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Our Process</span>
          <h2 className="mt-2 text-3xl font-bold text-[#0F2744] sm:text-4xl">
            From Concept to Delivery
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Every custom acrylic project is unique. From engineering review to global delivery, we coordinate every stage to ensure a smooth and reliable project experience.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-5 pb-10 last:pb-0">
              {/* Timeline column */}
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                  <step.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-blue-100 mt-2" aria-hidden="true" />
                )}
              </div>
              {/* Content */}
              <div className="pt-1.5 pb-2">
                <span className="text-xs font-semibold text-blue-600 tracking-wide">
                  {step.num}
                </span>
                <h3 className="mt-0.5 text-base font-semibold text-[#0F2744]">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-xl bg-gray-50 border border-gray-200 p-8 text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-[#0F2744]">
            Ready to start your custom acrylic project?
          </h3>
          <p className="mt-2 text-gray-500 leading-relaxed max-w-lg mx-auto">
            Our team is ready to review your drawings and recommend the best solution for your application.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm"
            >
              Start Your Project
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
