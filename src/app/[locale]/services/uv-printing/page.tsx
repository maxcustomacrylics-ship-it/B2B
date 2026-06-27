import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import {
  ArrowRight, Upload, Cog, Wrench, ShieldCheck, Globe,
  Palette, Sun, Layers, ShoppingBag, Monitor, Camera, AlertTriangle, Star,
  FileText, Ruler, ScanEye, Puzzle, MessageSquare, XCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "UV Digital Printing on Acrylic | Max Custom Acrylics",
  description:
    "Full-color UV flatbed printing directly onto acrylic — vibrant, durable, weather-resistant. CMYK + White ink, up to 2.5m × 1.3m, instant curing for fast turnaround.",
};

export default function UvPrintingPage() {
  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section className="relative bg-white overflow-hidden" aria-labelledby="uv-hero-heading">
        <Container className="py-14 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center min-h-[520px] lg:min-h-[560px]">
            <div>
              <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "UV Printing" }]} />
              <h1 id="uv-hero-heading" className="mt-4 text-4xl font-bold tracking-tight text-[#0F2744] sm:text-5xl lg:text-[56px] lg:leading-tight">
                UV Digital Printing on Acrylic
              </h1>
              <p className="mt-5 text-base text-gray-500 leading-relaxed sm:text-lg max-w-[620px]">
                Full-color CMYK + White direct-to-acrylic printing at 1440dpi. Durable, vibrant graphics for branded displays, signage and personalised products.
              </p>
              <p className="mt-3 text-base text-gray-500 leading-relaxed sm:text-lg max-w-[620px]">
                Our engineering team reviews every project and coordinates the most suitable printing process to deliver vivid, production-ready acrylic products with consistent quality and worldwide delivery support.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3" role="group" aria-label="Call to action buttons">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2" aria-label="Request a quote for UV printed acrylic products">
                  Request a Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#0F2744] bg-white px-6 py-3.5 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2" aria-label="Upload your artwork for UV printing quotation">
                  <Upload className="h-4 w-4" aria-hidden="true" /> Upload Your Drawing
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 sm:flex sm:flex-wrap sm:gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-1.5"><Cog className="h-4 w-4 text-gray-400 flex-shrink-0" aria-hidden="true" /> Engineering Review</span>
                <span className="flex items-center gap-1.5"><Wrench className="h-4 w-4 text-gray-400 flex-shrink-0" aria-hidden="true" /> Custom Manufacturing</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-gray-400 flex-shrink-0" aria-hidden="true" /> Quality Inspection</span>
                <span className="flex items-center gap-1.5"><Globe className="h-4 w-4 text-gray-400 flex-shrink-0" aria-hidden="true" /> Worldwide Delivery</span>
              </div>
            </div>
            <div className="relative" aria-hidden="true">
              <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 via-gray-50 to-blue-100 flex items-center justify-center">
                <div className="text-center select-none">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/80 shadow-sm mb-4">
                    <svg className="w-10 h-10 text-[#0F2744]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8" cy="8" r="3.5" /><circle cx="8" cy="8" r="1.5" fill="currentColor" />
                      <circle cx="16.5" cy="16.5" r="3.5" /><circle cx="16.5" cy="16.5" r="1.5" fill="currentColor" />
                      <circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="1" fill="currentColor" />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-400 tracking-wide uppercase">Full-Color UV Digital Printing</p>
                </div>
              </div>
              <span className="sr-only">UV digital printing on acrylic for vibrant branded displays and signage</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ========== WHEN TO CHOOSE SECTION ========== */}
      <section className="bg-gray-50" aria-labelledby="uv-when-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]">
            <h2 id="uv-when-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">
              When Should You Choose UV Digital Printing?
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">
              UV digital printing delivers vibrant, durable graphics directly onto acrylic surfaces. Knowing when this process is the right fit helps you achieve the best visual and functional results.
            </p>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-[7fr_5fr]">
            <div>
              <h3 className="text-xl font-semibold text-[#0F2744]">Best Applications</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: ShoppingBag, title: "Branded Retail Displays", desc: "Full-color logos and graphics with precise brand color matching." },
                  { icon: Monitor, title: "Custom Signage", desc: "Photo-quality output for interior signage and wayfinding systems." },
                  { icon: Layers, title: "Decorative Panels", desc: "Vibrant patterns and imagery for interior design applications." },
                  { icon: Palette, title: "Personalized Products", desc: "Variable data printing for unique corporate gifts and awards." },
                  { icon: Camera, title: "High-Resolution Graphics", desc: "Up to 1,440 dpi for photo-quality reproduction on acrylic." },
                  { icon: Sun, title: "Indoor & Covered Outdoor", desc: "UV-cured inks provide weather resistance for semi-outdoor use." },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-blue-50 text-[#0F2744]">
                      <item.icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <h4 className="mt-3 text-sm font-semibold text-[#0F2744]">{item.title}</h4>
                    <p className="mt-1 text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0F2744]">Consider Other Processes If</h3>
              <div className="mt-6 space-y-4">
                {[
                  { title: "High-Volume Production", desc: "Silk screen printing may be more cost-effective at scale." },
                  { title: "Full Outdoor Exposure", desc: "Additional protective coating or alternative methods recommended." },
                  { title: "Textured Surfaces", desc: "UV printing works best on smooth, flat acrylic surfaces." },
                  { title: "Metallic or Specialty Finishes", desc: "Screen printing offers more metallic and specialty ink options." },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-amber-200 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <h4 className="text-sm font-semibold text-[#0F2744]">{item.title}</h4>
                        <p className="mt-1 text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-14 rounded-2xl border border-blue-200 bg-blue-50/60 p-8 md:p-10 text-center">
            <h3 className="text-xl font-bold text-[#0F2744] sm:text-2xl">Not sure which printing method fits your project?</h3>
            <p className="mt-2 text-gray-500 max-w-lg mx-auto leading-relaxed">
              Our engineering team can review your artwork and recommend the most suitable printing process based on your quantity, substrate and visual requirements.
            </p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2">
              <Upload className="h-4 w-4" aria-hidden="true" /> Upload Your Drawing
            </Link>
          </div>
        </Container>
      </section>

      {/* ========== MATERIAL COMPATIBILITY SECTION ========== */}
      <section className="bg-gray-50" aria-labelledby="uv-materials-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]">
            <h2 id="uv-materials-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Material Compatibility</h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">Choosing the appropriate material is essential for achieving the desired appearance, durability and manufacturing performance. Our engineering team can recommend suitable materials based on your application.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Cast Acrylic", rating: 5, badge: "Excellent", color: "from-blue-100 to-blue-50", bestFor: ["Luxury displays", "Signage", "Display cases"], desc: "Premium optical clarity with superior surface hardness. The preferred choice for high-end display products, awards and architectural applications requiring flawless transparency.", slug: "cast-acrylic" },
              { name: "Extruded Acrylic", rating: 4, badge: "Very Good", color: "from-sky-100 to-sky-50", bestFor: ["General fabrication", "Retail displays"], desc: "Consistent thickness with good optical properties at an economical price point. Ideal for volume production of retail fixtures, POP displays and standard signage.", slug: "extruded-acrylic" },
              { name: "PETG", rating: 4, badge: "Very Good", color: "from-emerald-100 to-emerald-50", bestFor: ["Protective panels", "Medical applications"], desc: "Excellent impact resistance with good clarity and formability. Suitable for protective barriers, medical device housings and retail fixtures requiring durability.", slug: "petg" },
              { name: "Polycarbonate", rating: 3, badge: "Moderate", color: "from-amber-100 to-amber-50", bestFor: ["Impact-resistant components", "Industrial guards"], desc: "Maximum impact strength and heat resistance among clear plastics. Used for machine guards, safety components and industrial applications where durability is critical.", slug: "polycarbonate" },
              { name: "PVC Foam Board", rating: 3, badge: "Moderate", color: "from-purple-100 to-purple-50", bestFor: ["Indoor signage", "Exhibitions"], desc: "Lightweight, cost-effective substrate for indoor signage, exhibition displays and temporary installations. Easy to print and fabricate.", slug: "pvc-foam-board" },
              { name: "ABS", rating: 2, badge: "Limited", color: "from-rose-100 to-rose-50", bestFor: ["Functional engineering parts"], desc: "Tough, rigid engineering plastic for functional components. Suitable for structural parts and industrial applications where optical clarity is not required.", slug: "abs" },
            ].map((mat) => (
              <div key={mat.name} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className={`aspect-[16/9] bg-gradient-to-br ${mat.color} flex items-center justify-center`}>
                  <div className="text-center select-none">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/70 shadow-sm">
                      <Layers className="h-6 w-6 text-[#0F2744]" aria-hidden="true" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`h-3.5 w-3.5 ${i < mat.rating ? "fill-amber-400 text-amber-400" : "fill-none text-gray-200"}`} aria-hidden="true" />
                    ))}
                    <span className="ml-1.5 text-xs font-medium text-gray-500">{mat.badge}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-[#0F2744]">{mat.name}</h3>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {mat.bestFor.map((tag) => (
                      <span key={tag} className="inline-block rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">{tag}</span>
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed">{mat.desc}</p>
                  <Link href={`/materials/${mat.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#0F2744] hover:text-blue-700 transition-colors">Learn More<ArrowRight className="h-3.5 w-3.5" aria-hidden="true" /></Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14 rounded-2xl border border-blue-200 bg-blue-50/60 p-8 md:p-10 text-center">
            <h3 className="text-xl font-bold text-[#0F2744] sm:text-2xl">Need Help Choosing Materials?</h3>
            <p className="mt-2 text-gray-500 max-w-lg mx-auto leading-relaxed">Our engineering team can recommend the most suitable material based on your product design, application and manufacturing requirements.</p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2">Contact Engineering Team<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </Container>
      </section>

      {/* ========== DESIGN GUIDELINES SECTION ========== */}
      <section className="bg-white" aria-labelledby="uv-design-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]">
            <h2 id="uv-design-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Design Guidelines for Better UV Printing Results</h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">Following good artwork preparation practices helps achieve vibrant, durable print quality and reduces production turnaround time.</p>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
            <div className="space-y-4">
              {[
                { icon: FileText, title: "Use High-Resolution Artwork", desc: "Provide artwork at minimum 300dpi at actual print size. Higher resolution ensures sharp text and smooth gradients for professional-quality results on acrylic." },
                { icon: ScanEye, title: "Provide Vector Files When Possible", desc: "AI, EPS or PDF files with outlined text produce the sharpest output. Vector graphics scale without quality loss and enable precise print registration." },
                { icon: Ruler, title: "Specify Pantone Color References", desc: "Provide Pantone references for brand-critical colors. Our pre-press team can match specified colors for consistent branding across your product range." },
                { icon: Puzzle, title: "Plan White Ink Usage", desc: "White ink underlay enables opaque, vibrant printing on clear acrylic. Specify where white ink is needed — full underlay, spot white, or transparent effects." },
                { icon: MessageSquare, title: "Consult Engineering Early", desc: "Early artwork review prevents printing issues and reduces revisions. We can advise on file setup, color strategies and print-proof options before production." },
              ].map((item, i) => (
                <div key={item.title} className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0F2744] text-white flex items-center justify-center text-xs font-bold">{i + 1}</div>
                    <div>
                      <div className="flex items-center gap-2"><item.icon className="h-4 w-4 text-[#0F2744]" aria-hidden="true" /><h3 className="text-sm font-semibold text-[#0F2744]">{item.title}</h3></div>
                      <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative" aria-hidden="true">
              <div className="sticky top-24 rounded-2xl border border-gray-200 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
                <div className="aspect-[4/5] flex items-center justify-center p-8">
                  <svg className="w-full h-full max-w-[320px]" viewBox="0 0 200 260" fill="none" stroke="#0F2744" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="20" y="20" width="160" height="220" rx="4" stroke="#cbd5e1" strokeWidth="1" />
                    <rect x="50" y="50" width="100" height="80" rx="2" stroke="#0F2744" strokeWidth="1.2" />
                    <circle cx="80" cy="75" r="15" fill="#3b82f6" fillOpacity="0.08" stroke="#3b82f6" strokeWidth="0.8" />
                    <circle cx="120" cy="95" r="12" fill="#ef4444" fillOpacity="0.08" stroke="#ef4444" strokeWidth="0.8" />
                    <rect x="60" y="120" width="15" height="15" rx="1" fill="#fbbf24" fillOpacity="0.15" stroke="#f59e0b" strokeWidth="0.8" />
                    <line x1="50" y1="40" x2="150" y2="40" stroke="#94a3b8" strokeWidth="0.6" />
                    <line x1="50" y1="36" x2="50" y2="44" stroke="#94a3b8" strokeWidth="0.6" />
                    <line x1="150" y1="36" x2="150" y2="44" stroke="#94a3b8" strokeWidth="0.6" />
                  </svg>
                </div>
                <div className="px-6 pb-6 text-center"><p className="text-xs text-gray-400">Recommended: provide vector artwork at 300dpi with Pantone references</p></div>
              </div>
            </div>
          </div>
          <div className="mt-12 rounded-2xl border border-blue-200 bg-blue-50/60 p-8 md:p-10 text-center">
            <h3 className="text-xl font-bold text-[#0F2744] sm:text-2xl">Need help preparing your artwork?</h3>
            <p className="mt-2 text-gray-500 max-w-lg mx-auto leading-relaxed">Our pre-press team can review your files and advise on the optimal print setup for your acrylic products.</p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2"><Upload className="h-4 w-4" aria-hidden="true" /> Upload Your Drawing</Link>
          </div>
        </Container>
      </section>

      {/* ========== COMMON DESIGN MISTAKES SECTION ========== */}
      <section className="bg-gray-50" aria-labelledby="uv-mistakes-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]"><h2 id="uv-mistakes-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Common Design Mistakes to Avoid</h2><p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">Understanding common artwork preparation issues helps achieve professional print quality and avoid production delays.</p></div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Low Resolution Artwork", desc: "Images below 300dpi at print size appear pixelated and unprofessional. Always provide high-resolution source files for photo-quality UV printing on acrylic." },
              { title: "Missing Bleed", desc: "Artwork without bleed may show unwanted edges after cutting. Include adequate bleed area around print boundaries to ensure clean, edge-to-edge results." },
              { title: "Unconverted Fonts", desc: "Text not outlined may substitute with different fonts. Convert all text to outlines or embed fonts in your artwork file to guarantee correct typography." },
              { title: "Wrong Color Mode", desc: "RGB files may shift colors when printed in CMYK. Design in CMYK color space and provide Pantone references for brand-critical color matching." },
              { title: "Ignoring White Ink Strategy", desc: "Not planning white underlay for clear acrylic can result in washed-out colors. Specify white ink requirements — full underlay, spot white, or transparent effects." },
              { title: "Skipping Engineering Review", desc: "Pre-press check prevents costly reprints. Our team can review your artwork files and provide print proofs for approval before production runs." },
            ].map((item) => (
              <div key={item.title} className="group rounded-xl border border-rose-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3"><XCircle className="h-5 w-5 text-rose-400 flex-shrink-0 mt-0.5" aria-hidden="true" /><div><h3 className="text-sm font-semibold text-[#0F2744]">{item.title}</h3><p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{item.desc}</p></div></div>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-blue-200 bg-blue-50/60 p-8 md:p-10 text-center">
            <h3 className="text-xl font-bold text-[#0F2744] sm:text-2xl">Good design starts with good communication.</h3>
            <p className="mt-2 text-gray-500 max-w-lg mx-auto leading-relaxed">Our engineering team is happy to review your artwork before production.</p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2744] focus-visible:ring-offset-2"><Upload className="h-4 w-4" aria-hidden="true" /> Upload Your Drawing</Link>
          </div>
        </Container>
      </section>

      {/* ========== TYPICAL APPLICATIONS SECTION ========== */}
      <section className="bg-white" aria-labelledby="uv-applications-heading">
        <Container className="py-16 lg:py-24">
          <div className="max-w-[720px]"><h2 id="uv-applications-heading" className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Typical Applications of UV Printed Acrylic</h2><p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">UV digital printing delivers vibrant, durable graphics directly onto acrylic for branded displays, signage and custom products.</p></div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Branded Retail Displays", desc: "Full-color logos and graphics with precise brand color matching for flagship store displays and retail fixtures.", materials: "Cast Acrylic", color: "from-blue-100 to-blue-50", icon: "🛍" },
              { title: "Custom Signage", desc: "Photo-quality signage for interior wayfinding, directional signs and branded environment graphics with durable UV-cured inks.", materials: "Cast Acrylic, PVC", color: "from-indigo-100 to-indigo-50", icon: "🪧" },
              { title: "Decorative Panels", desc: "Vibrant patterns and imagery for interior design applications including wall panels, room dividers and artistic installations.", materials: "Cast Acrylic", color: "from-purple-100 to-purple-50", icon: "🎨" },
              { title: "POP Displays", desc: "Eye-catching promotional displays with full-color graphics printed directly onto acrylic for maximum visual impact.", materials: "Extruded Acrylic", color: "from-amber-100 to-amber-50", icon: "📢" },
              { title: "Corporate Awards", desc: "Personalized awards and trophies with UV-printed logos, recipient names and achievement details for corporate recognition.", materials: "Cast Acrylic", color: "from-emerald-100 to-emerald-50", icon: "🏆" },
              { title: "Wayfinding Signs", desc: "Clear, durable directional signage with high-contrast UV printing for commercial buildings and public spaces.", materials: "Cast Acrylic", color: "from-teal-100 to-teal-50", icon: "📍" },
              { title: "Personalized Products", desc: "Variable data printing for unique corporate gifts, personalized accessories and custom-branded merchandise.", materials: "Cast Acrylic", color: "from-rose-100 to-rose-50", icon: "🎁" },
              { title: "Promotional Items", desc: "Cost-effective UV-printed promotional products including keychains, stands and branded giveaways for events.", materials: "Extruded Acrylic", color: "from-sky-100 to-sky-50", icon: "🎯" },
            ].map((item) => (
              <div key={item.title} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className={`aspect-[16/10] bg-gradient-to-br ${item.color} flex items-center justify-center`}><span className="text-4xl select-none">{item.icon}</span></div>
                <div className="p-4 flex flex-col flex-1"><h3 className="text-sm font-semibold text-[#0F2744]">{item.title}</h3><p className="mt-1.5 text-sm text-gray-500 leading-relaxed flex-1">{item.desc}</p><span className="mt-3 inline-block text-xs text-gray-400"><span className="font-medium text-gray-500">Typical Materials:</span> {item.materials}</span><Link href="/contact" className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[#0F2744] hover:text-blue-700 transition-colors">Learn More <ArrowRight className="h-3 w-3" aria-hidden="true" /></Link></div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
