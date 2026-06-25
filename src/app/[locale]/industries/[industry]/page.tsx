import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ProductGrid from "@/components/products/ProductGrid";
import InquiryForm from "@/components/products/InquiryForm";
import SchemaOrg from "@/components/shared/SchemaOrg";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { products } from "@/data/products";
import { SITE_URL } from "@/lib/utils";

const industryData: Record<string, { title: string; desc: string; intro: string; products: string[] }> = {
  cosmetics: { title: "Cosmetics", desc: "Custom acrylic displays and packaging for cosmetics brands — OEM manufacturing with global shipping.", intro: "We manufacture premium acrylic display solutions for the cosmetics industry. From lipstick display stands to skincare tester units and complete counter displays, every product is custom-fabricated to showcase beauty products at their best.", products: ["cosmetic-display","makeup-organizer","display-box","acrylic-storage-box","counter-display"] },
  retail: { title: "Retail", desc: "Acrylic retail displays, POS units, and store fixtures for retail chains and independent stores.", intro: "Our retail display solutions are designed to maximize product visibility and drive sales. From counter displays to floor-standing units, we manufacture durable, attractive acrylic fixtures that enhance any retail environment.", products: ["retail-display-stand","counter-display","display-riser","brochure-holder","acrylic-storage-box"] },
  jewelry: { title: "Jewelry", desc: "Premium acrylic jewelry displays — ring holders, necklace busts, bracelet bars, and watch stands.", intro: "Present fine jewelry with museum-quality clarity using our custom acrylic displays. Precision-crafted with diamond-polished edges, our jewelry displays let every detail of your pieces shine.", products: ["jewelry-display","display-box","acrylic-award","display-riser"] },
  restaurant: { title: "Restaurant", desc: "Acrylic menu holders, table signs, food displays, and QR code stands for restaurants and cafes.", intro: "From digital menu QR stands to elegant table numbers and food display cases, we manufacture the acrylic products restaurants need to create memorable dining experiences.", products: ["menu-holder","food-display-stand","qr-code-sign","table-sign","bakery-display-box"] },
  hotel: { title: "Hotel", desc: "Acrylic signage, displays, and amenities for hotels — from room signs to reception displays.", intro: "Create a consistent, professional image throughout your property with custom acrylic products. Room signage, lobby displays, brochure holders, and amenity presentation — all manufactured to your specifications.", products: ["office-sign","door-sign","brochure-holder","acrylic-tray","tissue-box","wall-sign"] },
  medical: { title: "Medical", desc: "Acrylic protective barriers, equipment covers, signage, and organizational displays for healthcare.", intro: "We manufacture precision acrylic products for medical and healthcare environments. Protective barriers, equipment display covers, patient room signage, and organizational systems — all with medical-grade quality and cleanliness.", products: ["office-sign","door-sign","display-riser","acrylic-storage-box","wall-sign"] },
  electronics: { title: "Electronics", desc: "Acrylic product stands, display fixtures, and enclosure components for electronics brands.", intro: "Showcase electronics products with crystal-clear acrylic displays. Our precision manufacturing ensures every stand, riser, and display component meets the exacting standards of the electronics industry.", products: ["retail-display-stand","counter-display","monitor-stand","display-riser","desk-organizer"] },
  "luxury-packaging": { title: "Luxury Packaging", desc: "Premium acrylic gift boxes, presentation cases, and branded packaging for luxury brands.", intro: "Elevate your brand presentation with custom acrylic packaging. From gift boxes and presentation cases to branded retail packaging, we manufacture luxury acrylic packaging that makes an unforgettable impression.", products: ["display-box","acrylic-storage-box","acrylic-tray","photo-frame","acrylic-souvenir"] },
};

type Props = { params: Promise<{ industry: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry } = await params;
  const data = industryData[industry];
  if (!data) return {};
  return { title: `${data.title} | AcrylicPro Custom`, description: data.desc };
}

export default async function IndustryPage({ params }: Props) {
  const { industry } = await params;
  const data = industryData[industry];
  if (!data) notFound();

  const relatedProducts = products.filter((p) => data.products.includes(p.slug));
  const bcSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Custom Solutions", url: `${SITE_URL}/custom-solutions` },
    { name: "Industries", url: `${SITE_URL}/custom-solutions/industries` },
    { name: data.title, url: `${SITE_URL}/industries/${industry}` },
  ]);

  return (
    <>
      <SchemaOrg data={[bcSchema]} />
      <Container className="py-12">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Custom Solutions", href: "/custom-solutions" }, { label: "Industries", href: "/custom-solutions/industries" }, { label: data.title }]} />
        <h1 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">{data.title}</h1>
        <p className="mt-4 max-w-3xl text-muted leading-relaxed">{data.intro}</p>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Recommended Products</h2>
          <ProductGrid products={relatedProducts} />
        </div>

        <div className="mt-16 rounded-xl bg-primary-600 p-8 text-center text-white">
          <h2 className="text-2xl font-bold">Need a Solution for {data.title}?</h2>
          <p className="mt-2 text-primary-100 max-w-xl mx-auto">Tell us your requirements and we will recommend the best acrylic products for your industry.</p>
          <div className="mt-6 max-w-md mx-auto"><InquiryForm /></div>
        </div>
      </Container>
    </>
  );
}
