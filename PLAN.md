# Website Restructuring Plan — AcrylicPro Custom

## Goals
- Reposition: "Products Supplier" → "Custom Acrylic Solutions Manufacturer"
- SEO-optimized architecture with 30 product pages, industry pages, manufacturing pages
- Preserve existing UI design, components, and responsive behavior
- Keep existing URLs with 301 redirects where URLs change
- Maximize internal linking and conversion (RFQ)

---

## Phase 1: Navigation + Data Layer (No visual changes)

### 1.1 Update ProductCategory type
File: `src/lib/types.ts`
- Replace current 4 categories with 5: `acrylic-displays`, `acrylic-boxes`, `acrylic-signage`, `acrylic-home-office`, `acrylic-awards-gifts`

### 1.2 Replace seed products data
File: `src/data/products.ts`
- Replace 8 generic products with ~30 specific products across 5 categories
- Each product: name, slug, description, longDescription, specs, applications, images, featured

### 1.3 Update seed services data
File: `src/data/services.ts`
- Replace 6 generic services with manufacturing capabilities content
- Slugs: laser-cutting, cnc-machining, diamond-polishing, flame-polishing, uv-printing, silk-screen-printing, hot-bending, bonding, assembly, packaging

### 1.4 Update main navigation
File: `src/data/navigation.ts`
```
Before: Home | About | Products | Services | Quote | Cases | Blog | Contact
After:  Home | Products | Custom Solutions | Manufacturing | Projects | About | Blog | Contact
```
- Remove "Quote" and "Services"
- Add "Custom Solutions" and "Manufacturing"
- Rename "Cases" to "Projects"

### 1.5 Update Header component
File: `src/components/layout/Header.tsx`
- Update desktop nav rendering for new nav items
- Update mobile nav links to match
- Keep existing CTA button design, link to /contact

### 1.6 Update Footer
File: `src/components/layout/Footer.tsx`
- Update footer product links to new categories
- Update footer services to manufacturing capabilities
- Add industry links

### 1.7 Re-seed Supabase
Run seed script to populate new products and services.

---

## Phase 2: New Pages (Reusing existing components)

### 2.1 Product Category Pages (5 pages)
Files: `src/app/[locale]/products/page.tsx` (modify existing)
- `ProductGrid` already exists — repurpose to show category cards instead of individual products
- Each category card links to a category landing page

New: `src/app/[locale]/products/[category]/page.tsx`
- 5 category landing pages using existing components:
  - `Container`, `Breadcrumb`, `SectionHeading` (reuse)
  - `ProductCard` — show products in this category (reuse)
  - `ImageGallery` — category header image (reuse)
  - FAQ section with `generateFAQSchema` (reuse)
  - CTA: `InquiryForm` (reuse)

### 2.2 Custom Solutions Pages (3 pages)
New: `src/app/[locale]/custom-solutions/page.tsx` (index)
```
/custom-solutions
/custom-solutions/oem-odm
/custom-solutions/fabrication
/custom-solutions/industries
```
Reuse: `Container`, `Breadcrumb`, `SectionHeading`, `CTASection`, `InquiryForm`

### 2.3 Manufacturing Pages (5 pages)
New: `src/app/[locale]/manufacturing/page.tsx` (index)
```
/manufacturing
/manufacturing/factory-tour
/manufacturing/production-process
/manufacturing/quality-control
/manufacturing/materials-finishes
/manufacturing/packaging-shipping
```
Reuse: `Container`, `Breadcrumb`, `SectionHeading`, `ImageGallery`

### 2.4 Industry Pages (8 pages)
New: `src/app/[locale]/industries/[industry]/page.tsx`
```
/industries/cosmetics
/industries/retail
/industries/jewelry
/industries/restaurant
/industries/hotel
/industries/medical
/industries/electronics
/industries/luxury-packaging
```
Reuse: `Container`, `Breadcrumb`, `SectionHeading`, `ProductCard`, `CaseHighlights`, `CTASection`, `InquiryForm`

