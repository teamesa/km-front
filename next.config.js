/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'kilometer-image.s3.ap-northeast-2.amazonaws.com',
      'ssl.pstatic.net',
    ],
  },
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
