/**
 * Whitelist-based HTML sanitizer for admin-authored content.
 *
 * Implemented without a DOM library on purpose. isomorphic-dompurify pulls
 * in jsdom, which fails to load in the Vercel serverless runtime and took
 * the legal pages and the enquiry API down with it. The rule set below is
 * deliberately conservative — legal pages need paragraphs, lists, headings
 * and links, nothing more.
 *
 * The approach is "allow-list by construction": anything not explicitly
 * permitted is dropped, rather than trying to detect and remove bad markup.
 */

// Elements that are allowed, and which of their attributes survive.
const ALLOWED_TAGS: Record<string, string[]> = {
  p: [],
  br: [],
  strong: [],
  b: [],
  em: [],
  i: [],
  u: [],
  s: [],
  ul: [],
  ol: [],
  li: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  blockquote: [],
  pre: [],
  code: [],
  table: [],
  thead: [],
  tbody: [],
  tfoot: [],
  tr: [],
  th: ["colspan", "rowspan"],
  td: ["colspan", "rowspan"],
  hr: [],
  div: [],
  span: [],
  sup: [],
  sub: [],
  a: ["href", "title", "target", "rel"],
  img: ["src", "alt", "title", "width", "height"],
  figure: [],
  figcaption: [],
};

const SAFE_URL = /^(https?:|mailto:|tel:|#|\/)/i;

/** Elements whose entire content is discarded, not just their tags. */
const VOID_CONTENT_TAGS = new Set(["script", "style", "iframe", "object", "embed"]);

/**
 * Escape a plain-text value for safe inclusion in an HTML email body.
 *
 * Deliberately kept in its own module with no dependencies: the API routes
 * that build emails need this on every request, and importing a DOM-based
 * sanitizer here would pull jsdom into the serverless request path.
 */
export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeText(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function sanitizeAttributes(tag: string, attrs: string): string {
  const allowed = ALLOWED_TAGS[tag];
  if (!allowed) return "";

  const out: string[] = [];
  // Attributes arrive as `name="value"` or `name='value'` or bare `name`.
  const re = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*(?:=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  let m: RegExpExecArray | null;

  while ((m = re.exec(attrs)) !== null) {
    const name = m[1].toLowerCase();
    const rawValue = m[2] ?? m[3] ?? m[4] ?? "";

    if (!allowed.includes(name)) continue;

    if (name === "href" || name === "src") {
      const value = rawValue.trim();
      if (!SAFE_URL.test(value)) continue;
      out.push(`${name}="${escapeText(value)}"`);
      continue;
    }

    if (name === "target") {
      out.push('target="_blank"');
      continue;
    }

    if (name === "rel") {
      out.push('rel="noopener noreferrer"');
      continue;
    }

    // Numeric-ish attributes (width, height, colspan, rowspan)
    if (/^(width|height|colspan|rowspan)$/.test(name)) {
      if (!/^\d{1,4}$/.test(rawValue.trim())) continue;
      out.push(`${name}="${rawValue.trim()}"`);
      continue;
    }

    out.push(`${name}="${escapeText(rawValue)}"`);
  }

  return out.length ? " " + out.join(" ") : "";
}

/**
 * Sanitize admin-authored HTML.
 *
 * Strips every tag that is not on the allow-list, removes event handlers and
 * javascript: URLs, and drops the contents of script/style/iframe elements
 * entirely rather than leaving their text behind.
 */
export function sanitizeHtml(html: string): string {
  if (!html) return "";

  // Remove elements whose content must not survive, including their content.
  let out = html.replace(
    /<\s*(script|style|iframe|object|embed|noscript|template)\b[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi,
    ""
  );
  // Remove any leftover self-closing or unclosed variants.
  out = out.replace(
    /<\s*(script|style|iframe|object|embed|noscript|template)\b[^>]*\/?>/gi,
    ""
  );

  // Split on tags: text between them is escaped, tags are rebuilt from the
  // allow-list. Escaping the text first means a bare "<" that was never a
  // tag cannot survive.
  const parts = out.split(/(<[^>]*>)/g);
  const result: string[] = [];

  for (const part of parts) {
    if (!part) continue;

    if (!part.startsWith("<")) {
      result.push(escapeText(part));
      continue;
    }

    const closingMatch = part.match(/^<\s*\/\s*([a-zA-Z][a-zA-Z0-9-]*)\s*>$/);
    if (closingMatch) {
      const tag = closingMatch[1].toLowerCase();
      result.push(ALLOWED_TAGS[tag] ? `</${tag}>` : "");
      continue;
    }

    const openMatch = part.match(
      /^<\s*([a-zA-Z][a-zA-Z0-9-]*)([^>]*?)(\/?)\s*>$/
    );
    if (!openMatch) {
      // Not a tag we recognise — drop it.
      continue;
    }

    const tag = openMatch[1].toLowerCase();
    const attrs = openMatch[2] ?? "";
    const selfClose = openMatch[3] === "/";

    if (!ALLOWED_TAGS[tag]) {
      // Drop the tag but keep its text content.
      continue;
    }

    result.push(
      `<${tag}${sanitizeAttributes(tag, attrs)}${
        selfClose || VOID_CONTENT_TAGS.has(tag) ? " /" : ""
      }>`
    );
  }

  return result.join("");
}