### 2.5 Projects (renamed from Cases)
Modify: `src/app/[locale]/cases/` → content renamed, URL stays `/cases`
- Add Next.js redirect: `/cases` stays, `/projects` 301 → `/cases`
- Or: move pages to `projects/` and add 301 redirect from old case URLs
- Reuse existing `CaseHighlights` component
- Each project: client, challenge, solution, results, industry tag

---

## Phase 3: SEO + Internal Linking

### 3.1 Breadcrumbs
- Already have `Breadcrumb` component
- Ensure ALL pages have breadcrumbs with correct hierarchy

### 3.2 Internal Linking
- Product pages → link to related industries
- Industry pages → link to related products + projects
- Blog posts → link to relevant products/industries
- Manufacturing pages → link to fabrication capabilities
- Add "Related Products" section to project pages (reuse `ProductCard`)
- Add "Related Projects" section to product pages (reuse `CaseHighlights`)

### 3.3 FAQ Schema
- Already have `generateFAQSchema` in schema.ts
- Add FAQ to each product category page and industry page

### 3.4 Sitemap & Robots
- Already have dynamic sitemap (update to include new pages)
- robots.txt already correct

### 3.5 Image Alt Tags
- Already fixed in recent commit ✅

### 3.6 Sticky CTA
- WhatsAppButton already exists as fixed floating button ✅
- Add "Request Quote" button in header (already changed to Contact) ✅

---

## Phase 4: 301 Redirects

| Old URL | New URL | Status |
|---------|---------|--------|
| `/services` | `/manufacturing` | 301 |
| `/cases` | `/projects` | Rename, keep `/cases` URL working |
| `/cases/[slug]` | `/projects/[slug]` | Keep both working |
| `/quote` | `/contact` | 301 |
| Old product slugs | New product slugs | Only if changed |

Redirects implemented via `next.config.mjs` redirects array or via a standalone redirect middleware.

---

## Phase 5: Blog Strategy (Content only, no code changes)

Suggest 8 new blog topics for the user to write:
1. Cast Acrylic vs Extruded Acrylic
2. Acrylic vs Glass for Retail Displays
3. How Custom Acrylic Displays Are Made
4. Laser Cutting Acrylic: Complete Guide
5. Acrylic Thickness Guide for B2B Buyers
6. How to Clean and Maintain Acrylic Products
7. Retail Display Trends 2026
8. OEM Acrylic Manufacturing: A Buyer's Guide

Existing blog system fully supports these ✅

---

## Summary of Files to Modify vs Create

### Modify (15 files)
- `src/lib/types.ts` — ProductCategory type
- `src/data/products.ts` — new seed data
- `src/data/services.ts` — manufacturing capabilities data
- `src/data/navigation.ts` — new nav structure
- `src/components/layout/Header.tsx` — new nav rendering
- `src/components/layout/Footer.tsx` — updated links
- `src/app/[locale]/products/page.tsx` — category grid
- `src/app/[locale]/products/[slug]/page.tsx` — product detail (minor)
- `src/app/sitemap.ts` — add new routes
- `src/app/[locale]/cases/[slug]/page.tsx` — add industry tag
- `src/messages/en.json` — new translation keys
- `next.config.mjs` — redirects
- `src/app/[locale]/page.tsx` — update hero/home to reflect new positioning
- `src/components/home/Hero.tsx` — repositioning copy
- `src/components/home/ProductShowcase.tsx` — show categories not products

### Create (25+ files)
- Product category pages: 5 files in `products/[category]/page.tsx`
- Custom Solutions: 3 files in `custom-solutions/`
- Manufacturing: 5 files in `manufacturing/`
- Industries: 8 files in `industries/[industry]/page.tsx`
- New data file: `src/data/industries.ts`

### Preserve (no changes)
- Blog system
- Contact page
- About page (minor content updates)
- Privacy/Terms/Refund/Shipping pages
- Admin panel
- All UI components
- Supabase infrastructure
- Email (Resend) setup
