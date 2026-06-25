import Link from "next/link";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";

export default function CTASection() {
  const t = useTranslations("home.cta");

  return (
    <section style={{ backgroundColor: "#0F2744" }} className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-blue-200">{t("subtitle")}</p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors shadow-sm"
            >
              {t("button")}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
