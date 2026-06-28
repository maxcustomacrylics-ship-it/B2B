---
name: service-pages-sync
description: When adding a new section to one service detail page, replicate it across all 6 service pages with adapted content
metadata:
  type: feedback
---

When any new section is added to one of the 6 service detail pages (laser-cutting, cnc-machining, diamond-polishing, uv-printing, bonding-assembly, oem-project-support), the same section pattern must be applied to all other service pages. The content within each section must be customized per the sub-item's specific context (title, process, applications, considerations).

**Why:** The 6 service pages share a consistent structure (Hero + When to Choose sections). Keeping them in sync ensures a uniform user experience across all capability detail pages.

**How to apply:** After adding a section to any service page file in `src/app/[locale]/services/[slug]/page.tsx`, immediately create the same section on the other 5 pages with content adapted to each service's unique characteristics.
