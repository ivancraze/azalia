/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fakestoreapi.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/products',
        permanent: false,
      },
    ]
  }
}

module.exports = nextConfig
