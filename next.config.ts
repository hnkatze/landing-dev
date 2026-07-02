import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "durgk3e2l2b6g.cloudfront.net",
      },
       {
        protocol: "https",
        hostname: "cdn.flujoo.dev",
      },
    ],
  },
};

export default nextConfig;
