/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/json-schema-demo' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/json-schema-demo/' : '',
  images: {
    unoptimized: true,
  },
  output: 'export',
  // 确保没有使用不兼容静态导出的功能
  experimental: {
    // 禁用可能与静态导出不兼容的实验性功能
  },
  // 添加公共路径配置
  publicRuntimeConfig: {
    basePath: process.env.NODE_ENV === 'production' ? '/json-schema-demo' : '',
  },
  // 添加特定的主页处理
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