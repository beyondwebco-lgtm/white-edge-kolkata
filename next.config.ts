import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    formats: ["image/webp"],
    deviceSizes: [640, 768, 1080, 1280, 1920],
    imageSizes: [64, 128, 256, 384],
    qualities: [75],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
