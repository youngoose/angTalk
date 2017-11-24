// This webpack config is used for unit tests.
const baseConfig = require('./webpack.base.conf')
const merge = require('webpack-merge')
const webpack = require('webpack')

const webpackConfig = merge(baseConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },

  devtool: '#inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/test.env')
    })
  ]
})

// No need for app entry during tests
delete webpackConfig.entry

module.exports = webpackConfig
