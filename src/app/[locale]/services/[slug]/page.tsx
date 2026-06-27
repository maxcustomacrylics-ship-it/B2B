import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import InquiryForm from "@/components/products/InquiryForm";
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

  const faqSchema = generateFAQSchema(s.faqs);
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
              { name: "Cast Acrylic", badge: "Premium Finish", desc: "Excellent optical clarity and premium surface finish. Ideal for high-end displays, luxury retail fixtures, signage and custom fabricated products requiring glass-like transparency.", emoji: "💎" },
              { name: "Extruded Acrylic", badge: "Cost Effective", desc: "A cost-effective material offering consistent thickness and excellent machinability. Suitable for general-purpose applications, volume production and projects with tighter budget requirements.", emoji: "📋" },
              { name: "PETG", badge: "High Impact", desc: "A durable and impact-resistant plastic suitable for protective panels, retail displays, thermoformed products and applications requiring toughness without sacrificing clarity.", emoji: "🛡" },
              { name: "Polycarbonate (PC)", badge: "Maximum Strength", desc: "A high-strength engineering plastic providing outstanding impact resistance — 250× stronger than glass. Used for demanding industrial, safety and structural applications.", emoji: "🔩" },
              { name: "ABS", badge: "Industrial Grade", desc: "A versatile engineering plastic commonly used for functional components, equipment housings, industrial parts and applications requiring rigidity and durability.", emoji: "⚙️" },
              { name: "PVC Foam Board", badge: "Lightweight", desc: "A lightweight material suitable for signage, exhibition graphics, indoor display applications and projects where weight reduction is a priority without sacrificing print quality.", emoji: "📰" },
            ].map((mat) => (
              <div key={mat.name} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg transition-all flex flex-col">
                {/* Image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center overflow-hidden relative">
                  <span className="text-6xl opacity-30 transition-transform duration-300 group-hover:scale-110 select-none">{mat.emoji}</span>
                  <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-[#0F2744] shadow-sm">{mat.badge}</span>
                </div>
                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-[#0F2744]">{mat.name}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed flex-1">{mat.desc}</p>
                  <Link href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#0F2744] hover:text-blue-700 transition-colors">Learn More <ArrowRight className="h-4 w-4" /></Link>
                </div>
              </div>
            ))}
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
        <div className="mt-16"><h2 className="text-2xl font-bold text-[#0F2744] mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl">{s.faqs.map((f,i)=>(<div key={i} className="rounded-xl border border-gray-200 bg-white p-5"><h3 className="font-semibold text-[#0F2744]">{f.question}</h3><p className="mt-2 text-sm text-gray-500">{f.answer}</p></div>))}</div>
        </div>

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

        {/* Related Services + CTA */}
        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-[#0F2744] mb-6">Related Services</h2>
            <div className="grid gap-3 sm:grid-cols-2">{s.relatedServices.map((rs)=>{const r=servicePages.find(x=>x.slug===rs);return r?<Link key={rs} href={`/services/${rs}`} className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 hover:border-blue-200 transition-colors"><span className="font-medium text-[#0F2744]">{r.title}</span><ArrowRight className="h-4 w-4 text-gray-400" /></Link>:null;})}</div>
          </div>
          <div className="rounded-xl bg-[#0F2744] p-6 text-center text-white"><h3 className="text-xl font-bold">Start Your Project</h3><p className="mt-2 text-sm text-blue-200">Get a free quote within 24 hours.</p><div className="mt-4"><InquiryForm /></div></div>
        </div>

      </Container>
    </>
  );
}
