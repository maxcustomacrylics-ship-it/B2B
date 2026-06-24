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
          {/* Backdrop — fixed fullscreen dark overlay */}
          <div
            className="fixed inset-0 z-40"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            onClick={() => setMobileOpen(false)}
          />
          {/* Drawer — fixed on right side, white background */}
          <div
            className="fixed right-0 top-0 bottom-0 z-50 flex flex-col bg-white shadow-2xl"
            style={{ width: "min(85vw, 300px)" }}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <span className="text-lg font-bold text-primary-700">
                {settings.companyName}
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-3 space-y-1">
              <Link href="/" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-base font-medium text-gray-900 hover:bg-gray-50">Home</Link>
              <Link href="/about" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-base font-medium text-gray-900 hover:bg-gray-50">About Us</Link>
              <Link href="/products" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-base font-medium text-gray-900 hover:bg-gray-50">Products</Link>
              <Link href="/services" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-base font-medium text-gray-900 hover:bg-gray-50">Services</Link>
              <Link href="/cases" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-base font-medium text-gray-900 hover:bg-gray-50">Case Studies</Link>
              <Link href="/blog" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-base font-medium text-gray-900 hover:bg-gray-50">Blog</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-base font-medium text-gray-900 hover:bg-gray-50">Contact</Link>
            </nav>

            <div className="border-t border-gray-100 px-5 py-4 space-y-3">
              <a
                href={`tel:${settings.phone}`}
                className="flex items-center gap-2 text-sm text-gray-500"
              >
                <Phone className="h-4 w-4" />
                {settings.phone}
              </a>
              <Button href="/contact" variant="primary" className="w-full">
                {t("contact")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
