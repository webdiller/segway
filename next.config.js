// For analyze 
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({ 
  env: {
    HOST: process.env.NODE_ENV === 'production' ? 'https://segway.vercel.app' : 'http://localhost:3000'
  },
  swcMinify: true,
  reactStrictMode: false,
  productionBrowserSourceMaps: false,
  compiler: {
    removeConsole: false,
  }
})
