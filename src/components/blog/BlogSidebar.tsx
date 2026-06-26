import { useTranslations } from "next-intl";
import Link from "next/link";
import { getBlogCategories } from "@/data/blogs";

export default function BlogSidebar() {
  const t = useTranslations("blog");
  const categories = getBlogCategories();

  return (
    <aside className="space-y-8">
      {/* Categories */}
      <div className="rounded-xl border border-border bg-white p-6">
        <h3 className="text-lg font-semibold text-foreground">
          {t("categories")}
        </h3>
        <ul className="mt-4 space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <Link
                href={`/blog`}
                className="text-sm text-muted hover:text-primary-600 transition-colors"
              >
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="rounded-xl bg-primary-600 p-6 text-white">
        <h3 className="text-lg font-semibold">Need Custom Acrylic Solutions?</h3>
        <p className="mt-2 text-sm text-primary-100">
          Contact our team for a free consultation and quote.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-block rounded-lg bg-white px-4 py-2 text-sm font-medium text-primary-600 hover:bg-primary-50 transition-colors"
        >
          Request a Quote
        </Link>
      </div>
    </aside>
  );
}
