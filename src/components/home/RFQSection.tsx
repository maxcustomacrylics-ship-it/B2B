import Container from "@/components/ui/Container";
import InquiryForm from "@/components/products/InquiryForm";
import { FileText, Truck, ShieldCheck } from "lucide-react";

export default function RFQSection() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="grid gap-12 lg:grid-cols-5 items-start">
          {/* Left — info */}
          <div className="lg:col-span-2">
            <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Get Started</span>
            <h2 className="mt-2 text-3xl font-bold text-[#0F2744] sm:text-4xl">Request a Free Quote</h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Tell us about your project and receive a detailed quotation within 24 hours. No minimum order — we handle prototypes to mass production.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { icon: ShieldCheck, title: "ISO 9001 Certified", desc: "Consistent quality you can trust" },
                { icon: Truck, title: "Global Shipping", desc: "Sea, air, and express to your door" },
                { icon: FileText, title: "Free Design Review", desc: "DFM feedback with every quote" },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700"><item.icon className="h-5 w-5" /></div>
                  <div><h4 className="font-semibold text-[#0F2744] text-sm">{item.title}</h4><p className="text-sm text-gray-500">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3 rounded-xl bg-white border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#0F2744] mb-4">Send Your Requirements</h3>
            <InquiryForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
