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
  heroImg1: string; heroImg2: string; heroImg3: string; heroImg4: string;
  factoryImg1: string; factoryImg2: string; factoryImg3: string; factoryImg4: string; factoryImg5: string;
  statYears: string; statArea: string; statCountries: string; statProducts: string;
  heroBtnPrimaryUrl: string; heroBtnSecondaryUrl: string;
  factoryTitle: string; factoryDesc: string;
  blogTitle: string; blogDesc: string;
  rfqTitle: string; rfqDesc: string; rfqSuccess: string;
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
      heroImg1: "", heroImg2: "", heroImg3: "", heroImg4: "",
      factoryImg1: "", factoryImg2: "", factoryImg3: "", factoryImg4: "", factoryImg5: "",
      statYears: "15+", statArea: "5,000㎡", statCountries: "30+", statProducts: "100+",
      heroBtnPrimaryUrl: "/contact", heroBtnSecondaryUrl: "/products",
      factoryTitle: "Advanced Manufacturing Facility", factoryDesc: "5,000㎡ workshop with state-of-the-art equipment. ISO 9001 certified, 50+ skilled technicians, in-house tooling and export-ready packaging.",
      blogTitle: "Industry Insights", blogDesc: "Expert articles on acrylic manufacturing, material selection, and industry best practices.",
      rfqTitle: "Request a Free Quote", rfqDesc: "Tell us about your project and receive a detailed quotation within 24 hours. No minimum order — we handle prototypes to mass production.", rfqSuccess: "Thank you! We will get back to you within 24 hours.",
    };
  }
  return ctx;
}
