import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getSettings } from "@/lib/data-store";
import { SettingsProvider } from "@/components/providers/SettingsProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import MobileCTABar from "@/components/shared/MobileCTABar";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.maxcustomacrylics.com"),
  title: {
    default: "Max Custom Acrylics — Custom Acrylic Solutions",
    template: "%s | Max Custom Acrylics",
  },
  description: "Premium custom acrylic products engineered for your business. From design review to worldwide delivery — displays, boxes, signs, trays, and protective products.",
  openGraph: {
    type: "website",
    siteName: "Max Custom Acrylics",
    title: "Max Custom Acrylics — Custom Acrylic Solutions",
    description: "Premium custom acrylic products engineered for your business. Engineering support, quality inspection, worldwide delivery.",
    url: "https://www.maxcustomacrylics.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Max Custom Acrylics — Custom Acrylic Solutions",
    description: "Premium custom acrylic products engineered for your business.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.maxcustomacrylics.com" },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en")) {
    notFound();
  }

  const messages = await getMessages();
  const settings = await getSettings();

  return (
    <NextIntlClientProvider messages={messages}>
      <SettingsProvider settings={settings}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileCTABar />
        {/* Spacer for mobile CTA bar */}
        <div className="lg:hidden h-16" />
      </SettingsProvider>
    </NextIntlClientProvider>
  );
}
