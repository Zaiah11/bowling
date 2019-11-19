const express = require('express')
const app = express()

const PORT = 3000

const router = require('./router')

app.use('/game', router)

app.listen(PORT, () => console.log('... listening on port: ' + PORT))