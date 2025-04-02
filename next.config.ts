import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['prod.spline.design'],
  },
  webpack: (config) => {
    // Add support for importing .splinecode files
    config.module.rules.push({
      test: /\.splinecode$/,
      use: ['file-loader'],
    });
    
    return config;
  },
};

export default nextConfig;
