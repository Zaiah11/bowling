const express = require('express')
const app = express()

const { Bowling } = require('./bowling')
const Game = new Bowling()

const PORT = 3000

app.get('/score', (req, res) => {
  const { total } = Game
  res.status(200).send(`${total}`)
})

app.post('/addRoll/:score', (req, res) => {
  const { score } = req.params
  Game.addRoll(Number(score))
  res.status(200).send()
})

app.listen(PORT, () => console.log('... listening on port: ' + PORT))