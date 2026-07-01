import { readFileSync, writeFileSync } from "fs";

const pages = ["cnc-machining", "diamond-polishing", "uv-printing", "bonding-assembly", "oem-project-support"];

const newMaterials = `{ name: s.mat1Name || "Cast Acrylic", rating: Number(s.mat1Rating) || 5, badge: s.mat1Badge || "Excellent", color: "from-blue-100 to-blue-50", bestFor: (s.mat1BestFor || "Luxury displays, Signage, Display cases").split(",").map((t) => t.trim()), desc: s.mat1Desc || "Premium optical clarity with superior surface hardness.", slug: "cast-acrylic" },
              { name: s.mat2Name || "Extruded Acrylic", rating: Number(s.mat2Rating) || 4, badge: s.mat2Badge || "Very Good", color: "from-sky-100 to-sky-50", bestFor: (s.mat2BestFor || "General fabrication, Retail displays").split(",").map((t) => t.trim()), desc: s.mat2Desc || "Consistent thickness with good optical properties.", slug: "extruded-acrylic" },
              { name: s.mat3Name || "PETG", rating: Number(s.mat3Rating) || 4, badge: s.mat3Badge || "Very Good", color: "from-emerald-100 to-emerald-50", bestFor: (s.mat3BestFor || "Protective panels, Medical applications").split(",").map((t) => t.trim()), desc: s.mat3Desc || "Excellent impact resistance with good clarity.", slug: "petg" },
              { name: s.mat4Name || "Polycarbonate", rating: Number(s.mat4Rating) || 3, badge: s.mat4Badge || "Moderate", color: "from-amber-100 to-amber-50", bestFor: (s.mat4BestFor || "Impact-resistant components, Industrial guards").split(",").map((t) => t.trim()), desc: s.mat4Desc || "Maximum impact strength and heat resistance.", slug: "polycarbonate" },
              { name: s.mat5Name || "PVC Foam Board", rating: Number(s.mat5Rating) || 3, badge: s.mat5Badge || "Moderate", color: "from-purple-100 to-purple-50", bestFor: (s.mat5BestFor || "Indoor signage, Exhibitions").split(",").map((t) => t.trim()), desc: s.mat5Desc || "Lightweight, cost-effective substrate.", slug: "pvc-foam-board" },
              { name: s.mat6Name || "ABS", rating: Number(s.mat6Rating) || 2, badge: s.mat6Badge || "Limited", color: "from-rose-100 to-rose-50", bestFor: (s.mat6BestFor || "Functional engineering parts").split(",").map((t) => t.trim()), desc: s.mat6Desc || "Tough, rigid engineering plastic.", slug: "abs" },
            ].map((mat) => (`;

for (const p of pages) {
  const f = `src/app/[locale]/services/${p}/page.tsx`;
  let s = readFileSync(f, "utf8");

  // Add import
  if (!s.includes("getSettings")) {
    s = s.replace(
      'import Container from "@/components/ui/Container";',
      'import { getSettings } from "@/lib/data-store";\nimport Container from "@/components/ui/Container";'
    );
  }

  // Add force-dynamic
  if (!s.includes("force-dynamic")) {
    s = s.replace(
      'import type { Metadata } from "next";',
      'export const dynamic = "force-dynamic";\n\nimport type { Metadata } from "next";'
    );
  }

  // Make function async
  s = s.replace(
    /export default function (\w+)\(\) {/,
    "export default async function $1() {"
  );

  // Add getSettings call
  if (!s.includes("const s = await getSettings()")) {
    s = s.replace("return (", "const s = await getSettings();\n  return (");
  }

  // Replace material array — match from "Cast Acrylic" to ".map((mat) => ("
  s = s.replace(
    /\{ name: "Cast Acrylic",[\s\S]*?\.map\(\(mat\) => \(/,
    newMaterials
  );

  writeFileSync(f, s);
  console.log(p + ": DONE");
}
