const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin")

// module.exports = createVanillaExtractPlugin({
//   reactStrictMode: true,
//   experimental: {
//     // The App Router is stable, but the Vanilla Extract Next Plugin
//     // currently requires that `experimental.appDir` is `true`.
//     //
//     // https://github.com/vanilla-extract-css/vanilla-extract/issues/929#issuecomment-1538555608
//     appDir: false,
//   },
//   // webpack: (config) => {
//   //   config.optimization.splitChunks = false
//   //   return config
//   // },
// })
const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
}

module.exports = withVanillaExtract(nextConfig)
