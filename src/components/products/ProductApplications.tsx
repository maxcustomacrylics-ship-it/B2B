import type { Product } from "@/lib/types";

/**
 * "Applications & Limitations".
 *
 * Stating where a product is *not* suitable looks like a weaker pitch but
 * does the opposite: it reads as engineering competence, and it filters out
 * enquiries that could never have produced a good order. The material
 * limitations below are properties of PMMA itself, not of this factory.
 */
const LIMITATIONS = [
  {
    title: "Chemical exposure",
    detail:
      "Acrylic can craze (develop fine surface cracks) when exposed to alcohol, solvents, or certain cleaning agents. Avoid prolonged contact with isopropyl alcohol and household cleaners.",
  },
  {
    title: "Prolonged direct sunlight",
    detail:
      "Continuous outdoor UV exposure shortens the life of acrylic. For long-term outdoor use, specify UV-stabilised grades and confirm the exposure profile with our engineers.",
  },
  {
    title: "Food contact",
    detail:
      "Acrylic is not automatically food-grade. If the product will touch food or beverages, specify a food-contact-compliant grade so we can quote the correct sheet.",
  },
  {
    title: "Flame-polished edges",
    detail:
      "Flame polishing is limited by thickness and geometry — tight radii and acute corners can distort or crack. We will advise on the right edge finish for your geometry.",
  },
];

export default function ProductApplications({ product }: { product: Product }) {
  // Applications come from the product record when present; the fallback list
  // covers the common end uses for acrylic display products.
  const applications = product.applications?.length
    ? product.applications
    : [
        "Retail & boutique merchandising",
        "Trade show & exhibition displays",
        "Museum & gallery presentation",
        "Office & corporate branding",
        "Hospitality & retail environments",
      ];

  return (
    <section className="mt-16" aria-labelledby="applications-heading">
      <h2 id="applications-heading" className="text-2xl font-bold text-[#0F2744] mb-2">
        Applications &amp; Limitations
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Where this product works well, and where acrylic itself is the wrong
        choice. Tell us your application and we&apos;ll confirm the material and
        finish before you commit to an order.
      </p>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-[#0F2744] mb-4">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-xs text-green-700">
              ✓
            </span>
            Typical applications
          </h3>
          <ul className="space-y-2.5">
            {applications.map((a) => (
              <li key={a} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                {a}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-amber-200 bg-amber-50/40 p-6">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-[#0F2744] mb-4">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-200 text-xs text-amber-800">
              !
            </span>
            Worth knowing before you order
          </h3>
          <dl className="space-y-3">
            {LIMITATIONS.map((l) => (
              <div key={l.title}>
                <dt className="text-sm font-medium text-[#0F2744]">{l.title}</dt>
                <dd className="mt-0.5 text-xs leading-relaxed text-gray-600">
                  {l.detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
