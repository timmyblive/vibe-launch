import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['prod.spline.design'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
