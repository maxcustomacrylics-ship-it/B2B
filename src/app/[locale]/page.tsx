import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import StatsSection from "@/components/home/StatsSection";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import FactorySection from "@/components/home/FactorySection";
import CustomerSuccess from "@/components/home/CustomerSuccess";
import TestimonialSection from "@/components/home/TestimonialSection";
import BlogPreview from "@/components/home/BlogPreview";
import CTASection from "@/components/home/CTASection";
import SchemaOrg from "@/components/shared/SchemaOrg";
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/lib/schema";
import { getCaseStudies, getTestimonials, getBlogPosts } from "@/lib/data-store";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: t("schema.organizationDescription"),
    description:
      "Professional B2B acrylic board customization service — precision manufacturing, custom cutting, UV printing, and global shipping. ISO certified factory with 15+ years of experience.",
    openGraph: {
      title: "AcrylicPro Custom — B2B Acrylic Board Customization Services",
      description:
        "Premium acrylic board customization for your business. ISO certified, 15+ years experience, global shipping.",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "AcrylicPro Custom — B2B Acrylic Board Customization",
      description:
        "Premium acrylic board customization for your business. ISO certified, 15+ years experience, global shipping.",
    },
  };
}

export default async function HomePage() {
  const t = await getTranslations();

  const orgSchema = generateOrganizationSchema();
  const webSiteSchema = generateWebSiteSchema();

  const [cases, testimonials, blogPosts] = await Promise.all([
    getCaseStudies(),
    getTestimonials(),
    getBlogPosts(),
  ]);

  return (
    <>
      <SchemaOrg data={[orgSchema, webSiteSchema]} />
      <main className="bg-slate-50 text-slate-900">
        <Hero />
        <StatsSection />
        <CapabilitiesSection />
        <CategoryShowcase />
        <FactorySection />
        <CustomerSuccess cases={cases} />
        <TestimonialSection testimonials={testimonials} />
        <BlogPreview posts={blogPosts} />
        <CTASection />
      </main>
    </>
  );
}
