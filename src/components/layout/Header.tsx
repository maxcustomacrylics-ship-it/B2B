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
            onClick={() => setMobileOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          />
          {/* Drawer */}
          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              zIndex: 50,
              width: "min(85vw, 300px)",
              backgroundColor: "#ffffff",
              display: "flex",
              flexDirection: "column",
              boxShadow: "-4px 0 20px rgba(0,0,0,0.15)",
            }}
          >
            {/* Close row */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", borderBottom: "1px solid #e5e7eb" }}>
              <span style={{ fontWeight: 700, color: "#1d4ed8" }}>{settings.companyName}</span>
              <button onClick={() => setMobileOpen(false)} style={{ padding: 4, color: "#6b7280", background: "none", border: "none", cursor: "pointer", fontSize: 20 }}>
                <X size={20} />
              </button>
            </div>

            {/* Links */}
            <nav style={{ flex: 1, overflowY: "auto", padding: "8px 0" }}>
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Products", "/products"],
                ["Services", "/services"],
                ["Case Studies", "/cases"],
                ["Blog", "/blog"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  style={{ display: "block", padding: "14px 20px", fontSize: 16, color: "#111827", textDecoration: "none" }}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Phone + CTA */}
            <div style={{ borderTop: "1px solid #e5e7eb", padding: "16px 20px" }}>
              <a href={`tel:${settings.phone}`} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#6b7280", textDecoration: "none", marginBottom: 12 }}>
                <Phone size={16} />
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
