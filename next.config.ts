import type { NextConfig } from "next";

// GitHub Pages serves the site from /website-jj until a custom domain is set.
const basePath = process.env.NEXT_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Static HTML in out/, so the site can be hosted anywhere.
  output: "export",
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
