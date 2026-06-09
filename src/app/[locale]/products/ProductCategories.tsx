"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import ProductFilters from "@/components/products/ProductFilters";
import ProductGrid from "@/components/products/ProductGrid";
import type { Product } from "@/lib/types";

const categories = [
  { value: "all", label: "products.categories.all" },
  { value: "clear-sheets", label: "products.categories.clearSheets" },
  { value: "colored-sheets", label: "products.categories.coloredSheets" },
  { value: "display-products", label: "products.categories.displayProducts" },
  { value: "decorative-panels", label: "products.categories.decorativePanels" },
];

type Props = {
  products: Product[];
};

export function ProductCategories({ products }: Props) {
  const t = useTranslations();
  const [activeCategory, setActiveCategory] = useState("all");

  const translatedCategories = categories.map((cat) => ({
    ...cat,
    label: t(cat.label),
  }));

  const filteredProducts = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-8">
      <ProductFilters
        categories={translatedCategories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <ProductGrid products={filteredProducts} />
    </div>
  );
}
