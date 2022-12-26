/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // basePath: '/',
  env: {
    BASE_URL: 'http://localhost:3000/',
    IMAGE_URL: '/',
    API_URL: 'http://localhost:3000/api/',
  },
  images: {
    domains: ['imagedomain.com', 'localhost', 'localhost:3000'],
  },
}

module.exports = nextConfig
