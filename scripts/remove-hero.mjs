import { readFileSync, writeFileSync } from "fs";

const pages = ["laser-cutting", "cnc-machining", "diamond-polishing", "uv-printing", "bonding-assembly", "oem-project-support"];

for (const p of pages) {
  const f = `src/app/[locale]/services/${p}/page.tsx`;
  let s = readFileSync(f, "utf8");

  const startMarker = "{/* ========== HERO SECTION ========== */}";
  const startIdx = s.indexOf(startMarker);
  if (startIdx === -1) { console.log(p + ": NO HERO START"); continue; }

  // Find the next section after Hero — look for the second "<section" after start
  const afterHero = s.indexOf("<section", startIdx + startMarker.length);
  const nextSection = s.indexOf("<section", afterHero + 1);
  if (nextSection === -1) { console.log(p + ": NO NEXT SECTION"); continue; }

  // Find the closing </section> just before the next section
  const beforeNext = s.substring(startIdx, nextSection);
  const lastClosing = beforeNext.lastIndexOf("</section>");
  if (lastClosing === -1) { console.log(p + ": NO CLOSING"); continue; }

  const heroEnd = startIdx + lastClosing + "</section>".length;
  // Also remove trailing whitespace/newline
  let end = heroEnd;
  while (end < s.length && (s[end] === "\n" || s[end] === "\r" || s[end] === " ")) end++;
  s = s.substring(0, startIdx) + s.substring(end);
  writeFileSync(f, s);
  console.log(p + ": DONE");
}
