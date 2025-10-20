import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard/e-commerce",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
