// For analyze 
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  env: {
    // FIXME: Уточнить хост
    HOST: process.env.NODE_ENV === 'production' ? 'https://segway.vercel.app/' : 'http://localhost:3000'
  },
  swcMinify: true,
  reactStrictMode: false,
  productionBrowserSourceMaps: false,
  compiler: {
    removeConsole: false,
  },
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/',
        permanent: true,
      },
      // {
      //   source: '/kickscooters/kickscooter-zing-c8',
      //   destination: '/',
      //   permanent: true,
      // },
    ]
  },
})
