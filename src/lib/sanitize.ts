import DOMPurify from "isomorphic-dompurify";

/**
 * Sanitize admin-authored HTML before rendering it.
 * Strips scripts, event handlers, and javascript: URLs.
 */
export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      "p", "br", "strong", "em", "u", "s", "b", "i", "a", "ul", "ol", "li",
      "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "pre", "code",
      "table", "thead", "tbody", "tfoot", "tr", "th", "td",
      "hr", "div", "span", "img", "figure", "figcaption", "sup", "sub",
    ],
    ALLOWED_ATTR: [
      "href", "title", "target", "rel", "src", "alt", "width", "height",
      "class", "id", "colspan", "rowspan",
    ],
    ALLOWED_URI_REGEXP: /^(?:https?:|mailto:|tel:|#|\/)/i,
  });
}

/**
 * Escape a plain-text value for safe inclusion in an HTML email body.
 */
export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
