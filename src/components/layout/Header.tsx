"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Menu, X, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { mainNav } from "@/data/navigation";
import { useSettings } from "@/components/providers/SettingsProvider";

export default function Header() {
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);
  const settings = useSettings();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-border">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-primary-700">
            {settings.companyName}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted hover:text-primary-600 transition-colors"
              >
                {t(item.label)}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${settings.phone}`}
              className="flex items-center gap-1.5 text-sm text-muted hover:text-primary-600 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>{settings.phone}</span>
            </a>
            <Button href="/contact" variant="primary">
              {t("getQuote")}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden rounded-lg p-2 text-foreground hover:bg-gray-100"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </Container>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed right-0 top-0 bottom-0 w-72 bg-white shadow-xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <span className="text-lg font-bold text-primary-700">
                {settings.companyName}
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="rounded-lg p-2 text-foreground hover:bg-gray-100"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-3">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-gray-50 transition-colors"
                >
                  {t(item.label)}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-6 border-t border-border space-y-3">
              <a
                href={`tel:${settings.phone}`}
                className="flex items-center gap-2 text-sm text-muted"
              >
                <Phone className="h-4 w-4" />
                {settings.phone}
              </a>
              <Button href="/contact" variant="primary" className="w-full">
                {t("getQuote")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
