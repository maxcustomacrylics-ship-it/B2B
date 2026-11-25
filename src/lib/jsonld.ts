/**
 * Escape a value for safe embedding inside a <script> element.
 *
 * JSON.stringify does not escape "</script>", so a value containing that
 * sequence would terminate the script tag and allow HTML/script injection.
 * Escaping "<" as "<" prevents the parser from ever seeing
 * a closing tag inside the script body.
 *
 * Kept dependency-free so client components can use it without pulling in a
 * sanitizer bundle.
 */
export function safeJsonLd(value: unknown): string {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .split(String.fromCharCode(0x2028)).join("\\u2028")
    .split(String.fromCharCode(0x2029)).join("\\u2029");
}
