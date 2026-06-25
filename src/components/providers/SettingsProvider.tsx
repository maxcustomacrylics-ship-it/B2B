"use client";

import { createContext, useContext } from "react";

export type Settings = {
  companyName: string;
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
  businessHours: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroBadge: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
};

const SettingsContext = createContext<Settings | null>(null);

export function SettingsProvider({
  children,
  settings,
}: {
  children: React.ReactNode;
  settings: Settings;
}) {
  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings(): Settings {
  const ctx = useContext(SettingsContext);
  if (!ctx) {
    return {
      companyName: "AcrylicPro Custom",
      phone: "+86 138-0000-0000",
      email: "info@acrylicb2b.com",
      address: "No. 888, Industrial Avenue, Guangzhou, China",
      whatsapp: "8613800000000",
      businessHours: "Mon-Fri: 8:00 AM - 6:00 PM (CST)",
      heroHeadline: "Custom Acrylic Products Manufacturer in China",
      heroSubheadline: "OEM & ODM acrylic fabrication services for global businesses. From custom displays to retail fixtures and promotional products — high-quality manufacturing with flexible MOQ and fast turnaround.",
      heroBadge: "OEM & ODM Acrylic Manufacturer",
      ctaTitle: "Ready to Start Your Custom Acrylic Project?",
      ctaSubtitle: "Get a free quote within 24 hours. No minimum order required.",
      ctaButton: "Get Free Quote",
    };
  }
  return ctx;
}
