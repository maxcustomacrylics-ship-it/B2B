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
              {t("contact")}
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
        <div className="lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
            onClick={() => setMobileOpen(false)}
          />
          {/* Drawer */}
          <div className="fixed top-0 right-0 bottom-0 z-50 flex flex-col bg-white shadow-2xl" style={{ width: "min(85vw, 300px)" }}>
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <span className="font-bold text-primary-700">{settings.companyName}</span>
              <button onClick={() => setMobileOpen(false)} className="p-1 text-gray-500">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex-1 overflow-y-auto py-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Products", href: "/products" },
                { label: "Services", href: "/services" },
                { label: "Case Studies", href: "/cases" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-5 py-3 text-base text-gray-900 active:bg-gray-100"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Phone + CTA */}
            <div className="border-t px-5 py-4 space-y-3">
              <a href={`tel:${settings.phone}`} className="flex items-center gap-2 text-sm text-gray-500">
                <Phone className="h-4 w-4" />
                {settings.phone}
              </a>
              <Button href="/contact" variant="primary" className="w-full">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
