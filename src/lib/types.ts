export type ProductCategory =
  | "clear-sheets"
  | "colored-sheets"
  | "display-products"
  | "decorative-panels";

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
};
