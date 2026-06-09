import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ImageGallery from "@/components/shared/ImageGallery";
import InquiryForm from "@/components/products/InquiryForm";
import SchemaOrg from "@/components/shared/SchemaOrg";
import {
  generateProductSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/schema";
import { getProductBySlug, getProducts } from "@/lib/data-store";
import { SITE_URL } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | AcrylicPro Custom`,
      description: product.description,
      images: product.images.map((img) => ({ url: img })),
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const t = await getTranslations("products");

  const productSchema = generateProductSchema(product);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: t("breadcrumbHome"), url: SITE_URL },
    { name: t("breadcrumbProducts"), url: `${SITE_URL}/products` },
    { name: product.name, url: `${SITE_URL}/products/${product.slug}` },
  ]);
  const faqSchema = generateFAQSchema([
    {
      question: `What is the MOQ for ${product.name}?`,
      answer: `The minimum order quantity (MOQ) for ${product.name} is ${product.specs.find((s) => s.label === "MOQ")?.value || "to be confirmed"}. Please contact us for custom requirements.`,
    },
    {
      question: `What customization options are available for ${product.name}?`,
      answer: `We offer full customization including size, thickness, color, edge finish, and surface treatment. Custom designs and specifications are welcome. Contact our team for a detailed consultation.`,
    },
    {
      question: "What is the typical lead time for bulk orders?",
      answer: "Standard lead time is 7-15 business days for bulk orders, depending on quantity and customization requirements. Rush orders may be available upon request.",
    },
    {
      question: "Do you provide samples before bulk production?",
      answer: "Yes, we provide samples for quality evaluation before proceeding with bulk production. Sample lead time is typically 3-5 business days.",
    },
  ]);

  return (
    <>
      <SchemaOrg data={[productSchema, breadcrumbSchema, faqSchema]} />
      <Container className="py-12">
        <Breadcrumb
          items={[
            { label: t("breadcrumbHome"), href: "/" },
            { label: t("breadcrumbProducts"), href: "/products" },
            { label: product.name },
          ]}
        />

        <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Image gallery */}
          <ImageGallery
            images={product.images}
            alt={product.name}
          />

          {/* Product info */}
          <div>
            <span className="text-sm font-medium text-primary-600 uppercase tracking-wider">
              {product.category.replace("-", " ")}
            </span>
            <h1 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-muted leading-relaxed">
              {product.longDescription}
            </p>

            {/* Specifications */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-foreground">
                {t("specifications")}
              </h2>
              <div className="mt-3 divide-y divide-border border-y border-border">
                {product.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex justify-between py-2.5 text-sm"
                  >
                    <span className="text-muted">{spec.label}</span>
                    <span className="font-medium text-foreground">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-foreground">
                {t("applications")}
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.applications.map((app) => (
                  <span
                    key={app}
                    className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Inquiry Form Section */}
        <div className="mt-16 rounded-xl bg-gray-50 border border-border p-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-center text-2xl font-bold text-foreground">
              {t("inquiryTitle")}
            </h2>
            <p className="mt-2 text-center text-muted text-sm">
              Fill out the form below and our team will provide a customized quote within 24 hours.
            </p>
            <div className="mt-8">
              <InquiryForm productName={product.name} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
