import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export as a fully static site so it can be hosted on Cloudflare Pages.
  output: "export",
};

export default nextConfig;

