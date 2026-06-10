"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/types";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group overflow-hidden rounded-xl border border-border bg-white transition-all hover:shadow-lg"
    >
      <div className="aspect-square bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center relative">
        {!imgError ? (
          <Image
            src={product.images[0] ?? ""}
            alt={product.name}
            fill
            className="object-cover"
            onError={() => setImgError(true)}
            unoptimized
          />
        ) : (
          <div className="text-center text-muted">
            <div className="text-5xl mb-2">🪟</div>
            <span className="text-xs">Click to view details</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <span className="text-xs font-medium text-primary-600 uppercase tracking-wider">
          {product.category.replace("-", " ")}
        </span>
        <h3 className="mt-1.5 text-base font-semibold text-foreground group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>
        <p className="mt-1.5 text-sm text-muted leading-relaxed line-clamp-2">
          {product.description}
        </p>
        <div className="mt-3 flex items-center text-sm font-medium text-primary-600">
          <span>View Details</span>
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
