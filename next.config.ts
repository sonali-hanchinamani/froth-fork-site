import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/froth-fork-site" : undefined,
  assetPrefix: isProd ? "/froth-fork-site/" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
