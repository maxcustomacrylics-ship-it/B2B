import { readFileSync, writeFileSync } from "fs";

const pages = {
  "laser-cutting": { h1: "Custom Acrylic Laser Cutting Services", desc: "Precision laser cutting solutions for custom acrylic displays, signage, retail fixtures, protective panels and industrial components." },
  "cnc-machining": { h1: "Precision CNC Acrylic Machining Services", desc: "Multi-axis CNC routing for 3D acrylic parts including beveled edges, threaded holes and contoured surfaces for structural and industrial applications." },
  "diamond-polishing": { h1: "Premium Diamond Edge Polishing for Acrylic", desc: "Optical-grade edge finishing using progressive diamond abrasives — the premium choice for luxury displays, awards and high-end retail products." },
  "uv-printing": { h1: "UV Digital Printing on Acrylic", desc: "Full-color CMYK + White direct-to-acrylic printing at 1440dpi. Durable, vibrant graphics for branded displays, signage and personalised products." },
  "bonding-assembly": { h1: "Professional Acrylic Assembly & Packaging", desc: "Complete product assembly including hardware integration, bonding, quality inspection and export-ready packaging — finished goods delivered to your door." },
  "oem-project-support": { h1: "Acrylic Quality Control & Project Support", desc: "Multi-stage inspection throughout production with documented reports — from incoming materials to pre-shipment approval." },
};

for (const [slug, data] of Object.entries(pages)) {
  const f = `src/app/[locale]/services/${slug}/page.tsx`;
  let s = readFileSync(f, "utf8");

  const label = data.h1.split(" ").slice(0, 3).join(" ");
  const hero = `      {/* ========== HERO SECTION ========== */}
      <section className="relative bg-white" aria-labelledby="${slug}-hero-heading">
        <Container className="py-12 lg:py-16">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "${label}" }]} />
          <div className="mt-6 max-w-3xl">
            <h1 id="${slug}-hero-heading" className="text-4xl font-bold tracking-tight text-[#0F2744] sm:text-5xl lg:text-[56px] lg:leading-tight">${data.h1}</h1>
            <p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">${data.desc}</p>
          </div>
        </Container>
      </section>

`;

  // Insert after the opening <> fragment
  const insertionPoint = s.indexOf("return (") + 8;
  // Find the next section marker
  const nextSection = s.indexOf("{/* ==========", insertionPoint);
  if (nextSection === -1) { console.log(slug + ": NO NEXT SECTION"); continue; }

  s = s.substring(0, nextSection) + hero + s.substring(nextSection);
  writeFileSync(f, s);
  console.log(slug + ": DONE");
}
