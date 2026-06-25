import Container from "@/components/ui/Container";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "5,000㎡", label: "Factory Area" },
  { value: "30+", label: "Countries Served" },
  { value: "100+", label: "Custom Product Types" },
];

export default function StatsSection() {
  return (
    <section className="bg-[#0F2744] py-12">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-white sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-blue-200">{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
