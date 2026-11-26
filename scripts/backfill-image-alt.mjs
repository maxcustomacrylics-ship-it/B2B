/**
 * Backfill image alt text through the authenticated admin API.
 *
 * 99% of product images had an empty alt attribute, which wastes the
 * indexing value of every image and leaves screen-reader users with nothing.
 * Alt text is generated from the product name, its category, and the image's
 * position in the gallery, e.g.:
 *
 *   "Custom-Shaped Acrylic Trophy — clear cast acrylic trophy, front view"
 *
 * Run with:  node scripts/backfill-image-alt.mjs [--dry]
 *
 * Requires ADMIN_PASSWORD in the environment (read from .env.local when
 * present) and a reachable site (BASE_URL, default https://www.maxcustomacrylics.com).
 */

import fs from "fs";
import path from "path";

// ── Load env ──
const envPath = path.join(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, "utf-8").split("\n")) {
    const m = line.match(/^([A-Z_]+)=(.*)$/);
    if (m && !process.env[m[1]]) {
      const value = m[2].trim().replace(/^["']|["']$/g, "");
      if (/^[\x20-\x7E]+$/.test(value)) process.env[m[1]] = value;
    }
  }
}

const BASE_URL = process.env.BASE_URL || "https://www.maxcustomacrylics.com";
const PASSWORD = process.env.ADMIN_PASSWORD;
const DRY = process.argv.includes("--dry");

if (!PASSWORD) {
  console.error("ADMIN_PASSWORD is required (set it in .env.local or the environment)");
  process.exit(1);
}

const CATEGORY_WORDS = {
  "acrylic-displays": "display stand",
  "acrylic-boxes": "box",
  "acrylic-signage": "sign",
  "acrylic-home-office": "tray",
  "acrylic-awards-gifts": "protective product",
  "acrylic-furniture": "furniture piece",
  "acrylic-trophies": "trophy",
  "acrylic-accessories": "accessory",
  "custom-acrylic": "custom acrylic product",
};

const VIEWS = [
  "front view",
  "angled view",
  "side view",
  "detail view",
  "top view",
  "in use",
  "alternative angle",
  "close-up",
  "back view",
];

function buildAlt(product, index, total) {
  const cat = CATEGORY_WORDS[product.category] || "acrylic product";
  const view = VIEWS[index % VIEWS.length];
  if (total > 1 && index > 0) return `${product.name} — ${cat}, ${view}`;
  return `${product.name} — custom ${cat}`;
}

async function login() {
  const res = await fetch(`${BASE_URL}/api/admin/auth`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password: PASSWORD }),
  });
  if (!res.ok) throw new Error(`Login failed: ${res.status}`);
  const cookie = res.headers.getSetCookie?.()?.map((c) => c.split(";")[0]).join("; ") || "";
  if (!cookie) throw new Error("Login returned no session cookie");
  return cookie;
}

const cookie = await login();
console.log("Logged in.\n");

const listRes = await fetch(`${BASE_URL}/api/admin/products`, {
  headers: { Cookie: cookie },
});
if (!listRes.ok) throw new Error(`GET products failed: ${listRes.status}`);
const products = await listRes.json();

console.log(`Loaded ${products.length} products\n`);

let changed = 0;
let failed = 0;
let succeeded = 0;

for (const p of products) {
  const images = p.images || [];
  if (images.length === 0) continue;

  let dirty = false;
  const updated = images.map((im, i) => {
    if (typeof im === "string") {
      dirty = true;
      return {
        src: im,
        alt: buildAlt(p, i, images.length),
        title: "",
        type: "gallery",
      };
    }
    if (!im.alt || !im.alt.trim()) {
      dirty = true;
      return { ...im, alt: buildAlt(p, i, images.length) };
    }
    return im;
  });

  if (!dirty) continue;
  changed++;

  if (DRY) {
    console.log(`[dry] ${p.slug} → ${updated.length} images`);
    continue;
  }

  try {
    // Retry on transient failures — a long backfill can trip rate limits or
    // timeouts partway through.
    let res = null;
    let lastErr = "";
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        res = await fetch(
          `${BASE_URL}/api/admin/products/${encodeURIComponent(p.slug)}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json", Cookie: cookie },
            body: JSON.stringify({ ...p, images: updated }),
          }
        );
        if (res.ok) break;
        lastErr = `${res.status} ${(await res.text()).slice(0, 120)}`;
        if (res.status < 500) break; // client error — retrying won't help
      } catch (err) {
        lastErr = err.message;
      }
      if (attempt < 3) await new Promise((r) => setTimeout(r, attempt * 2000));
    }

    if (!res || !res.ok) {
      console.error(`✗ ${p.slug}: ${lastErr}`);
      failed++;
      continue;
    }
    succeeded++;
    console.log(`✓ ${p.slug} (${updated.length} images)`);
  } catch (err) {
    console.error(`✗ ${p.slug}: ${err.message}`);
    failed++;
  }
}

console.log(
  `\n${DRY ? "Would update" : "Updated"} ${succeeded}/${changed} products${failed ? `, ${failed} failed` : ""}.`
);
