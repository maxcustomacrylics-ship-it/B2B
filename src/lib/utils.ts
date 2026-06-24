export function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.maxcustomacrylics.com";

export const SITE_NAME = "AcrylicPro Custom";

export const SITE_DESCRIPTION =
  "Professional B2B acrylic board customization service — precision manufacturing, global shipping. Clear, colored, frosted, and mirror acrylic sheets with custom cutting, UV printing, and assembly services.";
