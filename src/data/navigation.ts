import type { NavItem } from "@/lib/types";

export const mainNav: NavItem[] = [
  { label: "home", href: "/" },
  { label: "products", href: "/products" },
  { label: "services", href: "/services" },
  { label: "quote", href: "/quote" },
  { label: "cases", href: "/cases" },
  { label: "blog", href: "/blog" },
  { label: "contact", href: "/contact" },
];

export const footerProducts: NavItem[] = [
  { label: "Clear Acrylic Sheets", href: "/products/clear-acrylic-sheets" },
  { label: "Colored Acrylic Sheets", href: "/products/colored-acrylic-sheets" },
  { label: "Acrylic Display Stands", href: "/products/acrylic-display-stands" },
  { label: "Decorative Panels", href: "/products/acrylic-decorative-panels" },
  { label: "Frosted Sheets", href: "/products/frosted-acrylic-sheets" },
  { label: "Laser-Cut Parts", href: "/products/acrylic-laser-cutting-service" },
];

export const footerServices: NavItem[] = [
  { label: "Custom Size Cutting", href: "/services" },
  { label: "Edge Polishing", href: "/services" },
  { label: "UV Digital Printing", href: "/services" },
  { label: "Heat Bending & Forming", href: "/services" },
  { label: "Assembly & Packaging", href: "/services" },
  { label: "Design Support", href: "/services" },
];

export const footerCompany: NavItem[] = [
  { label: "About Us", href: "/" },
  { label: "Case Studies", href: "/cases" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/" },
  { label: "Terms of Service", href: "/" },
];
