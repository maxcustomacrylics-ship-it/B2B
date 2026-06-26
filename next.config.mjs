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
    ];
  },
};

export default withNextIntl(nextConfig);
