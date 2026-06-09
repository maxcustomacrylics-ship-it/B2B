import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumb from "@/components/ui/Breadcrumb";
import InquiryForm from "@/components/products/InquiryForm";
import SchemaOrg from "@/components/shared/SchemaOrg";
import { generateBreadcrumbSchema, generateOrganizationSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/utils";
import { getSettings } from "@/lib/data-store";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("contact");

  return {
    title: t("title"),
    description: t("subtitle"),
    openGraph: {
      title: `${t("title")} | AcrylicPro Custom`,
      description: t("subtitle"),
    },
  };
}

export default async function ContactPage() {
  const t = useTranslations("contact");
  const settings = await getSettings();
  const orgSchema = generateOrganizationSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: t("title"), url: `${SITE_URL}/contact` },
  ]);

  const contactItems = [
    { icon: Phone, label: "Phone", value: settings.phone, href: `tel:${settings.phone}` },
    { icon: Mail, label: "Email", value: settings.email, href: `mailto:${settings.email}` },
    { icon: MessageCircle, label: "WhatsApp", value: settings.phone, href: `https://wa.me/${settings.whatsapp}` },
    { icon: MapPin, label: t("address"), value: settings.address, href: "#" },
    { icon: Clock, label: t("hours"), value: settings.businessHours, href: "#" },
  ];

  return (
    <>
      <SchemaOrg data={[orgSchema, breadcrumbSchema]} />
      <Container className="py-12">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: t("title") }]}
        />
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Form */}
          <div>
            <h2 className="text-xl font-semibold text-foreground">
              {t("formTitle")}
            </h2>
            <p className="mt-2 text-sm text-muted">{t("formSubtitle")}</p>
            <div className="mt-6">
              <InquiryForm />
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold text-foreground">
              {t("infoTitle")}
            </h2>
            <p className="mt-2 text-sm text-muted">{t("infoSubtitle")}</p>

            <div className="mt-6 space-y-6">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 rounded-lg border border-border p-4 transition-all hover:border-primary-200 hover:shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">
                      {item.label}
                    </div>
                    <div className="text-sm text-muted">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-8 aspect-video rounded-xl bg-gray-100 flex items-center justify-center border border-border">
              <div className="text-center text-muted">
                <MapPin className="h-8 w-8 mx-auto mb-2" />
                <p className="text-sm">Guangzhou, China</p>
                <p className="text-xs mt-1">Map placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
