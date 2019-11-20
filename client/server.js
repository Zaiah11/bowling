const express = require('express')
const app = express()
const proxy = require('http-proxy-middleware')

const PORT = 3001

app.use(
  '/game',
  proxy({ 
    target: 'http://server:3000/', 
    changeOrigin: true 
  })
)

app.use(express.static(`${__dirname}/public`))

app.listen(PORT, () => console.log('...listening on port: ' + PORT))