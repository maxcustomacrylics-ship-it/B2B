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
      { source: "/services", destination: "/manufacturing", permanent: true },
      { source: "/services/:path*", destination: "/manufacturing/:path*", permanent: true },
      { source: "/quote", destination: "/contact", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
