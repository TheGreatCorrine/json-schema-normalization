/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/json-schema-normalization-demo' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/json-schema-normalization-demo/' : '',
  images: {
    unoptimized: true,
  },
  output: 'export',
  // Ensure no features incompatible with static export are used
  experimental: {
    // Disable experimental features that might be incompatible with static export
  },
  // Add public path configuration
  publicRuntimeConfig: {
    basePath: process.env.NODE_ENV === 'production' ? '/json-schema-normalization-demo' : '',
  },
  // Add specific homepage handling
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/introduction': { page: '/introduction' },
      '/get-started': { page: '/get-started' },
      '/reference': { page: '/reference' },
      '/specification': { page: '/specification' },
      '/normalization': { page: '/normalization' },
    };
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },
}

module.exports = nextConfig 