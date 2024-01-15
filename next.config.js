/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      typedRoutes: true,
    },
    typescript: {
      
        ignoreBuildErrors: true,
      },
  }

module.exports = nextConfig
