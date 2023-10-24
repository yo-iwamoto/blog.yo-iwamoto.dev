const { withContentlayer } = require('next-contentlayer');

/** @type{import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: true,
    serverActions: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
  reactStrictMode: true,
};

module.exports = withContentlayer(nextConfig);
