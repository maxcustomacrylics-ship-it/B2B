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

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Skip static files and Next.js internals
    "/((?!api|_next|_vercel|.*\\..*).*)",
    // Also match the root path for locale redirect
    "/",
  ],
};
