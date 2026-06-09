import type { Product, BlogPost, CaseStudy } from "@/lib/types";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/utils";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+86-138-0000-0000",
      contactType: "sales",
      availableLanguage: ["English"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 888, Industrial Avenue",
      addressLocality: "Guangzhou",
      addressCountry: "CN",
    },
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateProductSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: product.category,
    url: `${SITE_URL}/products/${product.slug}`,
    manufacturer: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateArticleSchema(post: BlogPost | CaseStudy) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: "excerpt" in post ? post.excerpt : post.challenge,
    datePublished: "date" in post ? post.date : undefined,
    author: "author" in post ? { "@type": "Person", name: post.author } : undefined,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  };
}

export function generateItemListSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}
