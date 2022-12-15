/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASE_URL: 'http://localhost:30000/',
    IMAGE_URL: '/',
    API_URL: 'http://localhost:30000/api/',
  }
}

module.exports = nextConfig
