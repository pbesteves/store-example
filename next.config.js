/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
    formats: ["image/png", "image/webp"],
  },
};

module.exports = nextConfig;
