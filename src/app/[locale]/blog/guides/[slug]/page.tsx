import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SchemaOrg from "@/components/shared/SchemaOrg";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/utils";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getGuideBySlug } from "@/lib/data-store";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = await getGuideBySlug(slug);
  if (!guide) return {};
  return { title: `${guide.title} | Max Custom Acrylics`, description: guide.desc };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = await getGuideBySlug(slug);
  if (!guide) notFound();

  return (
    <>
      <section className="relative bg-white" aria-labelledby="guide-hero">
        <Container className="py-12 lg:py-20">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Knowledge Center", href: "/blog" }, { label: guide.title }]} />
          <div className="mt-6 max-w-3xl">
            <h1 id="guide-hero" className="text-4xl font-bold tracking-tight text-[#0F2744] sm:text-5xl lg:text-[56px] lg:leading-tight">{guide.title}</h1>
            <p className="mt-4 text-base text-gray-500 leading-relaxed sm:text-lg">{guide.desc}</p>
          </div>
          {guide.image && (
            <div className="mt-8 max-w-3xl">
              <img src={guide.image} alt={guide.title} className="w-full rounded-xl object-cover aspect-video" />
            </div>
          )}
        </Container>
      </section>

      <section className="bg-gray-50" aria-labelledby="guide-content">
        <Container className="py-16 lg:py-20">
          <div className="max-w-3xl space-y-12">
            {guide.sections.map((section, i) => (
              <div key={i}>
                <h2 id={`section-${i}`} className="text-xl font-bold text-[#0F2744]">{section.heading}</h2>
                <p className="mt-3 text-gray-500 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white" aria-labelledby="guide-cta">
        <Container className="py-20 lg:py-28 text-center">
          <h2 className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Need Help With Your Project?</h2>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto">Our engineering team can provide tailored guidance for your specific application.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm">Request a Quote<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#0F2744] bg-white px-6 py-3.5 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/></svg>Upload Your Drawing</Link>
          </div>
        </Container>
      </section>
    </>
  );
}
