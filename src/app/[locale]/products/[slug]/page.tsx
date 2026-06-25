import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ProductGrid from "@/components/products/ProductGrid";
import ImageGallery from "@/components/shared/ImageGallery";
import InquiryForm from "@/components/products/InquiryForm";
import SchemaOrg from "@/components/shared/SchemaOrg";
import { generateProductSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { getProductBySlug } from "@/lib/data-store";
import { getProductsByCategory } from "@/data/products";
import type { ProductCategory } from "@/lib/types";
import { SITE_URL } from "@/lib/utils";

export const dynamic = "force-dynamic";

const VALID_CATEGORIES: ProductCategory[] = ["acrylic-displays","acrylic-boxes","acrylic-signage","acrylic-home-office","acrylic-awards-gifts"];

const catMeta: Record<ProductCategory,{title:string;desc:string;intro:string;faq:{question:string;answer:string}[]}> = {
  "acrylic-displays":{title:"Acrylic Displays",desc:"Custom acrylic display stands for retail, cosmetics, jewelry, and food presentation. OEM manufacturing.",intro:"We manufacture premium custom acrylic displays for brands worldwide. From cosmetic display stands to retail counter displays, every product is fabricated to your exact specifications.",faq:[{question:"What is the MOQ?",answer:"Standard MOQ starts at 20–50 units. Contact us for prototyping."},{question:"Can you match my brand colors?",answer:"Yes — colored acrylic, Pantone-matched UV printing, and custom finishes available."},{question:"What is the lead time?",answer:"10–18 business days. Rush orders available."}]},
  "acrylic-boxes":{title:"Acrylic Boxes",desc:"Custom acrylic boxes — storage, donation, ballot, display, and lock boxes for commercial use.",intro:"Precision-fabricated acrylic boxes for retail, institutional, and commercial applications. Crystal-clear construction with custom branding.",faq:[{question:"Waterproof available?",answer:"Yes, solvent-bonded boxes can be made water-resistant."},{question:"Lockable options?",answer:"Key locks, combination locks, and electronic locks available."},{question:"What sizes?",answer:"Any size — custom dimensions are our specialty."}]},
  "acrylic-signage":{title:"Acrylic Signage",desc:"Custom acrylic signs — office, door, name plates, QR code, table, and wall signs.",intro:"Professional corporate signage manufactured with precision cutting, UV printing, and premium finishing.",faq:[{question:"Braille signage?",answer:"Yes, ADA-compliant Braille signage available."},{question:"Weather-resistant?",answer:"UV-cured inks are durable for interior and covered exterior use."},{question:"Mounting options?",answer:"Stand-off, adhesive, screw-mount, magnetic, and free-standing."}]},
  "acrylic-home-office":{title:"Acrylic Home & Office",desc:"Desk organizers, monitor stands, makeup organizers, trays, and book stands for modern spaces.",intro:"Premium acrylic home and office products designed for function and aesthetics. Custom-manufactured to your specifications.",faq:[{question:"Brand logo available?",answer:"Yes — logo engraving and UV printing for corporate gifts and retail."},{question:"What colors?",answer:"Clear, frosted, and colored acrylic. Gold/rose gold trim available."},{question:"Gift packaging?",answer:"Custom retail boxes and foam inserts available for bulk orders."}]},
  "acrylic-awards-gifts":{title:"Acrylic Awards & Gifts",desc:"Custom acrylic awards, trophies, photo frames, and souvenirs for corporate recognition and events.",intro:"Create lasting impressions with custom acrylic awards. Each piece individually crafted with premium materials and elegant finishing.",faq:[{question:"Fully custom design?",answer:"Absolutely — send your concept and our team creates a unique award."},{question:"Minimum order?",answer:"As low as 10 units for custom awards."},{question:"Personalization?",answer:"Individual name engraving and custom messaging available."}]},
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (VALID_CATEGORIES.includes(slug as ProductCategory)) {
    const m = catMeta[slug as ProductCategory];
    return { title: `${m.title} | AcrylicPro Custom`, description: m.desc };
  }
  const p = await getProductBySlug(slug);
  if (!p) return {};
  return { title: `${p.name} | AcrylicPro Custom`, description: p.description };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const t = await getTranslations("products");

  // ── Category view ──
  if (VALID_CATEGORIES.includes(slug as ProductCategory)) {
    const m = catMeta[slug as ProductCategory];
    const products = getProductsByCategory(slug as ProductCategory);
    const faqSchema = generateFAQSchema(m.faq);
    const bcSchema = generateBreadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Products", url: `${SITE_URL}/products` }, { name: m.title, url: `${SITE_URL}/products/${slug}` }]);

    return (
      <>
        <SchemaOrg data={[bcSchema, faqSchema]} />
        <Container className="py-12">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: m.title }]} />
          <h1 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">{m.title}</h1>
          <p className="mt-4 max-w-3xl text-muted leading-relaxed">{m.intro}</p>
          <div className="mt-10"><ProductGrid products={products} /></div>
          <div className="mt-16 border-t pt-12">
            <h2 className="text-2xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6 max-w-3xl">
              {m.faq.map((item,i)=>(<div key={i}><h3 className="font-semibold text-foreground">{item.question}</h3><p className="mt-1 text-muted">{item.answer}</p></div>))}
            </div>
          </div>
          <div className="mt-16 rounded-xl bg-primary-600 p-8 text-center text-white">
            <h2 className="text-2xl font-bold">Ready to Start Your Project?</h2>
            <p className="mt-2 text-primary-100 max-w-xl mx-auto">Tell us your requirements and our team will provide a custom quote within 24 hours.</p>
            <div className="mt-6 max-w-md mx-auto"><InquiryForm /></div>
          </div>
        </Container>
      </>
    );
  }

  // ── Product detail view ──
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const productSchema = generateProductSchema(product);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: t("breadcrumbHome"), url: SITE_URL },
    { name: t("breadcrumbProducts"), url: `${SITE_URL}/products` },
    { name: product.name, url: `${SITE_URL}/products/${product.slug}` },
  ]);

  return (
    <>
      <SchemaOrg data={[productSchema, breadcrumbSchema]} />
      <Container className="py-12">
        <Breadcrumb items={[{ label: t("breadcrumbHome"), href: "/" }, { label: t("breadcrumbProducts"), href: "/products" }, { label: product.name }]} />
        <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ImageGallery images={product.images} alt={product.name} />
          <div>
            <span className="text-sm font-medium text-primary-600 uppercase tracking-wider">{product.category.replace("-"," ")}</span>
            <h1 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">{product.name}</h1>
            <p className="mt-4 text-muted leading-relaxed">{product.longDescription}</p>
            <div className="mt-8"><h2 className="text-lg font-semibold text-foreground">{t("specifications")}</h2>
              <div className="mt-3 divide-y divide-border border-y border-border">
                {product.specs.map((spec)=>(<div key={spec.label} className="flex justify-between py-2.5 text-sm"><span className="text-muted">{spec.label}</span><span className="font-medium text-foreground">{spec.value}</span></div>))}
              </div>
            </div>
            <div className="mt-6"><h2 className="text-lg font-semibold text-foreground">{t("applications")}</h2>
              <div className="mt-3 flex flex-wrap gap-2">{product.applications.map((app)=>(<span key={app} className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700">{app}</span>))}</div>
            </div>
          </div>
        </div>
        <div className="mt-16 rounded-xl bg-gray-50 border border-border p-8">
          <div className="mx-auto max-w-2xl"><h2 className="text-center text-2xl font-bold text-foreground">{t("inquiryTitle")}</h2>
            <p className="mt-2 text-center text-muted text-sm">Fill out the form below and our team will provide a customized quote within 24 hours.</p>
            <div className="mt-8"><InquiryForm productName={product.name} /></div>
          </div>
        </div>
      </Container>
    </>
  );
}
