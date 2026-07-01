import { readFileSync, writeFileSync } from "fs";

const pages = ["laser-cutting", "cnc-machining", "diamond-polishing", "uv-printing", "bonding-assembly", "oem-project-support"];

for (const p of pages) {
  const f = `src/app/[locale]/services/${p}/page.tsx`;
  let s = readFileSync(f, "utf8");

  // Remove Material Compatibility section — from the comment start to the next section or end
  const startMarker = "MATERIAL COMPATIBILITY SECTION";
  const endMarkers = ["DESIGN GUIDELINES SECTION", "COMMON DESIGN MISTAKES", "FILE PREPARATION GUIDE", "TYPICAL APPLICATIONS", "FAQ SECTION", "FINAL CTA SECTION"];

  const startIdx = s.indexOf(startMarker);
  if (startIdx === -1) { console.log(p + ": NO MATERIAL SECTION FOUND"); continue; }

  // Find the closing </section> of the material section
  let endIdx = -1;
  for (const marker of endMarkers) {
    const idx = s.indexOf(marker, startIdx + 1);
    if (idx !== -1 && (endIdx === -1 || idx < endIdx)) endIdx = idx;
  }

  if (endIdx === -1) { console.log(p + ": NO END FOUND"); continue; }

  // Go back to find the last </section> before the next marker
  const beforeNext = s.substring(startIdx, endIdx);
  const lastSectionClose = beforeNext.lastIndexOf("</section>");
  if (lastSectionClose === -1) { console.log(p + ": NO SECTION CLOSE"); continue; }

  const actualEnd = startIdx + lastSectionClose + "</section>".length;
  s = s.substring(0, startIdx) + s.substring(actualEnd);
  writeFileSync(f, s);
  console.log(p + ": DONE");
}
