/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'kilometer-image.s3.ap-northeast-2.amazonaws.com',
      'ssl.pstatic.net',
    ],
  },
  // CORS 해결
  async rewrites() {
    return [
      {
        destination: process.env.NEXT_PUBLIC_BACK_URL,
        source: process.env.SOURCE_PATH,
      },
    ];
  },
};

module.exports = nextConfig;
