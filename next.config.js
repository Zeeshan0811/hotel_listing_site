/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    IMAGE_URL: '/',
    API_URL: '/',
  }
}

module.exports = nextConfig
