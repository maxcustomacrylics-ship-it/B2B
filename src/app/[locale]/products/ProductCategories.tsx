"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import ProductFilters from "@/components/products/ProductFilters";
import ProductGrid from "@/components/products/ProductGrid";
import type { Product } from "@/lib/types";

const categories = [
  { value: "all", label: "All Products" },
  { value: "acrylic-displays", label: "Acrylic Displays" },
  { value: "acrylic-boxes", label: "Acrylic Boxes" },
  { value: "acrylic-signage", label: "Acrylic Signage" },
  { value: "acrylic-home-office", label: "Home & Office" },
  { value: "acrylic-awards-gifts", label: "Awards & Gifts" },
];

type Props = {
  products: Product[];
};

export function ProductCategories({ products }: Props) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-8">
      <ProductFilters
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <ProductGrid products={filteredProducts} />
    </div>
  );
}
