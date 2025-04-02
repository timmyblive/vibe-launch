import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['prod.spline.design'],
  },
};

export default nextConfig;
