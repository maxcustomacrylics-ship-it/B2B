import { readFileSync, writeFileSync } from "fs";

// Fix 1: Shorten laser-cutting title/meta
let lc = readFileSync("src/app/[locale]/services/laser-cutting/page.tsx", "utf8");
lc = lc.replace(
  /title: "Custom Acrylic Laser Cutting Services \| Max Custom Acrylics"/,
  'title: "Custom Acrylic Laser Cutting Services"'
);
lc = lc.replace(
  /description:\s*"Precision laser cutting solutions for custom acrylic displays, signage, retail fixtures, protective panels and industrial components\. Engineering review, quality inspection, worldwide delivery\."/,
  'description:\n    "Precision CO₂ laser cutting for acrylic displays, signage, retail fixtures and industrial components. ±0.1mm tolerance, worldwide delivery."'
);
writeFileSync("src/app/[locale]/services/laser-cutting/page.tsx", lc);
console.log("laser-cutting: DONE");

// Fix 2: Shorten materials meta
let mat = readFileSync("src/app/[locale]/materials/page.tsx", "utf8");
mat = mat.replace(
  /description: "Premium acrylic material compatibility guide.*fabrication\."/,
  'description: "Cast acrylic, extruded acrylic, PETG, polycarbonate, PVC foam board, and ABS — material compatibility for laser cutting and CNC machining."'
);
writeFileSync("src/app/[locale]/materials/page.tsx", mat);
console.log("materials: DONE");

// Fix 3: Add OG type to product category template
let pcat = readFileSync("src/app/[locale]/products/[slug]/page.tsx", "utf8");
if (!pcat.includes('type: "website"')) {
  pcat = pcat.replace(
    /openGraph: \{ title:/g,
    'openGraph: { type: "website", title:'
  );
  writeFileSync("src/app/[locale]/products/[slug]/page.tsx", pcat);
  console.log("product-category: DONE");
}

// Fix 4: Blog images alt text
let blog = readFileSync("src/app/[locale]/blog/page.tsx", "utf8");
blog = blog.replace(/alt=""/g, 'alt={post.title}');
writeFileSync("src/app/[locale]/blog/page.tsx", blog);
console.log("blog: DONE");

// Fix 5: Projects images alt text
let proj = readFileSync("src/app/[locale]/projects/page.tsx", "utf8");
proj = proj.replace(/alt=""/g, 'alt={p.title}');
writeFileSync("src/app/[locale]/projects/page.tsx", proj);
console.log("projects: DONE");

console.log("\nAll SEO fixes applied!");
