import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/froth-fork-site",
  assetPrefix: "/froth-fork-site/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
