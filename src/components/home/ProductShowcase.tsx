import { useTranslations } from "next-intl";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ProductCard from "@/components/products/ProductCard";
import type { Product } from "@/lib/types";

type Props = { products?: Product[] };

export default function ProductShowcase({ products: propProducts }: Props) {
  const t = useTranslations("home.products");
  const products = (propProducts ?? []).filter(p => p.featured).slice(0, 4);

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/products" variant="outline">
            {t("viewAll")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
