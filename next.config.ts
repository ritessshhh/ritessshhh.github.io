import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github-production-user-asset-6210df.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "news.stonybrook.edu",
      },
      {
        protocol: "https",
        hostname: "sbstatesman.com",
      },
    ],
  },
};

export default nextConfig;