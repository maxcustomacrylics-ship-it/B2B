export default function ProductSpecsTable({ specs }: { specs: { label: string; value: string }[] }) {
  const find = (keywords: string[]) => specs.find(s => s.label && keywords.some(k => s.label.toLowerCase().includes(k)))?.value;

  const fullSpecs: { label: string; value: string }[] = [
    { label: "Material", value: find(["material"]) || "Cast & Extruded Acrylic (PMMA)" },
    { label: "Thickness", value: find(["thickness"]) || "1mm – 25mm (customizable)" },
    { label: "Tolerance", value: find(["tolerance"]) || "±0.1mm (CNC), ±0.2mm (Laser)" },
    { label: "Manufacturing Process", value: find(["manufacturing","process"]) || "CNC Machining, Laser Cutting, Polishing, Bonding, Assembly" },
    { label: "Surface Finish", value: find(["finish","surface"]) || "Diamond Polished / Flame Polished / Matte / Frosted / Mirrored" },
    { label: "Color Options", value: find(["color"]) || "Clear, Frosted, Tinted, Colored, Mirrored, UV-Printed" },
    { label: "Logo & Branding", value: find(["logo","printing","print","branding"]) || "UV Digital Printing, Laser Engraving, Silk-Screen" },
    { label: "Edge Treatment", value: find(["edge"]) || "Diamond Polished, Flame Polished, Beveled, Rounded" },
    { label: "Customization", value: find(["customization"]) || "Size, Shape, Thickness, Color, Finish, Logo, Structure, Packaging" },
    { label: "MOQ", value: find(["moq","minimum"]) || "Flexible — prototypes to mass production" },
    { label: "Lead Time", value: find(["lead"]) || "10–18 business days (standard); express available" },
    { label: "Packaging", value: find(["packaging"]) || "Individual polybag + foam + export-grade reinforced carton" },
    { label: "Shipping", value: find(["shipping"]) || "FOB / CIF — Air Freight, Sea Freight, Express Courier" },
    { label: "Application", value: find(["application"]) || "Retail, Hospitality, Office, Exhibition, Museum, Laboratory" },
  ];

  return (
    <section className="mt-16" aria-labelledby="specs-table-heading">
      <h2 id="specs-table-heading" className="text-2xl font-bold text-[#0F2744] mb-4">Technical Specifications</h2>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-[#0F2744] w-1/3">Specification</th>
              <th className="px-4 py-3 text-left font-semibold text-[#0F2744]">Detail</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {fullSpecs.map((s) => (
              <tr key={s.label} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-4 py-3 text-gray-500 font-medium">{s.label}</td>
                <td className="px-4 py-3 text-[#0F2744]">{s.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
