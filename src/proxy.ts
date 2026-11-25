import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Explicitly skip static assets and Next.js internals.
  // The config.matcher regex SHOULD do this, but in practice `next-intl`
  // with localePrefix:"always" still intercepts _next paths and issues a
  // 307 redirect to /en/_next/… — which 404s and breaks all CSS/JS/fonts.
  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_vercel") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Pass the resolved pathname down so layouts can emit a per-page canonical
  // URL. A single site-wide canonical would tell search engines every page is
  // a duplicate of the homepage.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);

  const response = intlMiddleware(request);
  // Re-issue the response with the extra request header when the middleware
  // passes the request through unchanged.
  if (response.headers.get("x-middleware-next") === "1") {
    const headers = new Headers(request.headers);
    headers.set("x-pathname", pathname);
    return NextResponse.next({ request: { headers } });
  }

  return response;
}

export const config = {
  matcher: [
    // Skip static files and Next.js internals
    "/((?!api|_next|_vercel|.*\\..*).*)",
    // Also match the root path for locale redirect
    "/",
  ],
};
