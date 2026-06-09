"use client";

import { cn } from "@/lib/utils";

type ProductFiltersProps = {
  categories: { value: string; label: string }[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
};

export default function ProductFilters({
  categories,
  activeCategory,
  onCategoryChange,
}: ProductFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onCategoryChange(cat.value)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-colors",
            activeCategory === cat.value
              ? "bg-primary-600 text-white shadow-sm"
              : "bg-white text-muted border border-border hover:border-primary-300 hover:text-primary-600"
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
