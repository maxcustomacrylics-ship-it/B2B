import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Star } from "lucide-react";
import type { Testimonial } from "@/lib/types";

type Props = { testimonials?: Testimonial[] };

export default function TestimonialSection({ testimonials: propList }: Props) {
  const t = useTranslations("home.testimonials");
  const testimonials = propList ?? [];

  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 6).map((tm) => (
            <div
              key={tm.id}
              className="rounded-xl border border-border bg-white p-6 shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: tm.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <blockquote className="mt-4 text-sm text-muted leading-relaxed">
                &ldquo;{tm.content}&rdquo;
              </blockquote>

              <div className="mt-4 border-t border-border pt-4">
                <div className="font-semibold text-foreground text-sm">
                  {tm.name}
                </div>
                <div className="text-xs text-muted">
                  {tm.role}, {tm.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
