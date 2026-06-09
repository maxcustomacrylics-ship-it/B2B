import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { Scissors, Sparkles, Printer, Flame, Package, PenTool } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Service } from "@/lib/types";

type Props = { services?: Service[] };

const iconMap: Record<string, LucideIcon> = {
  Scissors,
  Sparkles,
  Printer,
  Flame,
  Package,
  PenTool,
};

export default function ServiceOverview({ services: propServices }: Props) {
  const t = useTranslations("home.services");
  const services = propServices ?? [];

  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <div
                key={service.slug}
                className="group rounded-xl border border-border p-6 transition-all hover:border-primary-200 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button href="/services" variant="outline">
            {t("viewAll")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
