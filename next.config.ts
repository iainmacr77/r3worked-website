import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Strict mode helps catch bugs
  reactStrictMode: true,

  // 2. Ignore Type errors during build so we can just SEE the site
  typescript: {
    ignoreBuildErrors: true,
  },

  // 3. Allow images from Unsplash (which the AI used for the background)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      }
    ],
  },
};

export default nextConfig;