import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: 'export',
  basePath: '/LuminaLiving',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
