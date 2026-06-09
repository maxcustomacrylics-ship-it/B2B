import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Award, Clock, Globe, Shield } from "lucide-react";

const icons = [Shield, Award, Clock, Globe];

export default function AboutSection() {
  const t = useTranslations("home.about");

  const features = [
    { key: "feature1", icon: 0 },
    { key: "feature2", icon: 1 },
    { key: "feature3", icon: 2 },
    { key: "feature4", icon: 3 },
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeading
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ key, icon }) => {
            const Icon = icons[icon];
            return (
              <div
                key={key}
                className="group rounded-xl border border-border p-8 text-center transition-all hover:border-primary-200 hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-primary-50 text-primary-600 group-hover:bg-primary-100 transition-colors">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {t(`${key}Title`)}
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {t(`${key}Desc`)}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
