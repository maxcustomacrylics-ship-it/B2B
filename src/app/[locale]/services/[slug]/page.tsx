import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SchemaOrg from "@/components/shared/SchemaOrg";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/utils";
import { getServicePage, servicePages } from "@/data/service-pages";
import { ArrowRight, Check, Upload, Search, Cog, ShieldCheck, Globe } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getServicePage(slug);
  if (!s) return {};
  return { title: `${s.h1} | Max Custom Acrylics`, description: s.metaDesc };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = getServicePage(slug);
  if (!s) notFound();

  const faqSchema = generateFAQSchema([
    { question: "Can you manufacture from my drawings or samples?", answer: "Yes. We can review CAD files, technical drawings or physical samples and recommend the most suitable manufacturing solution before production begins." },
    { question: "Can I request a prototype before mass production?", answer: "Yes. Prototype development is available for many projects, allowing you to evaluate dimensions, appearance and functionality before proceeding with larger production quantities." },
    { question: "How is product quality controlled?", answer: "Each project is reviewed by our engineering team and undergoes quality inspection before packaging to help ensure products meet the approved specifications." },
    { question: "Do you support international shipping?", answer: "Yes. We coordinate worldwide delivery and can arrange packaging suitable for international transportation according to customer requirements." },
  ]);
  const bcSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },{ name: "Services", url: `${SITE_URL}/services` },{ name: s.title, url: `${SITE_URL}/services/${slug}` },
  ]);

  return (
    <>
      <SchemaOrg data={[bcSchema, faqSchema]} />
      <Container className="py-12">
        <Breadcrumb items={[{ label: "Home", href: "/" },{ label: "Services", href: "/services" },{ label: s.title }]} />

        {/* Hero */}
        <div className="mt-8 grid gap-10 lg:grid-cols-2 items-center lg:min-h-[600px]">
          {/* Left column */}
          <div className="max-w-[620px]">
            <h1 className="text-4xl font-bold tracking-tight text-[#0F2744] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              {s.h1}
            </h1>
            <p className="mt-6 text-base text-gray-500 leading-relaxed sm:text-lg">{s.intro}</p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#0F2744] hover:border-[#0F2744] transition-colors"
              >
                <Upload className="h-4 w-4" /> Upload Your Drawing
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
              <span className="flex items-center gap-1.5"><Search className="h-4 w-4 text-blue-600 flex-shrink-0" /> Engineering Review</span>
              <span className="flex items-center gap-1.5"><Cog className="h-4 w-4 text-blue-600 flex-shrink-0" /> Custom Manufacturing</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-blue-600 flex-shrink-0" /> Quality Inspection</span>
              <span className="flex items-center gap-1.5"><Globe className="h-4 w-4 text-blue-600 flex-shrink-0" /> Worldwide Delivery</span>
            </div>
          </div>

          {/* Right column — Hero image */}
          <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center overflow-hidden lg:min-h-[400px]">
            <img
              src="/images/services/acrylic-laser-cutting.jpg"
              alt="Custom acrylic laser cutting service for precision fabricated acrylic products"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <span className="absolute text-8xl opacity-15 select-none pointer-events-none">🔬</span>
          </div>
        </div>

        {/* Overview Section */}
        <section className="mt-28" aria-labelledby="overview-heading">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            {/* Left — Images */}
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center overflow-hidden">
                <span className="text-8xl opacity-20 select-none">🔬</span>
              </div>
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-100 to-blue-50 flex items-center justify-center overflow-hidden">
                <span className="text-8xl opacity-20 select-none">📦</span>
              </div>
            </div>

            {/* Right — Text + Highlights */}
            <div>
              <h2 id="overview-heading" className="text-2xl font-bold text-[#0F2744] sm:text-3xl">
                Precision Acrylic Laser Cutting Solutions
              </h2>

              {s.overview ? (
                <div className="mt-5 space-y-4 text-gray-500 leading-relaxed">
                  <p>{s.overview.para1}</p>
                  <p>{s.overview.para2}</p>
                  <p>{s.overview.para3}</p>
                </div>
              ) : (
                <p className="mt-5 text-gray-500 leading-relaxed">{s.whatIs}</p>
              )}

              {/* Key Highlights */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  { icon: Check, title: "Clean Edge Finish", desc: "Laser-cut edges come out flame-polished and ready for use." },
                  { icon: Check, title: "High Precision Cutting", desc: "Tolerances as tight as ±0.1mm for consistent production quality." },
                  { icon: Check, title: "Complex Custom Shapes", desc: "Intricate geometries not possible with traditional cutting methods." },
                  { icon: Check, title: "Flexible Production Quantities", desc: "From single prototypes to thousands of identical parts." },
                ].map((h) => (
                  <div key={h.title} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4">
                    <h.icon className="h-5 w-5 text-green-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-[#0F2744] text-sm">{h.title}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* When to Choose */}
        <section className="mt-28">
          <div className="max-w-[1280px] mx-auto text-center mb-12">
            <h2 className="text-2xl font-bold text-[#0F2744] sm:text-3xl">When Should You Choose {s.title}?</h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">{s.title} is an excellent choice for many custom acrylic applications, but selecting the right process depends on your design, material and project requirements.</p>
          </div>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-[#0F2744] mb-5">Best Applications</h3>
              <div className="space-y-3">
                {[{t:"Intricate Shapes",d:"Ideal for complex contours and detailed cut patterns."},{t:"Smooth Edge Finish",d:"Produces clean polished edges on suitable acrylic materials."},{t:"Fast Prototyping",d:"Suitable for prototype development and low-volume production."},{t:"Retail Displays",d:"Perfect for display stands, signage and branded fixtures."},{t:"Custom Fabrication",d:"Supports highly customized acrylic components."},{t:"Efficient Production",d:"Suitable for repeat production with consistent quality."}].map((x)=>(<div key={x.t} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4"><span className="text-xl shrink-0">✓</span><div><h4 className="font-semibold text-[#0F2744] text-sm">{x.t}</h4><p className="text-xs text-gray-500 mt-0.5">{x.d}</p></div></div>))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0F2744] mb-5">Consider Other Processes If</h3>
              <div className="space-y-3">
                {[{t:"Deep Grooves Required",d:"Consider CNC Machining."},{t:"Thick Material Processing",d:"Alternative machining methods may be more suitable."},{t:"Threaded Features",d:"Secondary machining may be required."},{t:"Three-Dimensional Machining",d:"CNC machining is often recommended."}].map((x)=>(<Link key={x.t} href="/services/cnc-machining" className="flex items-start gap-3 rounded-xl border border-amber-100 bg-amber-50/50 p-4 group"><span className="text-lg shrink-0">⚠</span><div className="flex-1"><h4 className="font-semibold text-[#0F2744] text-sm">{x.t}</h4><p className="text-xs text-gray-500 mt-0.5">{x.d}</p></div></Link>))}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="mt-28">
          <div className="max-w-[1280px] mx-auto text-center mb-12">
            <h2 className="text-2xl font-bold text-[#0F2744] sm:text-3xl">{s.title} vs CNC Machining</h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">Both {s.title.toLowerCase()} and CNC machining are widely used for custom acrylic fabrication. Choosing the right process depends on your design, material and performance requirements.</p>
          </div>
          <div className="max-w-3xl mx-auto rounded-2xl border border-gray-200 overflow-hidden bg-white">
            {[{l:"Suitable Materials",a:"Cast & Extruded Acrylic, PETG, PC, ABS",b:"Cast & Extruded Acrylic, PETG, PC, ABS, PVC"},{l:"Complex Shapes",a:"Excellent for intricate 2D profiles",b:"Excellent for 3D contours"},{l:"Edge Finish",a:"Flame-polished straight from machine",b:"Requires secondary polishing"},{l:"Production Speed",a:"Fast for sheet cutting",b:"Faster for 3D features"},{l:"Prototype Support",a:"Quick turnaround, no tooling cost",b:"Quick turnaround, no tooling cost"},{l:"Engraving Capability",a:"Built-in, excellent detail",b:"Possible with V-bit tooling"},{l:"Deep Machining",a:"Limited to sheet thickness",b:"Excellent for deep pockets"},{l:"3D Features",a:"2D profile only",b:"Full 3D capability"},{l:"Typical Applications",a:"Displays, signage, panels, parts",b:"Structural parts, enclosures, fixtures"}].map((r,i)=>(<div key={i} className={`grid grid-cols-3 text-sm ${i===0?"bg-gray-50 font-semibold text-[#0F2744]":i%2===0?"bg-white":"bg-gray-50/50"}`}><div className="px-5 py-3 border-r border-gray-100">{r.l}</div><div className="px-5 py-3 border-r border-gray-100 text-gray-600">{r.a}</div><div className="px-5 py-3 text-gray-600">{r.b}</div></div>))}
          </div>
        </section>

        {/* Materials We Process */}
        <section className="mt-28" aria-labelledby="materials-heading">
          <div className="max-w-[1280px] mx-auto text-center mb-12">
            <h2 id="materials-heading" className="text-2xl font-bold text-[#0F2744] sm:text-3xl">Materials We Process</h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Selecting the right material is essential for achieving the desired appearance, durability and performance of your custom acrylic products. Our engineering team helps recommend the most suitable material based on your application and project requirements.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { n:"Cast Acrylic", r:"★★★★★", rl:"Excellent", b:["Luxury displays","Signage","Display cases"], d:"Superior optical clarity and premium surface finish — the ideal choice for high-end applications.", e:"💎" },
              { n:"Extruded Acrylic", r:"★★★★☆", rl:"Very Good", b:["General fabrication","Retail displays","Volume production"], d:"Cost-effective with consistent thickness and excellent machinability.", e:"📋" },
              { n:"PETG", r:"★★★★☆", rl:"Very Good", b:["Protective panels","Medical applications","Thermoformed parts"], d:"Impact-resistant and durable — excellent for toughness without sacrificing clarity.", e:"🛡" },
              { n:"Polycarbonate (PC)", r:"★★★☆☆", rl:"Moderate", b:["Impact-resistant components","Industrial guards"], d:"250× stronger than glass — best where extreme impact resistance matters.", e:"🔩" },
              { n:"PVC Foam Board", r:"★★★☆☆", rl:"Moderate", b:["Indoor signage","Exhibition displays"], d:"Lightweight and cost-effective for indoor applications.", e:"📰" },
              { n:"ABS", r:"★★☆☆☆", rl:"Limited", b:["Functional engineering parts"], d:"Rigid engineering plastic for functional components where clarity is not required.", e:"⚙️" },
            ].map((m)=>(<div key={m.n} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg transition-all flex flex-col"><div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center overflow-hidden relative"><span className="text-6xl opacity-30 transition-transform duration-300 group-hover:scale-110 select-none">{m.e}</span><span className="absolute top-3 right-3 rounded-full bg-white/90 px-2 py-1 text-xs font-bold text-[#0F2744] shadow-sm">{m.r}</span></div><div className="p-5 flex flex-col flex-1"><div className="flex items-center justify-between mb-1"><h3 className="font-semibold text-[#0F2744]">{m.n}</h3><span className="text-[10px] text-gray-400 font-medium">{m.rl}</span></div><p className="text-sm text-gray-500 leading-relaxed">{m.d}</p><div className="mt-3 pt-3 border-t border-gray-100"><span className="text-[10px] text-gray-400 uppercase tracking-wide">Best For</span><div className="mt-1.5 flex flex-wrap gap-1">{m.b.map((x)=>(<span key={x} className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] text-blue-700">{x}</span>))}</div></div><Link href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#0F2744] hover:text-blue-700 transition-colors">Learn More<ArrowRight className="h-4 w-4"/></Link></div></div>))}
          </div>
        </section>

        {/* Our Laser Cutting Capabilities */}
        <section className="mt-28" aria-labelledby="capabilities-heading">
          <div className="max-w-[1280px] mx-auto">
            <h2 id="capabilities-heading" className="text-2xl font-bold text-[#0F2744] sm:text-3xl text-center">
              Our {s.title} Capabilities
            </h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto text-center leading-relaxed">
              Our engineering team evaluates every project and coordinates the most suitable {s.title.toLowerCase()} process to ensure reliable quality, efficient production and consistent results.
            </p>

            <div className="mt-10 grid gap-10 lg:grid-cols-5 items-start">
              {/* Left — intro + help card */}
              <div className="lg:col-span-2 space-y-6">
                <p className="text-gray-500 leading-relaxed">
                  Every project begins with an engineering review. We evaluate your drawings, discuss your application requirements, and determine the optimal manufacturing approach — including material selection, process parameters, finishing options and quality control checkpoints.
                </p>
                <div className="rounded-2xl bg-blue-50 border border-blue-100 p-6">
                  <h3 className="font-semibold text-[#0F2744]">Need help preparing your drawings?</h3>
                  <p className="mt-2 text-sm text-gray-500">Our engineering team can review your drawings and recommend the most suitable manufacturing process before production begins.</p>
                  <Link href="/contact" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#0F2744] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#1a3a5c] transition-colors"><Upload className="h-4 w-4" /> Upload Your Drawing</Link>
                </div>
              </div>

              {/* Right — capability table */}
              <div className="lg:col-span-3 rounded-2xl border border-gray-200 overflow-hidden bg-white">
                {[
                  { label: "Project Type", value: "Custom-made according to drawings or samples" },
                  { label: "Production Support", value: "Prototype development and volume production" },
                  { label: "Cutting Shapes", value: "Simple, complex and irregular geometries" },
                  { label: "Material Options", value: "Cast Acrylic, Extruded Acrylic, PETG, Polycarbonate, ABS, PVC Foam Board" },
                  { label: "Engineering Review", value: "Material selection, design optimization, manufacturing recommendations" },
                  { label: "Quality Control", value: "Visual inspection, dimensional verification, packaging inspection" },
                  { label: "File Formats", value: "AI, PDF, DXF, DWG, STEP, IGES" },
                  { label: "Additional Services", value: "UV Printing, Diamond Polishing, Assembly, Packaging, Worldwide Delivery" },
                ].map((row, i) => (
                  <div key={i} className={`flex flex-col sm:flex-row sm:items-center px-5 py-3.5 gap-1 sm:gap-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                    <span className="text-xs font-semibold text-[#0F2744] sm:w-36 shrink-0 uppercase tracking-wide">{row.label}</span>
                    <span className="text-sm text-gray-500">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Manufactured with This Service */}
        <section className="mt-28" aria-labelledby="products-heading">
          <div className="max-w-[1280px] mx-auto text-center mb-12">
            <h2 id="products-heading" className="text-2xl font-bold text-[#0F2744] sm:text-3xl">
              Products Manufactured with {s.title}
            </h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Explore some of the custom acrylic products commonly produced using precision {s.title.toLowerCase()} for retail, commercial and industrial applications.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Acrylic Display Stand", tags: ["Laser Cut","Retail","OEM"], desc: "Custom display stands for retail counters, trade shows and product showcases with clean edges and precise dimensions.", emoji: "🖼" },
              { name: "Acrylic Display Box", tags: ["Custom","Display","Retail"], desc: "Transparent display cases and boxes with polished edges for showcasing products in retail environments.", emoji: "📦" },
              { name: "Acrylic Sign", tags: ["Laser Cut","Commercial","Custom"], desc: "Professional interior signage with crisp lettering, custom shapes and precision-cut mounting holes.", emoji: "📋" },
              { name: "POP Display", tags: ["Retail","OEM","Display"], desc: "Point-of-purchase display components manufactured to brand specifications for retail marketing campaigns.", emoji: "🏪" },
              { name: "Acrylic Brochure Holder", tags: ["Commercial","Custom","Retail"], desc: "Wall-mounted and counter-top literature holders with precision-cut pockets for professional presentation.", emoji: "📄" },
              { name: "Protective Shield", tags: ["Industrial","Medical","Custom"], desc: "Transparent protective barriers and panels manufactured to precise dimensions for commercial and medical use.", emoji: "🛡" },
              { name: "Custom Acrylic Panel", tags: ["Custom","Laser Cut","OEM"], desc: "Bespoke acrylic panels cut to customer specifications with custom shapes, holes and edge finishing.", emoji: "🔲" },
              { name: "Custom Acrylic Parts", tags: ["OEM","Industrial","Custom"], desc: "Precision-fabricated acrylic components and parts manufactured according to engineering drawings and CAD files.", emoji: "⚙️" },
            ].map((prod) => (
              <Link key={prod.name} href="/products" className="group rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg transition-all flex flex-col">
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center overflow-hidden relative">
                  <span className="text-6xl opacity-30 transition-transform duration-300 group-hover:scale-110 select-none">{prod.emoji}</span>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-semibold text-[#0F2744] text-sm">{prod.name}</h3>
                  <p className="mt-1.5 text-xs text-gray-500 leading-relaxed flex-1">{prod.desc}</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {prod.tags.map((tag) => (<span key={tag} className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] text-gray-500">{tag}</span>))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 rounded-2xl bg-gray-50 border border-gray-200 p-8 text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-[#0F2744]">Looking for a Custom Acrylic Product?</h3>
            <p className="mt-2 text-gray-500 leading-relaxed max-w-lg mx-auto">
              Share your drawings or project requirements and our engineering team will recommend the most suitable manufacturing solution.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[#0F2744] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm">Request a Quote</Link>
              <Link href="/products" className="inline-flex items-center gap-2 rounded-lg border-2 border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-[#0F2744] hover:border-[#0F2744] transition-colors">Browse All Products</Link>
            </div>
          </div>
        </section>

        {/* How Your Project Works */}
        <section className="mt-28" aria-labelledby="workflow-heading">
          <div className="max-w-[1280px] mx-auto text-center mb-12">
            <h2 id="workflow-heading" className="text-2xl font-bold text-[#0F2744] sm:text-3xl">
              How Your {s.title} Project Works
            </h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto leading-relaxed">
              From your initial inquiry to worldwide delivery, our engineering team coordinates every step to help ensure a smooth, efficient and quality-controlled manufacturing process.
            </p>
          </div>

          {/* Steps grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { num: "01", icon: "📋", title: "Request & Drawing Review", desc: "Share your drawings, samples or project requirements. Our engineering team reviews the design and manufacturing feasibility." },
              { num: "02", icon: "🔬", title: "Material Recommendation", desc: "We recommend suitable materials and manufacturing options based on your product application, appearance and performance requirements." },
              { num: "03", icon: "📊", title: "Quotation & Confirmation", desc: "Receive a detailed quotation, review the project scope and confirm specifications before production begins." },
              { num: "04", icon: "⚙️", title: "Prototype or Production", desc: "Depending on your project requirements, we coordinate prototype development or full-scale production through qualified manufacturing partners." },
              { num: "05", icon: "✅", title: "Quality Inspection", desc: "Every order undergoes quality inspection before packaging to help ensure it meets the approved project requirements." },
              { num: "06", icon: "🚚", title: "Packaging & Worldwide Delivery", desc: "Products are carefully packaged and arranged for reliable international shipment according to customer requirements." },
            ].map((step) => (
              <div key={step.num} className="group rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md hover:border-blue-200 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 text-lg">{step.icon}</span>
                  <span className="text-xs font-bold text-blue-600 tracking-wider">{step.num}</span>
                </div>
                <h3 className="font-semibold text-[#0F2744] text-sm">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-12 rounded-2xl bg-blue-50 border border-blue-100 p-8 text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-[#0F2744]">Need Engineering Assistance?</h3>
            <p className="mt-2 text-gray-500 leading-relaxed max-w-lg mx-auto">
              Not sure which manufacturing process or material is right for your project? Our engineering team can review your drawings and recommend the most suitable solution before production begins.
            </p>
            <Link href="/contact" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#0F2744] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm"><Upload className="h-4 w-4" /> Upload Your Drawing</Link>
          </div>
        </section>

        {/* Design Guidelines */}
        <section className="mt-28">
          <div className="max-w-[1280px] mx-auto text-center mb-12">
            <h2 className="text-2xl font-bold text-[#0F2744] sm:text-3xl">Design Guidelines for Better Laser Cutting Results</h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">Following good design practices helps improve manufacturing efficiency, product quality and overall project success.</p>
          </div>
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div className="space-y-4">
              {[
                { t: "Use Vector Files", d: "Preferred formats include AI, DXF and DWG for precise toolpath generation." },
                { t: "Consider Material Thickness", d: "Choose material thickness according to product function and structural requirements." },
                { t: "Avoid Extremely Small Details", d: "Very fine details may increase manufacturing complexity and cost." },
                { t: "Plan Assembly Features", d: "Design slots and tabs with assembly requirements in mind for easier fabrication." },
                { t: "Consult Engineering Early", d: "Early design review can reduce revisions and overall production costs." },
              ].map((g) => (
                <div key={g.t} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-5 hover:shadow-sm transition-all">
                  <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <div><h3 className="font-semibold text-[#0F2744] text-sm">{g.t}</h3><p className="text-sm text-gray-500 mt-0.5">{g.d}</p></div>
                </div>
              ))}
            </div>
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center overflow-hidden lg:sticky lg:top-24">
              <div className="text-center p-8">
                <span className="text-8xl opacity-20 select-none">📐</span>
                <p className="mt-4 text-sm text-gray-400 max-w-xs mx-auto">CAD-style engineering diagram illustrating recommended laser cutting design practices</p>
              </div>
            </div>
          </div>
          <div className="mt-10 rounded-2xl bg-blue-50 border border-blue-100 p-8 text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-[#0F2744]">Need help reviewing your design?</h3>
            <Link href="/contact" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#0F2744] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm"><Upload className="h-4 w-4"/>Upload Your Drawing</Link>
          </div>
        </section>

        {/* Why Choose This Service */}
        <section className="mt-28" aria-labelledby="why-heading">
          <div className="max-w-[1280px] mx-auto text-center mb-12">
            <h2 id="why-heading" className="text-2xl font-bold text-[#0F2744] sm:text-3xl">
              Why Choose {s.title}?
            </h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto leading-relaxed">
              {s.title.toLowerCase()} provides an ideal balance of precision, efficiency and design flexibility, making it one of the most widely used manufacturing methods for custom acrylic products.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "🎯", title: "High Precision", desc: "Accurately cut complex shapes and detailed designs to meet demanding project requirements." },
              { icon: "✨", title: "Clean Edge Finish", desc: "Produce smooth, polished-looking edges that often require minimal post-processing." },
              { icon: "🎨", title: "Design Flexibility", desc: "Support custom dimensions, intricate patterns and unique product designs based on customer drawings." },
              { icon: "⚡", title: "Efficient Production", desc: "An efficient process suitable for both prototypes and repeat production while maintaining consistent quality." },
              { icon: "📐", title: "Material Compatibility", desc: "Suitable for a wide range of acrylic sheet types and thicknesses depending on project requirements." },
              { icon: "🔧", title: "Engineering Support", desc: "Our engineering team reviews each project and recommends the most suitable manufacturing approach to optimize quality, cost and production efficiency." },
            ].map((card) => (
              <div key={card.title} className="group rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md hover:border-blue-200 transition-all">
                <div className="text-2xl mb-3">{card.icon}</div>
                <h3 className="font-semibold text-[#0F2744] text-sm">{card.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-28" aria-labelledby="faq-heading">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-10">
              <h2 id="faq-heading" className="text-2xl font-bold text-[#0F2744] sm:text-3xl">Frequently Asked Questions</h2>
              <p className="mt-3 text-gray-500 max-w-xl mx-auto leading-relaxed">
                Find answers to the most common questions about custom acrylic {s.title.toLowerCase()}, engineering support, materials, production and worldwide delivery.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { q: "Can you manufacture from my drawings or samples?", a: "Yes. We can review CAD files, technical drawings or physical samples and recommend the most suitable manufacturing solution before production begins." },
                { q: "What file formats do you accept?", a: "We commonly work with AI, PDF, DXF, DWG, STEP and IGES files. If you are unsure, simply send us your available files and our engineering team will review them." },
                { q: "Can I request a prototype before mass production?", a: "Yes. Prototype development is available for many projects, allowing you to evaluate dimensions, appearance and functionality before proceeding with larger production quantities." },
                { q: "Which materials are available for laser cutting?", a: "Depending on your application, we can coordinate the processing of Cast Acrylic, Extruded Acrylic, PETG, Polycarbonate, ABS and other suitable plastic materials." },
                { q: "Can laser cutting be combined with other manufacturing processes?", a: "Yes. Laser cutting can be combined with services such as UV printing, diamond polishing, CNC machining and assembly according to project requirements." },
                { q: "How is product quality controlled?", a: "Each project is reviewed by our engineering team and undergoes quality inspection before packaging to help ensure products meet the approved specifications." },
                { q: "Do you support international shipping?", a: "Yes. We coordinate worldwide delivery and can arrange packaging suitable for international transportation according to customer requirements." },
                { q: "How can I start my custom acrylic project?", a: "Simply send us your drawings, product specifications or project ideas through the Request a Quote or Upload Your Drawing buttons. Our engineering team will review your requirements and provide recommendations." },
              ].map((faq, i) => (
                <details key={i} className="group rounded-2xl border border-gray-200 bg-white [&_summary::-webkit-details-marker]:hidden" open={i === 0}>
                  <summary className="cursor-pointer px-6 py-4 text-sm font-semibold text-[#0F2744] list-none flex items-start justify-between gap-4">
                    <span>{faq.q}</span>
                    <span className="shrink-0 text-gray-400 group-open:hidden text-lg leading-none mt-0.5">+</span>
                    <span className="shrink-0 text-gray-400 hidden group-open:block text-lg leading-none mt-0.5">−</span>
                  </summary>
                  <p className="px-6 pb-4 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-10 rounded-2xl bg-gray-50 border border-gray-200 p-8 text-center">
              <h3 className="text-xl font-bold text-[#0F2744]">Still Have Questions?</h3>
              <p className="mt-2 text-gray-500 leading-relaxed max-w-lg mx-auto">
                Our engineering team is happy to review your project and recommend the most suitable manufacturing solution.
              </p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[#0F2744] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm">Request a Quote</Link>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg border-2 border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-[#0F2744] hover:border-[#0F2744] transition-colors"><Upload className="h-4 w-4" /> Upload Your Drawing</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Support */}
        <section className="mt-28" aria-labelledby="industries-heading">
          <div className="max-w-[1280px] mx-auto text-center mb-12">
            <h2 id="industries-heading" className="text-2xl font-bold text-[#0F2744] sm:text-3xl">Industries We Support</h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Precision acrylic {s.title.toLowerCase()} is widely used across various industries to manufacture high-quality custom acrylic products for commercial, retail and industrial applications.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Retail Display", slug: "retail-display", products: ["Display Stand","Display Box","POP Display"], desc: "Custom display fixtures, product showcases and point-of-purchase displays for retail environments.", emoji: "🏪" },
              { name: "Cosmetics", slug: "cosmetics-display", products: ["Counter Display","Tester Unit","Makeup Organizer"], desc: "Premium acrylic displays and organizers for beauty and cosmetic brands worldwide.", emoji: "💄" },
              { name: "Jewelry", slug: "jewelry-display", products: ["Ring Display","Watch Stand","Display Case"], desc: "Luxury display stands, showcases and presentation accessories for fine jewelry.", emoji: "💍" },
              { name: "Medical", slug: "medical-healthcare", products: ["Equipment Cover","Protective Barrier","Signage"], desc: "Precision acrylic components for healthcare, laboratory and medical equipment.", emoji: "🏥" },
              { name: "Restaurant", slug: "restaurant-hospitality", products: ["Menu Holder","Table Sign","Food Display"], desc: "Menu holders, countertop displays, protective panels and signage for hospitality.", emoji: "🍽" },
              { name: "Hotel", slug: "hotel-hospitality", products: ["Room Sign","Amenity Tray","Brochure Holder"], desc: "Custom acrylic signage, room accessories and hospitality display solutions.", emoji: "🏨" },
              { name: "Museum", slug: "museum-art-gallery", products: ["Display Vitrine","Exhibit Stand","Info Panel"], desc: "Protective display cases, exhibit stands and information panels for cultural institutions.", emoji: "🏛" },
              { name: "Electronics", slug: "electronics-industry", products: ["Device Stand","Protective Cover","Demo Fixture"], desc: "Product display stands, demonstration fixtures and protective components for electronics.", emoji: "📱" },
            ].map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg transition-all flex flex-col">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center overflow-hidden relative">
                  <span className="text-6xl opacity-30 transition-transform duration-300 group-hover:scale-110 select-none">{ind.emoji}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-[#0F2744]">{ind.name}</h3>
                  <p className="mt-1.5 text-sm text-gray-500 leading-relaxed flex-1">{ind.desc}</p>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wide">Typical Products</span>
                    <div className="mt-1.5 flex flex-wrap gap-1">{ind.products.map((p)=>(<span key={p} className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] text-gray-500">{p}</span>))}</div>
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#0F2744] hover:text-blue-700 transition-colors">Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" /></span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Related Services */}
        <div className="mt-28">
          <h2 className="text-2xl font-bold text-[#0F2744] mb-6">Related Services</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{s.relatedServices.map((rs)=>{const r=servicePages.find(x=>x.slug===rs);return r?<Link key={rs} href={`/services/${rs}`} className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 hover:border-blue-200 transition-colors"><span className="font-medium text-[#0F2744]">{r.title}</span><ArrowRight className="h-4 w-4 text-gray-400" /></Link>:null;})}</div>
        </div>

        {/* Final CTA */}
        <section className="mt-28" aria-labelledby="cta-heading">
          <div className="max-w-[1280px] mx-auto">
            <div className="rounded-[20px] bg-gray-50 border border-gray-200 p-10 lg:p-14 shadow-sm">
              <div className="grid gap-10 lg:grid-cols-5 items-center">
                {/* Left — Trust + copy */}
                <div className="lg:col-span-3">
                  <h2 id="cta-heading" className="text-2xl font-bold text-[#0F2744] sm:text-3xl">Ready to Start Your Custom Acrylic Project?</h2>
                  <p className="mt-4 text-gray-500 leading-relaxed max-w-xl">
                    Whether you already have engineering drawings or are still developing your product concept, our engineering team can help evaluate your requirements, recommend suitable manufacturing solutions and coordinate reliable production from prototype to final delivery.
                  </p>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {[
                      { t: "Engineering Review", d: "Every project begins with a technical review to ensure manufacturability." },
                      { t: "Qualified Manufacturing Network", d: "Production is coordinated through carefully selected manufacturing partners." },
                      { t: "Quality Inspection", d: "Products are inspected before packaging and shipment." },
                      { t: "Worldwide Delivery", d: "Support for international shipping and export packaging." },
                    ].map((h) => (
                      <div key={h.t} className="flex items-start gap-2.5"><Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" aria-hidden="true" /><div><h4 className="font-semibold text-[#0F2744] text-sm">{h.t}</h4><p className="text-xs text-gray-500 mt-0.5">{h.d}</p></div></div>
                    ))}
                  </div>
                </div>

                {/* Right — Inquiry card */}
                <div className="lg:col-span-2 rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-[#0F2744]">Start Your Inquiry</h3>
                  <p className="mt-1 text-sm text-gray-500">Upload your drawings or share your project requirements. Our team will review your project and respond with suitable recommendations.</p>
                  <div className="mt-5 space-y-2.5">
                    <Link href="/contact" className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-4 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm">Request a Quote</Link>
                    <Link href="/contact" className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-[#0F2744] hover:border-[#0F2744] transition-colors"><Upload className="h-4 w-4" /> Upload Your Drawing</Link>
                  </div>
                  <p className="mt-4 text-center text-xs text-gray-400">We typically respond within one business day.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </Container>
    </>
  );
}
