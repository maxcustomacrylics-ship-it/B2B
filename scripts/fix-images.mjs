import { readFileSync, writeFileSync } from "fs";

let f = readFileSync("src/app/[locale]/admin/settings/page.tsx", "utf8");

const map = {
  heroImg1: "Hero Image 1", heroImg2: "Hero Image 2", heroImg3: "Hero Image 3", heroImg4: "Hero Image 4",
  factoryImg1: "Factory Image 1", factoryImg2: "Factory Image 2", factoryImg3: "Factory Image 3", factoryImg4: "Factory Image 4", factoryImg5: "Factory Image 5",
  catImg1: "Acrylic Displays", catImg2: "Acrylic Boxes", catImg3: "Acrylic Signage", catImg4: "Acrylic Home & Office",
  capImg1: "Laser Cutting", capImg2: "CNC Machining", capImg3: "Diamond Polishing", capImg4: "UV Printing", capImg5: "Assembly",
};

for (const [field, label] of Object.entries(map)) {
  // Match <FormField label="XXX">...anything...<input ... value={form.FIELD} .../>...anything...</FormField>
  const pattern = `<FormField label="${label}">`;
  const idx = f.indexOf(pattern);
  if (idx === -1) { console.log("NOT FOUND:", field, label); continue; }

  // Find the matching </FormField>
  let depth = 1;
  let endIdx = idx + pattern.length;
  while (depth > 0 && endIdx < f.length) {
    const nextOpen = f.indexOf("<FormField", endIdx);
    const nextClose = f.indexOf("</FormField>", endIdx);
    if (nextClose === -1) break;
    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth++;
      endIdx = nextOpen + 10;
    } else {
      depth--;
      endIdx = nextClose + 12;
    }
  }

  const replacement = `<SettingsImageField label="${label}" value={form.${field}} onChange={(v) => updateField("${field}", v)} />`;
  f = f.slice(0, idx) + replacement + f.slice(endIdx);
  console.log("Replaced:", field);
}

writeFileSync("src/app/[locale]/admin/settings/page.tsx", f);
console.log("Done");
