"use client";

import { createContext, useContext } from "react";

export type Settings = {
  companyName: string;
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
  businessHours: string;
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
    };
  }
  return ctx;
}
