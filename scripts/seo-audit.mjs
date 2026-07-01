// SEO Audit Script — checks all frontend pages
const BASE = "https://www.maxcustomacrylics.com/en";

const pages = [
  { path: "", name: "Homepage" },
  { path: "/products", name: "Products" },
  { path: "/products/custom-acrylic-products", name: "Products > Custom Acrylic" },
  { path: "/products/display-stand", name: "Product Detail" },
  { path: "/services/laser-cutting", name: "Capability > Laser Cutting" },
  { path: "/projects", name: "Projects" },
  { path: "/blog", name: "Knowledge Center" },
  { path: "/blog/guides/buying-guides", name: "Guide Page" },
  { path: "/about", name: "About" },
  { path: "/contact", name: "Contact" },
  { path: "/materials", name: "Materials" },
  { path: "/privacy", name: "Privacy" },
];

const results = [];

for (const page of pages) {
  const url = `${BASE}${page.path}`;
  const t0 = Date.now();

  let html, status;
  try {
    const res = await fetch(url, { redirect: "manual" });
    status = res.status;
    html = await res.text();
  } catch (e) {
    results.push({ name: page.name, url, status: "FETCH_ERROR", issues: [`Cannot fetch: ${e.message}`], score: 0 });
    continue;
  }

  const t1 = Date.now();
  const issues = [];
  const warnings = [];
  const passes = [];

  // 1. Title tag
  const titleMatch = html.match(/<title>([^<]+)<\/title>/);
  if (!titleMatch) issues.push("Missing <title>");
  else {
    const title = titleMatch[1];
    if (title.length < 20) warnings.push(`Title too short (${title.length} chars)`);
    else if (title.length > 70) warnings.push(`Title too long (${title.length} chars, recommend <70)`);
    else passes.push(`Title: "${title}" (${title.length} chars)`);
  }

  // 2. Meta description
  const descMatch = html.match(/<meta[^>]+name="description"[^>]+content="([^"]+)"/);
  if (!descMatch) issues.push("Missing meta description");
  else {
    const desc = descMatch[1];
    if (desc.length < 50) warnings.push(`Meta desc too short (${desc.length} chars)`);
    else if (desc.length > 160) warnings.push(`Meta desc too long (${desc.length} chars, recommend <160)`);
    else passes.push(`Meta desc: ${desc.length} chars`);
  }

  // 3. H1 count
  const h1Matches = html.match(/<h1[^>]*>/g);
  if (!h1Matches || h1Matches.length === 0) issues.push("Missing H1");
  else if (h1Matches.length > 1) issues.push(`Multiple H1s (${h1Matches.length})`);
  else passes.push("Single H1 ✓");

  // 4. H2 count
  const h2Count = (html.match(/<h2[^>]*>/g) || []).length;
  if (h2Count === 0) warnings.push("No H2 headings");
  else passes.push(`${h2Count} H2 headings`);

  // 5. Canonical
  const canonicalMatch = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/);
  if (!canonicalMatch) warnings.push("No canonical tag");
  else passes.push(`Canonical: ${canonicalMatch[1]}`);

  // 6. OG tags
  const ogTitle = html.match(/<meta[^>]+property="og:title"[^>]+content="([^"]+)"/);
  const ogDesc = html.match(/<meta[^>]+property="og:description"[^>]+content="([^"]+)"/);
  const ogType = html.match(/<meta[^>]+property="og:type"[^>]+content="([^"]+)"/);
  (ogTitle && ogDesc && ogType) ? passes.push("OG tags complete ✓") : warnings.push(`OG tags incomplete (title:${!!ogTitle} desc:${!!ogDesc} type:${!!ogType})`);

  // 7. Twitter Card
  const twCard = html.match(/<meta[^>]+name="twitter:card"/);
  twCard ? passes.push("Twitter Card ✓") : warnings.push("No Twitter Card");

  // 8. Structured Data
  const schema = html.match(/application\/ld\+json/);
  schema ? passes.push("Schema.org JSON-LD ✓") : warnings.push("No Schema.org JSON-LD found");

  // 9. Breadcrumb
  const breadcrumb = html.match(/Breadcrumb|breadcrumb|breadcrumb/gi) || html.match(/itemprop="itemListElement"/);
  breadcrumb ? passes.push("Breadcrumbs ✓") : warnings.push("No breadcrumbs found");

  // 10. Image ALT
  const imgTags = html.match(/<img[^>]+>/g) || [];
  const imgWithAlt = imgTags.filter(t => t.includes('alt="') && !t.includes('alt=""')).length;
  const imgEmptyAlt = imgTags.filter(t => t.includes('alt=""')).length;
  if (imgWithAlt > 0 && imgEmptyAlt === 0) passes.push(`All ${imgWithAlt} images have alt text ✓`);
  else if (imgTags.length === 0) passes.push("No images on page");
  else warnings.push(`${imgEmptyAlt} of ${imgTags.length} images have empty alt`);

  // 11. Internal links
  const links = html.match(/href="\/([^"]*)"/g) || [];
  passes.push(`${links.length} internal links`);

  // 12. Semantic HTML
  const hasNav = html.includes("<nav");
  const hasMain = html.includes("<main");
  const hasFooter = html.includes("<footer");
  const hasSection = html.includes("<section");
  (hasNav && hasMain && hasFooter) ? passes.push("Semantic HTML ✓ (nav, main, footer)") : warnings.push(`Semantic HTML incomplete (nav:${hasNav} main:${hasMain} footer:${hasFooter})`);

  // 13. Response time
  const loadTime = t1 - t0;
  if (loadTime < 1000) passes.push(`Load: ${loadTime}ms ✓`);
  else if (loadTime < 3000) warnings.push(`Load: ${loadTime}ms (slow)`);
  else issues.push(`Load: ${loadTime}ms (very slow)`);

  // 14. Status
  status === 200 ? passes.push("HTTP 200 ✓") : issues.push(`HTTP ${status}`);

  // Calculate score
  const totalChecks = issues.length * 3 + warnings.length + passes.length;
  const penalty = issues.length * 15 + warnings.length * 5;
  const score = Math.max(0, Math.min(100, 100 - penalty));

  results.push({
    name: page.name,
    url,
    status,
    issues,
    warnings,
    passes,
    score,
    loadTime,
  });

  // Throttle
  await new Promise(r => setTimeout(r, 300));
}

// Print report
console.log("\n" + "=".repeat(70));
console.log("SEO AUDIT REPORT");
console.log("=".repeat(70) + "\n");

let totalScore = 0;
for (const r of results) {
  console.log(`\n📄 ${r.name} (${r.url}) — Score: ${r.score}/100 (${r.loadTime}ms)`);
  for (const i of r.issues) console.log(`  🔴 ${i}`);
  for (const w of r.warnings) console.log(`  🟡 ${w}`);
  // for (const p of r.passes) console.log(`  ✅ ${p}`);
  totalScore += r.score;
}

const avgScore = Math.round(totalScore / results.length);
console.log(`\n${"=".repeat(70)}`);
console.log(`OVERALL SEO SCORE: ${avgScore}/100`);
console.log(`${"=".repeat(70)}`);

const allIssues = results.flatMap(r => r.issues);
const allWarnings = results.flatMap(r => r.warnings);
console.log(`\n🔴 Critical Issues: ${allIssues.length}`);
console.log(`🟡 Warnings: ${allWarnings.length}`);
