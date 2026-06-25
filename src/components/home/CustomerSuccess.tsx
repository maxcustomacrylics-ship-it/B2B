import Container from "@/components/ui/Container";
import type { CaseStudy } from "@/lib/types";

const stories = [
  { client: "USA Retail Chain", industry: "Retail", region: "🇺🇸", challenge: "Custom acrylic display stands delivered for nationwide retail deployment across 200+ locations.", result: "28% sales uplift in display-equipped stores." },
  { client: "UK Cosmetics Brand", industry: "Cosmetics", region: "🇬🇧", challenge: "Premium acrylic countertop displays for beauty product launches in department stores.", result: "Deployed to 150 locations in 6 weeks." },
  { client: "Australia Distributor", industry: "Distribution", region: "🇦🇺", challenge: "Long-term OEM manufacturing partnership for custom acrylic products — consistent quality over 50+ orders.", result: "5-year ongoing partnership." },
];

export default function CustomerSuccess({ cases }: { cases?: CaseStudy[] }) {
  const display = cases && cases.length >= 3 ? cases.slice(0, 3) : stories;
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Trusted by Businesses Worldwide</h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">See how companies around the world partner with us for custom acrylic manufacturing.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {display.map((item: any, i: number) => (
            <div key={i} className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-blue-700 uppercase">{item.industry || item.region}</span>
                <span className="text-lg">{item.region || "🌍"}</span>
              </div>
              <h3 className="font-semibold text-[#0F2744]">{item.client || item.title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{item.challenge || item.challenge}</p>
              <div className="mt-4 pt-3 border-t border-gray-100">
                <p className="text-xs font-medium text-green-700">{item.result || "Successful delivery"}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
