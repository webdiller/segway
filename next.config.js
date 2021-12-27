// For analyze 
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({ 
  reactStrictMode: false,
})

// For images https://bestofreactjs.com/repo/humaans-next-img--react-nextjs-extensions
// const withImages = require('next-images')
// module.exports = withImages({
//   webpack(config, options) {
//     return config
//   }
// })