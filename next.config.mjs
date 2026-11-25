import createNextIntlPlugin from "next-intl/plugin";
import { getLegacyRedirects } from "./src/lib/legacy-redirects.mjs";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Specific legacy mappings first — Next.js applies the first matching
      // rule, so these must precede the catch-all /manufacturing/:path* rule.
      ...getLegacyRedirects(),
      { source: "/manufacturing", destination: "/services", permanent: true },
      { source: "/manufacturing/:path*", destination: "/services/:path*", permanent: true },
      { source: "/quote", destination: "/contact", permanent: true },
      { source: "/products/precision-instruments", destination: "/products", permanent: true },
      { source: "/en/products/precision-instruments", destination: "/en/products", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
