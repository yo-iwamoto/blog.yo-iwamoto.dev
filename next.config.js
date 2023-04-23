const { withContentlayer } = require('next-contentlayer');

module.exports = withContentlayer({
  swcMinify: true,
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    appDir: true,
  },
});
