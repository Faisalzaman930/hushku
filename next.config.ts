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
      // Merged duplicate guides (October 2026)
      { source: "/resources/senior-pet-care-guide", destination: "/resources/senior-pet-care-complete-guide", permanent: true },
      { source: "/resources/introducing-pets-to-each-other", destination: "/resources/how-to-introduce-new-pet-to-resident-pets", permanent: true },
      { source: "/resources/how-to-help-dog-with-separation-anxiety", destination: "/resources/dog-separation-anxiety-complete-guide", permanent: true },
      { source: "/resources/what-is-separation-anxiety", destination: "/resources/dog-separation-anxiety-complete-guide", permanent: true },
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
