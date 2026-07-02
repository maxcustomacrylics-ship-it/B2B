import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getSettings } from "@/lib/data-store";
import { Star } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Material Compatibility | Max Custom Acrylics",
  description: "Cast acrylic, extruded acrylic, PETG, polycarbonate, PVC foam board, and ABS — material compatibility for laser cutting and CNC machining.",
};

export default async function MaterialsPage() {
  const s = await getSettings();

  const defaultMaterials = [
    { name: "Cast Acrylic", rating: 5, badge: "Excellent", color: "from-blue-100 to-blue-200/60", bestFor: ["Luxury displays", "Signage", "Display cases"], desc: "Premium optical clarity with superior surface hardness.", img: "" },
    { name: "Extruded Acrylic", rating: 4, badge: "Very Good", color: "from-sky-100 to-sky-200/60", bestFor: ["General fabrication", "Retail displays"], desc: "Consistent thickness with good optical properties.", img: "" },
    { name: "PETG", rating: 4, badge: "Very Good", color: "from-emerald-100 to-emerald-200/60", bestFor: ["Protective panels", "Medical applications"], desc: "Excellent impact resistance with good clarity.", img: "" },
    { name: "Polycarbonate", rating: 3, badge: "Moderate", color: "from-amber-100 to-amber-200/60", bestFor: ["Impact-resistant components", "Industrial guards"], desc: "Maximum impact strength and heat resistance.", img: "" },
    { name: "PVC Foam Board", rating: 3, badge: "Moderate", color: "from-purple-100 to-purple-200/60", bestFor: ["Indoor signage", "Exhibitions"], desc: "Lightweight, cost-effective substrate.", img: "" },
    { name: "ABS", rating: 2, badge: "Limited", color: "from-rose-100 to-rose-200/60", bestFor: ["Functional engineering parts"], desc: "Tough, rigid engineering plastic.", img: "" },
  ];

  let materials = defaultMaterials;
  try {
    const list = JSON.parse(s.materialsList || "");
    if (Array.isArray(list) && list.length > 0) {
      const colors = ["from-blue-100 to-blue-200/60", "from-sky-100 to-sky-200/60", "from-emerald-100 to-emerald-200/60", "from-amber-100 to-amber-200/60", "from-purple-100 to-purple-200/60", "from-rose-100 to-rose-200/60"];
      materials = list.map((m: any, i: number) => ({
        name: m.name || "Material",
        rating: Number(m.rating) || 3,
        badge: m.badge || "Moderate",
        color: colors[i % colors.length],
        bestFor: (m.bestFor || "").split(",").map((t: string) => t.trim()).filter(Boolean),
        desc: m.desc || "",
        img: m.img || "",
      }));
    }
  } catch {}

  return (
    <>
      {/* Hero */}
      <section className="relative bg-white" aria-labelledby="materials-hero">
        <Container className="py-12 lg:py-20">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Material Compatibility" }]} />
          <div className="mt-6 max-w-3xl">
            <h1 id="materials-hero" className="text-4xl font-bold tracking-tight text-[#0F2744] sm:text-5xl lg:text-[56px] lg:leading-tight">Material Compatibility</h1>
            <p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">Choosing the appropriate material is essential for achieving the desired appearance, durability and manufacturing performance. Our engineering team can recommend suitable materials based on your application.</p>
          </div>
        </Container>
      </section>

      {/* Material Cards */}
      <section className="bg-gray-50" aria-labelledby="materials-grid">
        <Container className="py-16 lg:py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {materials.map((mat) => (
              <div key={mat.name} className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm flex flex-col">
                <div className={`aspect-[16/9] bg-gradient-to-br ${mat.color} flex items-center justify-center overflow-hidden`}>
                  {mat.img ? <img src={mat.img} alt={mat.name} className="w-full h-full object-cover" /> : (
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/70 shadow-sm">
                      <svg className="w-6 h-6 text-[#0F2744]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/></svg>
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`h-3.5 w-3.5 ${i < mat.rating ? "fill-amber-400 text-amber-400" : "fill-none text-gray-200"}`} aria-hidden="true" />
                    ))}
                    <span className="ml-1.5 text-xs font-medium text-gray-500">{mat.badge}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-[#0F2744]">{mat.name}</h3>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {mat.bestFor.map((tag: string) => (
                      <span key={tag} className="inline-block rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">{tag}</span>
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed flex-1">{mat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-white" aria-labelledby="materials-cta">
        <Container className="py-20 lg:py-28 text-center">
          <h2 className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Need Help Choosing Materials?</h2>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto">Our engineering team can recommend the most suitable material based on your product design and application.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm">Request a Quote<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#0F2744] bg-white px-6 py-3.5 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/></svg>Upload Your Drawing</Link>
          </div>
        </Container>
      </section>
    </>
  );
}
