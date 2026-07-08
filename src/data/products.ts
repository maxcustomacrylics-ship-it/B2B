import type { Product, ProductCategory } from "@/lib/types";

let sortCounter = 0;
const p = (slug: string, name: string, category: ProductCategory, description: string): Product => ({
  slug, name, category, description,
  longDescription: description,
  specs: [
    { label: "Material", value: "Cast & Extruded Acrylic" },
    { label: "Thickness", value: "1mm – 25mm" },
    { label: "Finish", value: "Diamond Polished / Flame Polished" },
    { label: "Customization", value: "Size, Color, Printing, Logo" },
    { label: "MOQ", value: "Flexible" },
    { label: "Lead Time", value: "10–18 business days" },
  ],
  applications: [],
  images: [],
  featured: false,
  sort: ++sortCounter,
});

export const products: Product[] = [
  // ═══ 1. Custom Acrylic Products ═══
  p("custom-acrylic-display", "Custom Acrylic Display", "custom-acrylic", "Fully customized acrylic display manufactured to your exact drawings and specifications."),
  p("custom-acrylic-box", "Custom Acrylic Box", "custom-acrylic", "Bespoke acrylic box designed and fabricated according to your requirements."),
  p("custom-acrylic-sign", "Custom Acrylic Sign", "custom-acrylic", "Custom acrylic sign manufactured to your design with logo printing and finishing."),
  p("custom-acrylic-tray", "Custom Acrylic Tray", "custom-acrylic", "Tailored acrylic tray built to your dimensions, material choice and finish."),
  p("custom-acrylic-cover", "Custom Acrylic Cover", "custom-acrylic", "Custom-fabricated acrylic protective cover manufactured to your specifications."),
  p("oem-acrylic-product", "OEM Acrylic Product", "custom-acrylic", "OEM acrylic product designed and produced according to your brand specifications."),

  // ═══ 2. Acrylic Displays ═══
  p("display-stand", "Display Stand", "acrylic-displays", "Premium custom acrylic display stand for retail, exhibition and commercial presentation."),
  p("pop-display", "POP Display", "acrylic-displays", "Point-of-purchase acrylic display designed for promotional retail merchandising."),
  p("brochure-holder", "Brochure Holder", "acrylic-displays", "Custom acrylic brochure and literature holder for retail and reception areas."),
  p("display-shelf", "Display Shelf", "acrylic-displays", "Custom acrylic display shelf for product presentation in retail environments."),
  p("counter-display", "Counter Display", "acrylic-displays", "Acrylic counter-top display for cosmetics, jewelry and premium product presentation."),
  p("display-riser", "Display Riser", "acrylic-displays", "Custom acrylic display riser to elevate products and create visual hierarchy."),

  // ═══ 3. Acrylic Boxes ═══
  p("display-box", "Display Box", "acrylic-boxes", "Crystal-clear acrylic display box for premium product presentation and protection."),
  p("donation-box", "Donation Box", "acrylic-boxes", "Custom acrylic donation and collection box for charity, events and retail."),
  p("suggestion-box", "Suggestion Box", "acrylic-boxes", "Acrylic suggestion box with custom slot and branding for customer feedback."),
  p("storage-box", "Storage Box", "acrylic-boxes", "Custom acrylic storage box for organized display and commercial applications."),
  p("lockable-box", "Lockable Box", "acrylic-boxes", "Lockable acrylic display and storage box for valuable or secure items."),
  p("packaging-box", "Packaging Box", "acrylic-boxes", "Custom acrylic packaging box for luxury products, gifts and brand presentation."),

  // ═══ 4. Acrylic Signs ═══
  p("logo-sign", "Logo Sign", "acrylic-signage", "Custom acrylic logo sign with UV printing for corporate branding and reception areas."),
  p("wall-sign", "Wall Sign", "acrylic-signage", "Premium acrylic wall sign for office, retail and commercial interior signage."),
  p("name-plate", "Name Plate", "acrylic-signage", "Custom acrylic name plate for desks, doors and professional identification."),
  p("menu-holder", "Menu Holder", "acrylic-signage", "Acrylic menu holder and table sign for restaurants, cafes and hospitality."),
  p("table-sign", "Table Sign", "acrylic-signage", "Custom acrylic table sign with branding for retail, events and hospitality."),
  p("directional-sign", "Directional Sign", "acrylic-signage", "Acrylic directional and wayfinding sign for commercial and public spaces."),

  // ═══ 5. Acrylic Trays & Shelves ═══
  p("serving-tray", "Serving Tray", "acrylic-home-office", "Elegant acrylic serving tray for hospitality, catering and premium presentation."),
  p("jewelry-tray", "Jewelry Tray", "acrylic-home-office", "Custom acrylic jewelry tray with compartments for organized display and storage."),
  p("cosmetic-tray", "Cosmetic Tray", "acrylic-home-office", "Acrylic cosmetic organizer tray for makeup display and beauty retail."),
  p("organizer-tray", "Organizer Tray", "acrylic-home-office", "Multi-purpose acrylic organizer tray for desk, counter and office use."),
  p("display-shelf-2", "Display Shelf", "acrylic-home-office", "Floating acrylic display shelf for retail product presentation and home decor."),
  p("wall-shelf", "Wall Shelf", "acrylic-home-office", "Custom acrylic wall shelf for modern display and commercial merchandising."),

  // ═══ 6. Protective Products ═══
  p("sneeze-guard", "Sneeze Guard", "acrylic-awards-gifts", "Custom acrylic sneeze guard and protective barrier for commercial counters."),
  p("machine-guard", "Machine Guard", "acrylic-awards-gifts", "Durable acrylic machine guard for industrial safety and equipment protection."),
  p("protective-shield", "Protective Shield", "acrylic-awards-gifts", "Custom acrylic protective shield for commercial, retail and public spaces."),
  p("acrylic-barrier", "Acrylic Barrier", "acrylic-awards-gifts", "Freestanding acrylic barrier panel for reception desks and service counters."),
  p("safety-screen", "Safety Screen", "acrylic-awards-gifts", "Acrylic safety screen for workplace, healthcare and public environments."),
  p("protective-cover", "Protective Cover", "acrylic-awards-gifts", "Custom acrylic protective cover for equipment, displays and sensitive items."),
];

export const getProductsByCategory = (category: ProductCategory) => products.filter((p) => p.category === category);
export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);
export const getProductCategories = () => Array.from(new Set(products.map((p) => p.category)));
export const getFeaturedProducts = () => products.filter((p) => p.featured);
