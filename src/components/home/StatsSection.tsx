import Container from "@/components/ui/Container";
import { Cog, ShieldCheck, SearchCheck, Globe } from "lucide-react";

const cards = [
  {
    icon: Cog,
    title: "Engineering Support",
    desc: "Professional technical review before production.",
  },
  {
    icon: ShieldCheck,
    title: "Qualified Manufacturing Network",
    desc: "Carefully selected production partners for different project requirements.",
  },
  {
    icon: SearchCheck,
    title: "Quality-Controlled Production",
    desc: "Inspection throughout the production process to ensure consistent quality.",
  },
  {
    icon: Globe,
    title: "Worldwide Delivery",
    desc: "Reliable international shipping and project coordination.",
  },
];

const promises = [
  "Response within 24 hours",
  "NDA available upon request",
  "Engineering review before quotation",
];

export default function StatsSection() {
  return (
    <section className="bg-gray-50 py-14 lg:py-18">
      <Container>
        {/* Four trust cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl bg-white border border-gray-100 p-6 text-center lg:text-left"
            >
              <div className="mx-auto lg:mx-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                <card.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-[#0F2744]">
                {card.title}
              </h3>
              <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Supporting sentence */}
        <p className="mt-8 text-center text-sm text-gray-400 max-w-3xl mx-auto leading-relaxed">
          One experienced team. Carefully selected production partners. Reliable project delivery from concept to shipment.
        </p>

        {/* Response promises */}
        <div className="mt-6 flex flex-col items-center gap-1.5 sm:flex-row sm:justify-center sm:gap-8">
          {promises.map((p) => (
            <span
              key={p}
              className="flex items-center gap-1.5 text-xs text-gray-500"
            >
              <span className="text-green-600 font-bold" aria-hidden="true">✔</span>
              {p}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
