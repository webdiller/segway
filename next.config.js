// For analyze 
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({ 
  swcMinify: true,
  reactStrictMode: false,
  productionBrowserSourceMaps: false,
  compiler: {
    removeConsole: false,
  }
})
