"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import { footerProducts, footerServices, footerCompany, footerLegal } from "@/data/navigation";
import { useSettings } from "@/components/providers/SettingsProvider";

export default function Footer() {
  const t = useTranslations("footer");
  const settings = useSettings();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <Link href="/" className="text-xl font-bold text-white">
              {settings.companyName}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              {t("aboutText")}
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Products</h3>
            <ul className="mt-4 space-y-2">
              {footerProducts.map((item) => (
                <li key={item.href}><Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Capabilities</h3>
            <ul className="mt-4 space-y-2">
              {footerServices.map((item) => (
                <li key={item.href}><Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-2">
              {footerCompany.map((item) => (
                <li key={item.href}><Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{t("contactUs")}</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>{settings.address}</li>
              <li>
                <a href={`tel:${settings.phone}`} className="hover:text-white transition-colors">
                  {settings.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${settings.email}`} className="hover:text-white transition-colors">
                  {settings.email}
                </a>
              </li>
              <li>{settings.businessHours}</li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex justify-center gap-x-6 text-xs text-gray-500 overflow-x-auto">
            {footerLegal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center text-sm text-gray-500">
            <p>{t("copyright")}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
