export type ProductCategory =
  | "acrylic-displays"
  | "acrylic-boxes"
  | "acrylic-signage"
  | "acrylic-home-office"
  | "acrylic-awards-gifts"
  | "custom-acrylic";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  longDescription: string;
  specs: { label: string; value: string }[];
  applications: string[];
  images: string[];
  featured: boolean;
};

export type QuoteInput = {
  name: string;
  email: string;
  company: string;
  phone?: string;
  materialType: "clear" | "colored" | "frosted" | "mirror" | "specialty";
  width: number;
  height: number;
  thickness: number;
  quantity: number;
  complexity: "simple" | "moderate" | "complex";
  edgeFinish: "none" | "polished" | "beveled" | "flamePolished";
  surfaceFinish: "none" | "uvPrint" | "engraving" | "bending";
  leadTime: "standard" | "express" | "rush";
  message: string;
};

export type QuoteEstimate = {
  area: number;
  perimeter: number;
  materialCost: number;
  cuttingCost: number;
  edgeCost: number;
  surfaceCost: number;
  setupCost: number;
  discountRate: number;
  discountValue: number;
  total: number;
  minEstimate: number;
  maxEstimate: number;
  pricePerUnit: number;
  quantity: number;
  leadTimeFactor: number;
};

export type Service = {
  slug: string;
  title: string;
  icon: string;
  description: string;
  longDescription: string;
  features: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
  image: string;
  featured: boolean;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  image: string;
};

export type Testimonial = {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type PricingConfig = {
  materialRates: Record<string, number>;
  complexityRates: Record<string, number>;
  edgeTreatmentRates: Record<string, number>;
  surfaceFinishRates: Record<string, number>;
  leadTimeMultipliers: Record<string, number>;
  quantityDiscounts: Array<{ min: number; rate: number }>;
};
