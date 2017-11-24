const config = require('../config')
const path = require('path')

exports.assetsPath = _path => {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

// Generate loaders for standalone style files
exports.styleLoaders = loaderOptions => {
  const loaders = [
    'to-string',
    'css',
    'postcss',
    'sass'
  ]
  const rule = [
    {
      test: /\.scss$/,
      use: loaders.map(l => (
        {
          loader: `${l}-loader`,
          options: Object.assign({}, loaderOptions, {
            sourceMap: loaderOptions.sourceMap
          })
        }
      ))
    }
  ]

  return rule
}
