import type { NavItem } from "@/lib/types";

export const mainNav: NavItem[] = [
  { label: "home", href: "/" },
  { label: "products", href: "/products" },
  { label: "customSolutions", href: "/custom-solutions" },
  { label: "manufacturing", href: "/manufacturing" },
  { label: "projects", href: "/cases" },
  { label: "about", href: "/about" },
  { label: "blog", href: "/blog" },
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
  { label: "Laser Cutting", href: "/manufacturing/laser-cutting" },
  { label: "CNC Machining", href: "/manufacturing/cnc-machining" },
  { label: "Diamond Polishing", href: "/manufacturing/diamond-polishing" },
  { label: "UV Printing", href: "/manufacturing/uv-printing" },
  { label: "Hot Bending", href: "/manufacturing/hot-bending" },
  { label: "Assembly & Packaging", href: "/manufacturing/assembly" },
];

export const footerCompany: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/cases" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
  { label: "Custom Solutions", href: "/custom-solutions" },
  { label: "Manufacturing", href: "/manufacturing" },
];

export const footerLegal: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Refund Policy", href: "/refund" },
  { label: "Shipping Policy", href: "/shipping" },
];
