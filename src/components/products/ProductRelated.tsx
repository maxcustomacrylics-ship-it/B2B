import Link from "next/link";
import type { Product, ProductImage } from "@/lib/types";

function getImgUrl(img: string | ProductImage): string {
  return typeof img === "string" ? img : img.src;
}

export default function ProductRelated({ current, allProducts }: { current: Product; allProducts: Product[] }) {
  const related = allProducts
    .filter((p) => p.slug !== current.slug && p.category === current.category)
    .slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="mt-16" aria-labelledby="related-heading">
      <h2 id="related-heading" className="text-2xl font-bold text-[#0F2744] mb-2">Related Products</h2>
      <p className="text-gray-500 text-sm mb-6">Explore more products in this category.</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {related.map((p) => (
          <Link key={p.slug} href={`/products/${p.slug}`} className="group rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-200/50 flex items-center justify-center">
              {p.images?.[0] ? (
                <img src={getImgUrl(p.images[0])} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              ) : (
                <svg className="w-8 h-8 text-gray-300/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
              )}
            </div>
            <div className="p-3">
              <h3 className="text-sm font-semibold text-[#0F2744] group-hover:text-blue-700 transition-colors line-clamp-2">{p.name}</h3>
              <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-[#0F2744] group-hover:text-blue-700 transition-colors">
                View Details →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
