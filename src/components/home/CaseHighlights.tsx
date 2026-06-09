import { useTranslations } from "next-intl";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { getCaseStudies } from "@/lib/data-store";

export default function CaseHighlights() {
  const t = useTranslations("home.cases");
  const cases = getCaseStudies().filter(c => c.featured);

  if (cases.length === 0) return null;

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {cases.slice(0, 3).map((c) => (
            <Link
              key={c.slug}
              href={`/cases/${c.slug}`}
              className="group overflow-hidden rounded-xl bg-white border border-border transition-all hover:shadow-lg"
            >
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                <div className="text-center text-muted">
                  <div className="text-4xl mb-1">📋</div>
                  <span className="text-xs">{c.industry}</span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-primary-600 uppercase tracking-wider">
                  {c.industry}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-primary-600 transition-colors">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-muted line-clamp-2">{c.challenge}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/cases" variant="outline">
            {t("viewAll")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
