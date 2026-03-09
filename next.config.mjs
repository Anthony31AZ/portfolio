/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Use static export so the site can be hosted as plain HTML/CSS/JS
   * on Cloudflare Pages without any special adapters.
   */
  output: "export",
};

export default nextConfig;

