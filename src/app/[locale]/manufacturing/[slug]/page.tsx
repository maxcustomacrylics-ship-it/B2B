import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import InquiryForm from "@/components/products/InquiryForm";
import { services, getServiceBySlug } from "@/data/services";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getServiceBySlug(slug);
  if (!s) return {};
  return {
    title: `${s.title} | AcrylicPro Custom`,
    description: s.description,
  };
}

export default async function ManufacturingDetailPage({ params }: Props) {
  const { slug } = await params;
  const s = getServiceBySlug(slug);
  if (!s) notFound();

  return (
    <Container className="py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Manufacturing", href: "/manufacturing" }, { label: s.title }]} />
      <SectionHeading title={s.title} subtitle={s.description} />

      <div className="mt-10 max-w-3xl">
        <p className="text-muted leading-relaxed text-lg">{s.longDescription}</p>
        <h2 className="mt-10 text-xl font-semibold text-foreground">Key Features</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {s.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-600 shrink-0" />{f}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 rounded-xl bg-primary-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Need {s.title} Services?</h2>
        <p className="mt-2 text-primary-100">Get a quote within 24 hours for your custom acrylic project.</p>
        <div className="mt-6 max-w-md mx-auto"><InquiryForm /></div>
      </div>
    </Container>
  );
}
