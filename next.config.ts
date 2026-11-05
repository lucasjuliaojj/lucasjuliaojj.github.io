import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML in out/, so the site can be hosted anywhere.
  output: "export",
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
