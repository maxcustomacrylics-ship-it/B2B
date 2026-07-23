import Link from "next/link";

const STEPS = [
  { step: "01", title: "Design Review", desc: "Our engineers review your drawings and optimize for manufacturability." },
  { step: "02", title: "Material Selection", desc: "We select the optimal acrylic grade, thickness, and finish for your application." },
  { step: "03", title: "Prototype", desc: "A pre-production sample is made for your approval before mass production." },
  { step: "04", title: "Production", desc: "Laser cutting, CNC machining, polishing, UV printing, and assembly at scale." },
  { step: "05", title: "Quality Inspection", desc: "Every piece is inspected for dimensions, finish, and structural integrity." },
  { step: "06", title: "Packaging", desc: "Protective packaging with individual wrapping, foam, and export-grade cartons." },
  { step: "07", title: "Shipping", desc: "Global logistics with tracking, insurance, and delivery to your door." },
];

export default function ProductManufacturing() {
  return (
    <section className="mt-16" aria-labelledby="manufacturing-heading">
      <h2 id="manufacturing-heading" className="text-2xl font-bold text-[#0F2744] mb-6">Our Manufacturing Process</h2>
      <div className="space-y-4">
        {STEPS.map((s, i) => (
          <div key={s.step} className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0F2744] text-white text-xs font-bold">
              {s.step}
            </div>
            <div className={`flex-1 pb-4 ${i < STEPS.length - 1 ? "border-l-2 border-dashed border-gray-200 pl-4" : "pl-4"}`}>
              <h3 className="text-sm font-semibold text-[#0F2744]">{s.title}</h3>
              <p className="text-xs text-gray-500 mt-0.5">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F2744] hover:text-blue-700 transition-colors">
          Start your project →
        </Link>
      </div>
    </section>
  );
}
