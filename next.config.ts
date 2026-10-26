import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "motion",
      "gsap",
      "@radix-ui/react-icons",
      "@radix-ui/react-navigation-menu",
      "@radix-ui/react-slot",
      "@radix-ui/react-toggle",
    ],
  },
};

export default nextConfig;
