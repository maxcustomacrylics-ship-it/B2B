import Container from "@/components/ui/Container";
import { services } from "@/data/services";

const showSlugs = ["laser-cutting","cnc-machining","diamond-polishing","uv-printing","assembly"];
const capIcons: Record<string, string> = { "laser-cutting":"🔬","cnc-machining":"⚙️","diamond-polishing":"💎","uv-printing":"🖨","assembly":"🔧" };

export default function CapabilitiesSection() {
  const items = showSlugs.map((s) => services.find((x) => x.slug === s)).filter(Boolean) as typeof services;
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Our Manufacturing Capabilities</h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">Complete in-house manufacturing — from raw material to finished product under one roof.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((s) => (
            <div key={s.slug} className="group rounded-xl border border-gray-200 bg-white p-6 text-center hover:shadow-md hover:border-blue-200 transition-all">
              <div className="text-4xl mb-3">{capIcons[s.slug] || "🔩"}</div>
              <h3 className="font-semibold text-[#0F2744]">{s.title}</h3>
              <p className="mt-2 text-xs text-gray-500 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
