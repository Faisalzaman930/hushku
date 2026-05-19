import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "furrly.com" }],
        destination: "https://hushku.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.furrly.com" }],
        destination: "https://hushku.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
