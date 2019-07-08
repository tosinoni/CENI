const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')

const app = express()

const appDir = path.join(`${__dirname}/../dist/index.html`)
app.use(serveStatic('./dist', { index: ['default.html', 'default.htm'] }))

app.get('*', function(req, res) {
  res.sendFile(appDir)
})

app.listen(3000, () => console.log('Listening on port 3000!'))

process.on('exit', () => {
  app.close()
})