/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    IMAGE_URL: '/',
  }
}

module.exports = nextConfig
