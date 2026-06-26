import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  Cog, ShieldCheck, SearchCheck, Globe,
  MessageCircle, Wrench, Upload,
} from "lucide-react";

const features = [
  {
    icon: Cog,
    title: "Engineering Support",
    desc: "Our team reviews drawings, materials and production methods before your project begins.",
  },
  {
    icon: ShieldCheck,
    title: "Qualified Manufacturing Network",
    desc: "We coordinate carefully selected production partners based on your project requirements.",
  },
  {
    icon: SearchCheck,
    title: "Quality-Controlled Production",
    desc: "Every project follows inspection procedures to ensure consistent quality before shipment.",
  },
  {
    icon: Globe,
    title: "Worldwide Delivery",
    desc: "Reliable international logistics support from production through final delivery.",
  },
  {
    icon: MessageCircle,
    title: "Responsive Communication",
    desc: "Fast quotation, clear updates and dedicated project coordination throughout your project.",
  },
  {
    icon: Wrench,
    title: "Tailored Custom Solutions",
    desc: "Every acrylic product is developed according to your application, branding and functional needs.",
  },
];

export default function CustomerSuccess() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-[#0F2744] sm:text-4xl">
            Why Buyers Trust Max Custom Acrylic
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We combine engineering expertise, qualified manufacturing partners and project coordination to help businesses develop custom acrylic products with confidence.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md hover:border-blue-200 transition-all"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                <f.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-[#0F2744]">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Centered statement */}
        <p className="mt-12 text-center text-base text-gray-400 max-w-xl mx-auto leading-relaxed font-medium">
          One partner. One workflow. Reliable project delivery from concept to shipment.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm"
          >
            Discuss Your Project
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#0F2744] bg-white px-6 py-3 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors"
          >
            <Upload className="h-4 w-4" /> Upload Your Drawing
          </Link>
        </div>
      </Container>
    </section>
  );
}
