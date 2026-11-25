import { SUPPLY_POLICY, normalizeSpecValue } from "@/lib/supply-policy";

const CONFIRMED_IN_QUOTE = "Confirmed in quotation";

type Spec = { label: string; value: string };

/**
 * One specification table, built in five ordered blocks:
 * Identity → Technical → Physical → Compliance → Ordering.
 *
 * Values come from the product record. Where the record has no value we show
 * "Confirmed in quotation" rather than a generic industry default — a
 * confident-looking generic number is worse than an honest gap, because it
 * invites a buyer to order against a figure we never committed to.
 */
export default function ProductSpecsTable({
  specs,
  productName,
}: {
  specs: Spec[];
  productName?: string;
}) {
  const find = (keywords: string[]): string | undefined => {
    const hit = specs.find(
      (s) => s.label && keywords.some((k) => s.label.toLowerCase().includes(k))
    );
    if (!hit) return undefined;
    return normalizeSpecValue(hit.label, hit.value);
  };

  const blocks: { title: string; rows: Spec[] }[] = [
    {
      title: "Identity",
      rows: [
        { label: "Product Name", value: productName || "" },
        { label: "Material", value: find(["material"]) || CONFIRMED_IN_QUOTE },
        { label: "Manufacturing Process", value: find(["manufacturing", "process"]) || "Laser cutting, CNC machining, polishing, bonding, assembly" },
      ],
    },
    {
      title: "Technical",
      rows: [
        { label: "Material Grade", value: "PMMA (acrylic) — cell-cast or extruded" },
        { label: "Thickness", value: find(["thickness"]) || CONFIRMED_IN_QUOTE },
        { label: "Thickness Tolerance", value: "Cast: ±0.70 mm @ 3 mm (ISO 7823-1) · Extruded: ±0.15 mm @ 3 mm (ISO 7823-2)" },
        { label: "Dimensional Tolerance", value: find(["tolerance"]) || "±0.2 mm (laser) · ±0.1 mm (CNC)" },
      ],
    },
    {
      title: "Physical",
      rows: [
        { label: "Size Range", value: find(["dimension", "size"]) || "Fully custom — sized to your drawings or specifications" },
        { label: "Surface Finish", value: find(["finish", "surface"]) || "Clear / Frosted / Tinted / Colored / Mirrored" },
        { label: "Edge Treatment", value: find(["edge"]) || "Raw cut · Diamond polished · Flame polished · Beveled · Rounded" },
        { label: "Color Options", value: find(["color"]) || "Clear, Frosted, Tinted, Colored, Mirrored, Pantone matched" },
        { label: "Logo & Branding", value: find(["logo", "printing", "print", "branding"]) || "UV digital printing, laser engraving, silk-screen" },
        { label: "Structure & Assembly", value: find(["customization", "structure"]) || "Bonds, cut-outs, multi-tier builds, hardware assembly" },
      ],
    },
    {
      title: "Compliance",
      rows: [
        { label: "Quality Management", value: SUPPLY_POLICY.certification.full },
        { label: "Application Suitability", value: find(["application"]) || "Retail, hospitality, office, exhibition, museum, laboratory" },
      ],
    },
    {
      title: "Ordering",
      rows: [
        { label: "Minimum Order Quantity", value: SUPPLY_POLICY.moq.full },
        { label: "Lead Time", value: SUPPLY_POLICY.leadTime.full },
        { label: "Sample Policy", value: SUPPLY_POLICY.sample.full },
        { label: "Packaging", value: find(["packaging"]) || "Individual polybag + foam + export-grade reinforced carton" },
        { label: "Shipping", value: find(["shipping"]) || "FOB / CIF / DDP — air freight, sea freight, express courier" },
        { label: "Quotation", value: SUPPLY_POLICY.quote.full },
      ],
    },
  ];

  return (
    <section className="mt-16" aria-labelledby="specs-table-heading">
      <h2 id="specs-table-heading" className="text-2xl font-bold text-[#0F2744] mb-2">
        Technical Specifications
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Values marked &ldquo;Confirmed in quotation&rdquo; depend on your specific
        design and are confirmed in the quotation.
      </p>

      <div className="space-y-8">
        {blocks.map((block) => (
          <div key={block.title}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-2">
              {block.title}
            </h3>
            {/* Horizontal scroll on narrow screens — the table stays readable
                as a two-column spec sheet instead of collapsing into an
                unreadable squeeze. */}
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
              <table className="w-full min-w-[520px] text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-[#0F2744] w-1/3">
                      Specification
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-[#0F2744]">
                      Detail
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {block.rows.map((s) => (
                    <tr key={s.label} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-4 py-3 text-gray-500 font-medium align-top">
                        {s.label}
                      </td>
                      <td className="px-4 py-3 text-[#0F2744]">
                        {s.value === CONFIRMED_IN_QUOTE ? (
                          <span className="text-gray-400 italic">{s.value}</span>
                        ) : (
                          s.value
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
