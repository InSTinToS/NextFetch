const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  inlineImageLimit: false,
  staticImageData: true,
  webpack: config => {
    config.module.rules.push({ test: /\.svg$/, use: ['@svgr/webpack'] })
    return config
  }
})
