import type { NavItem } from "@/lib/types";

export const mainNav: NavItem[] = [
  { label: "home", href: "/" },
  {
    label: "capabilities", href: "",
    children: [
      { label: "Materials", href: "/materials" },
      { label: "Laser Cutting", href: "/services/laser-cutting" },
      { label: "CNC Machining", href: "/services/cnc-machining" },
      { label: "Diamond Polishing", href: "/services/diamond-polishing" },
      { label: "UV Printing", href: "/services/uv-printing" },
      { label: "Assembly & Packaging", href: "/services/bonding-assembly" },
      { label: "Quality Control", href: "/services/oem-project-support" },
    ],
  },
  { label: "products", href: "/products" },
  { label: "projects", href: "/projects" },
  { label: "resources", href: "/blog" },
  { label: "about", href: "/about" },
  { label: "contact", href: "/contact" },
];

export const footerProducts: NavItem[] = [
  { label: "Display Solutions", href: "/products" },
  { label: "Signage", href: "/products" },
  { label: "Storage & Organization", href: "/products" },
  { label: "Retail Fixtures", href: "/products" },
  { label: "Protective Products", href: "/products" },
  { label: "Custom Components", href: "/products" },
];

export const footerServices: NavItem[] = [
  { label: "Laser Cutting", href: "/services/laser-cutting" },
  { label: "CNC Machining", href: "/services/cnc-machining" },
  { label: "Diamond Polishing", href: "/services/diamond-polishing" },
  { label: "UV Printing", href: "/services/uv-printing" },
  { label: "Assembly & Packaging", href: "/services/bonding-assembly" },
  { label: "Quality Control", href: "/services/oem-project-support" },
  { label: "Materials", href: "/materials" },
];

export const footerCompany: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Knowledge Center", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export const footerLegal: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Refund Policy", href: "/refund" },
  { label: "Shipping Policy", href: "/shipping" },
];
