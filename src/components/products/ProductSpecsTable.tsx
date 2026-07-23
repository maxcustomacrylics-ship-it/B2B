export default function ProductSpecsTable({ specs }: { specs: { label: string; value: string }[] }) {
  if (!specs || specs.length === 0) return null;
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
            {specs.map((s) => (
              <tr key={s.label}>
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
