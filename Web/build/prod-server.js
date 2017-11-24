const config = require('../config')
const express = require('express')
const morgan = require('morgan')
const path = require('path')

const port = process.env.PORT || config.dev.port

const app = express()

app.use(morgan(
  ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
))

// Serve static assets
const staticPathMount = path.posix.join(config.build.assetsPublicPath, config.build.assetsSubDirectory)
const staticPathLocation = path.posix.join(config.build.assetsRoot, config.build.assetsSubDirectory)
app.use(staticPathMount, express.static(staticPathLocation))

// Force using react-router to render on client
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'))
})

const server = app.listen(port, () => {
  console.log(`\n\nApp listening on port ${port}.`)
})

module.exports = {
  close: server.close
}
