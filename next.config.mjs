import createNextIntlPlugin from "next-intl/plugin";

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
  async redirects() {
    return [
      { source: "/manufacturing", destination: "/services", permanent: true },
      { source: "/manufacturing/:path*", destination: "/services/:path*", permanent: true },
      { source: "/quote", destination: "/contact", permanent: true },
      { source: "/products/precision-instruments", destination: "/products", permanent: true },
      { source: "/en/products/precision-instruments", destination: "/en/products", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
