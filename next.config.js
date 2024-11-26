/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  swcMinify: false,
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  }
};

module.exports = nextConfig;