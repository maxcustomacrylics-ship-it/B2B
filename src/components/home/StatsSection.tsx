"use client";

import Container from "@/components/ui/Container";
import { useSettings } from "@/components/providers/SettingsProvider";

export default function StatsSection() {
  const s = useSettings();
  const stats = [
    { value: s.statYears, label: "Years Experience" },
    { value: s.statArea, label: "Projects Delivered" },
    { value: s.statCountries, label: "Countries Served" },
    { value: s.statProducts, label: "Custom Product Types" },
  ];

  return (
    <section className="bg-[#0F2744] py-12">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((st) => (
            <div key={st.label} className="text-center">
              <div className="text-3xl font-bold text-white sm:text-4xl">{st.value}</div>
              <div className="mt-1 text-sm text-blue-200">{st.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
