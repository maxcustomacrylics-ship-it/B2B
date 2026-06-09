import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 sm:py-28 lg:py-36">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary-100/60 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent-100/60 blur-3xl" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed sm:text-xl">
            {t("subtitle")}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary" className="text-base px-8 py-4">
              {t("cta1")}
            </Button>
            <Button href="/products" variant="outline" className="text-base px-8 py-4">
              {t("cta2")}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
