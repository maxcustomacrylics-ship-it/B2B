import type { ProductImage, ProductImageType } from "@/lib/types";

const SECTION_LABELS: Record<ProductImageType, string> = {
  gallery: "",
  detail: "Product Details",
  manufacturing: "Manufacturing Process",
  application: "Applications",
  packaging: "Safe Packaging & Global Shipping",
};

export default function ProductExtraImages({ images, productName }: { images: ProductImage[]; productName: string }) {
  const structuredImages = images.filter((i): i is ProductImage => typeof i === "object" && "type" in i && "src" in i && !!i.src);
  if (structuredImages.length === 0) return null;

  const sectionTypes: ProductImageType[] = ["detail", "manufacturing", "application", "packaging"];

  return (
    <>
      {sectionTypes.map((type) => {
        const sectionImages = structuredImages.filter((i) => i.type === type);
        if (sectionImages.length === 0) return null;
        return (
          <section key={type} className="mt-16" aria-labelledby={`section-${type}`}>
            <h2 id={`section-${type}`} className="text-2xl font-bold text-[#0F2744] mb-6">
              {SECTION_LABELS[type]}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sectionImages.map((img, i) => (
                <div key={i} className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-200/50">
                    <img
                      src={img.src}
                      alt={img.alt || `${productName} — ${type}`}
                      title={img.title || img.alt}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    {img.title && <p className="text-sm font-medium text-[#0F2744]">{img.title}</p>}
                    <p className="text-xs text-gray-500 mt-0.5">{img.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}
