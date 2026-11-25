/**
 * Legacy URL redirects.
 *
 * A site redesign moved the old product/category/service/material URLs to new
 * ones. Google Search Console reported 56 of these old URLs still returning
 * 404, so each one is mapped here to the closest existing page and served as
 * a permanent (301) redirect.
 *
 * Each entry is expanded into two rules — with and without the "/en" locale
 * prefix — because next-intl serves every page under a mandatory locale
 * prefix, and the middleware would otherwise bounce the bare path with a
 * 307 before the redirect could apply.
 */

const LEGACY_REDIRECTS = [
  // ── Products ──
  ["/products/acrylic-souvenir", "/products/custom-acrylic-trophy"],
  ["/products/desk-organizer", "/products/acrylic-makeup-organizer"],
  ["/products/photo-frame", "/products/acrylic-keychain"],
  ["/products/acrylic-light-boxes", "/products/acrylic-light-box"],
  ["/products/makeup-organizer", "/products/acrylic-makeup-organizer"],
  ["/products/ballot-box", "/products/acrylic-ballot-box"],
  ["/products/lock-box", "/products/lockable-box"],
  ["/products/acrylic-award", "/products/custom-acrylic-trophy"],
  ["/products/acrylic-display-stands", "/products/acrylic-display-rack-for-electronic-products"],
  ["/products/acrylic-ring-display", "/products/acrylic-jewelry-box"],
  ["/products/uv-filtering-display-vitrine", "/products/acrylic-specimen-display-window"],
  ["/products/wall-mounted-exhibition-case", "/products/acrylic-creative-display-window"],
  ["/products/traveling-exhibition-enclosure", "/products/acrylic-pet-enclosure-box"],
  ["/products/seamless-bonded-artifact-case", "/products/dustproof-acrylic-display-case"],
  ["/products/clear-acrylic-sheets", "/products/oem-acrylic-product"],
  ["/products/acrylic-decorative-panels", "/products/acrylic-ornaments"],
  ["/products/museum-grade-display-pedestal", "/products/high-grade-acrylic-table"],
  ["/products/interpretation-signage-panel", "/products/acrylic-guide-sign"],
  ["/products/premium-jewelry-stand", "/products/acrylic-jewelry-tray"],
  ["/products/custom-acrylic-award", "/products/custom-acrylic-trophy"],
  ["/products/branded-promotional-item", "/products/branded-desktop-sign"],
  ["/products/employee-recognition-plaque", "/products/name-plate"],
  ["/products/event-souvenir-product", "/products/acrylic-ornaments"],
  ["/products/earring-display-rack", "/products/acrylic-cosmetic-display-rack"],
  ["/products/custom-illuminated-display", "/products/custom-acrylic-display"],
  ["/products/luxury-brand-pedestal", "/products/counter-display"],
  ["/products/personalized-photo-frame", "/products/acrylic-keychain"],
  ["/products/personalized-trophy", "/products/custom-shaped-acrylic-trophy"],
  ["/products/acrylic-device-display-stand", "/products/acrylic-display-rack-for-electronic-products"],
  ["/products/cable-management-organizer", "/products/acrylic-candy-boxes"],
  ["/products/precision-cut-protective-cover", "/products/protective-cover"],
  ["/products/cnc-machined-enclosure-part", "/products/acrylic-pet-enclosure-box"],
  ["/products/branded-retail-display-fixture", "/products/acrylic-retail-shelves"],
  ["/products/interactive-display-component", "/products/acrylic-color-swatch-display-rack"],
  ["/products/school-wayfinding-signage", "/products/acrylic-wayfinding-signs"],
  ["/products/library-display-case", "/products/acrylic-baseball-display-case"],
  ["/products/custom-classroom-door-sign", "/products/custom-acrylic-sign"],
  ["/products/laboratory-equipment-enclosure", "/products/machine-guard"],
  ["/products/reception-protective-barrier", "/products/acrylic-barrier"],
  ["/products/notice-board-cover", "/products/acrylic-specimen-display-window"],
  ["/products/qr-code-sign", "/products/acrylic-sign"],
  ["/products/retail-display-stand", "/products/pop-display"],
  ["/products/trophy", "/products/custom-acrylic-trophy"],

  // ── Legacy category pages (renamed with a "-2" suffix) ──
  ["/products/acrylic-displays", "/products/acrylic-displays-2"],
  ["/products/acrylic-boxes", "/products/acrylic-boxes-2"],
  ["/products/acrylic-signage", "/products/acrylic-signs-2"],
  ["/products/acrylic-awards-gifts", "/products/protective-products-2"],
  ["/products/acrylic-home-office", "/products/acrylic-trays-shelves"],

  // ── Services / manufacturing ──
  ["/services/thermoforming", "/services/bonding-assembly"],
  ["/services/flame-polishing", "/services/diamond-polishing"],
  ["/manufacturing/hot-bending", "/services/bonding-assembly"],
  ["/manufacturing/assembly", "/services/bonding-assembly"],

  // ── Materials (now a single page) ──
  ["/materials/abs", "/materials"],
  ["/materials/cast-acrylic", "/materials"],
  ["/materials/extruded-acrylic", "/materials"],
  ["/materials/petg", "/materials"],
  ["/materials/pvc-foam-board", "/materials"],
];

export function getLegacyRedirects() {
  const rules = [];

  for (const [source, destination] of LEGACY_REDIRECTS) {
    rules.push({ source, destination, permanent: true });
    // Locale-prefixed variant — next-intl redirects /x → /en/x, so the
    // explicit rule is needed for /en/x to reach the target directly.
    rules.push({ source: `/en${source}`, destination: `/en${destination}`, permanent: true });
  }

  return rules;
}
