import type { NavItem } from "@/lib/types";

export const mainNav: NavItem[] = [
  { label: "home", href: "/" },
  { label: "capabilities", href: "/capabilities" },
  {
    label: "products", href: "",
    children: [
      { label: "Acrylic Display", href: "/products/acrylic-displays" },
      { label: "Acrylic Box", href: "/products/acrylic-boxes" },
      { label: "Acrylic Sign", href: "/products/acrylic-signage" },
      { label: "Acrylic Stand", href: "/products/acrylic-displays" },
      { label: "Acrylic Tray", href: "/products/acrylic-home-office" },
      { label: "Acrylic Shelf", href: "/products/acrylic-home-office" },
      { label: "Custom Acrylic Parts", href: "/products/acrylic-awards-gifts" },
    ],
  },
  {
    label: "industries", href: "",
    children: [
      { label: "Retail Display", href: "/industries/retail-display" },
      { label: "Cosmetics", href: "/industries/cosmetics-display" },
      { label: "Jewelry", href: "/industries/jewelry-display" },
      { label: "Medical", href: "/industries/medical-healthcare" },
      { label: "Restaurant", href: "/industries/restaurant-hospitality" },
      { label: "Hotel", href: "/industries/hotel-hospitality" },
      { label: "Museum", href: "/industries/museum-art-gallery" },
      { label: "Electronics", href: "/industries/electronics-industry" },
    ],
  },
  { label: "projects", href: "/projects" },
  {
    label: "resources", href: "",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "Buying Guide", href: "/blog" },
      { label: "Design Guide", href: "/blog" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
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
  { label: "Laser Cutting", href: "/services/laser-cutting" },
  { label: "CNC Machining", href: "/services/cnc-machining" },
  { label: "Diamond Polishing", href: "/services/diamond-polishing" },
  { label: "UV Printing", href: "/services/uv-printing" },
  { label: "Assembly", href: "/services/bonding-assembly" },
  { label: "OEM Project Support", href: "/services/oem-project-support" },
];

export const footerCompany: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
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
