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
        has: [{ type: "host", value: "furrly.co" }],
        destination: "https://hushku.app/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.furrly.co" }],
        destination: "https://hushku.app/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
