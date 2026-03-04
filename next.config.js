/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/newsletter',
          destination: 'https://iheoma-oparaugo.kit.com/signup',
          permanent: true,
        },
      ];
    },
  };
  module.exports = nextConfig;