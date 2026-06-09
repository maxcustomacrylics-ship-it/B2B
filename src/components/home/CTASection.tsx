import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTASection() {
  const t = useTranslations("home.cta");

  return (
    <section className="py-20 bg-primary-700">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-primary-100">{t("subtitle")}</p>
          <div className="mt-8">
            <Button href="/contact" variant="secondary" className="text-base px-8 py-4">
              {t("button")}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
