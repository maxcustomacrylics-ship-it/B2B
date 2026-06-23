import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SchemaOrg from "@/components/shared/SchemaOrg";
import { generateOrganizationSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us | AcrylicPro Custom",
  description: "Learn about AcrylicPro Custom — 15+ years of acrylic manufacturing experience, ISO certified factory, serving B2B clients worldwide.",
};

export default function AboutPage() {
  const orgSchema = generateOrganizationSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "About Us", url: `${SITE_URL}/about` },
  ]);

  return (
    <>
      <SchemaOrg data={[orgSchema, breadcrumbSchema]} />
      <Container className="py-12">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />

        <article className="mt-8 mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">About Us</h1>

          <section className="mt-8 space-y-4 text-muted leading-relaxed">
            <p className="text-lg">
              <strong className="text-foreground">AcrylicPro Custom</strong> is a professional B2B acrylic board customization manufacturer with over <strong className="text-foreground">15 years</strong> of industry experience. We specialize in precision acrylic cutting, shaping, UV printing, and finishing for commercial clients worldwide.
            </p>

            <p>
              Our state-of-the-art manufacturing facility is <strong className="text-foreground">ISO 9001 certified</strong> and equipped with advanced CNC cutting machines, laser engravers, UV flatbed printers, and automated edge polishing lines. We handle projects ranging from small-batch custom orders to high-volume production runs.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-foreground">Why Choose Us</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                { title: "ISO Certified Factory", desc: "Strict quality control processes ensure every product meets international standards." },
                { title: "15+ Years Experience", desc: "Deep expertise across retail, hospitality, architecture, and industrial sectors." },
                { title: "Global Shipping", desc: "Reliable logistics network serving clients across North America, Europe, Asia, and Middle East." },
                { title: "Custom Solutions", desc: "From material selection to final finishing — every project is tailored to your specifications." },
                { title: "Fast Turnaround", desc: "Standard lead time of 7–15 business days with express options available." },
                { title: "Design Support", desc: "In-house engineering team provides DFM reviews, 3D renderings, and prototyping." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-white p-5">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-foreground">Our Capabilities</h2>
            <ul className="mt-4 space-y-2 text-muted list-disc pl-5">
              <li>CNC precision cutting (tolerance ±0.1mm)</li>
              <li>Laser cutting & engraving</li>
              <li>UV flatbed digital printing (up to 2.5m × 1.3m)</li>
              <li>Heat bending, forming & thermoforming</li>
              <li>Edge polishing (flame, bevel, diamond)</li>
              <li>Screen printing & pad printing</li>
              <li>Drilling, tapping & hardware insertion</li>
              <li>Assembly, kitting & custom packaging</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-foreground">Industries We Serve</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Retail & Visual Merchandising · Hospitality & Interior Design · Exhibition & Trade Shows · Architecture & Construction · Electronics & Industrial Equipment · Medical & Laboratory · Automotive & Transportation · Marine & Outdoor
            </p>
          </section>
        </article>
      </Container>
    </>
  );
}
