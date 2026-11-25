import type { Metadata } from "next";
import { headers } from "next/headers";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getSettings } from "@/lib/data-store";
import { SITE_URL } from "@/lib/utils";
import { SettingsProvider } from "@/components/providers/SettingsProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import MobileCTABar from "@/components/shared/MobileCTABar";

export const dynamic = "force-dynamic";

const OG_IMAGE = `${SITE_URL}/images/og-image.svg`;

/**
 * Build a per-page canonical URL.
 *
 * A single site-wide canonical (the previous behaviour) told search engines
 * that every page was a duplicate of the homepage, which suppressed most of
 * the site from indexing. Each page now canonicalises to itself.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const h = await headers();
  const pathname = h.get("x-pathname") || `/${locale}`;

  // Normalise: strip trailing slash (except root), keep the locale prefix.
  const clean =
    pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const canonical = `${SITE_URL}${clean}`;
  const isHome = clean === `/${locale}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "Max Custom Acrylics — Custom Acrylic Solutions",
      template: "%s | Max Custom Acrylics",
    },
    description:
      "Premium custom acrylic products engineered for your business. From design review to worldwide delivery — displays, boxes, signs, trays, and protective products.",
    openGraph: {
      type: "website",
      siteName: "Max Custom Acrylics",
      title: "Max Custom Acrylics — Custom Acrylic Solutions",
      description:
        "Premium custom acrylic products engineered for your business. Engineering support, quality inspection, worldwide delivery.",
      url: canonical,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Max Custom Acrylics" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Max Custom Acrylics — Custom Acrylic Solutions",
      description: "Premium custom acrylic products engineered for your business.",
      images: [OG_IMAGE],
    },
    robots: { index: true, follow: true },
    alternates: {
      canonical,
      languages: {
        en: `${SITE_URL}/${locale}${isHome ? "" : clean.replace(`/${locale}`, "")}`,
        "x-default": `${SITE_URL}/${locale}`,
      },
    },
  };
}

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
