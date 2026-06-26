import type { NavItem } from "@/lib/types";

export const mainNav: NavItem[] = [
  { label: "home", href: "/" },
  { label: "services", href: "/manufacturing" },
  { label: "products", href: "/products" },
  { label: "industries", href: "/custom-solutions/industries" },
  { label: "projects", href: "/cases" },
  { label: "resources", href: "/blog" },
  { label: "about", href: "/about" },
  { label: "contact", href: "/contact" },
];

export const footerProducts: NavItem[] = [
  { label: "Acrylic Displays", href: "/products/acrylic-displays" },
  { label: "Acrylic Boxes", href: "/products/acrylic-boxes" },
  { label: "Acrylic Signage", href: "/products/acrylic-signage" },
  { label: "Acrylic Home & Office", href: "/products/acrylic-home-office" },
  { label: "Acrylic Awards & Gifts", href: "/products/acrylic-awards-gifts" },
];

export const footerServices: NavItem[] = [
  { label: "Custom Acrylic Solutions", href: "/custom-solutions" },
  { label: "Engineering Support", href: "/custom-solutions/fabrication" },
  { label: "Production Capability", href: "/manufacturing" },
  { label: "OEM Projects", href: "/custom-solutions/oem-odm" },
  { label: "Quality Control", href: "/manufacturing" },
  { label: "Global Shipping", href: "/shipping" },
];

export const footerCompany: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/cases" },
  { label: "Resources", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
  { label: "Industries", href: "/custom-solutions/industries" },
];

export const footerLegal: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Refund Policy", href: "/refund" },
  { label: "Shipping Policy", href: "/shipping" },
];
