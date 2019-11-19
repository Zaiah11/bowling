const { getStatus, addRoll } = require('./models')

exports.getStatus = (req, res) => {
  console.log('serving up game status')
  getStatus((err, game) => {
    if (err) {
      console.log(err)
      res.status(500).send()
    }
    else {
      res.status(200).send(game)
    }
  })
}

exports.addRoll = (req, res) => {
  const { score } = req.params
  console.log(`adding score: ${score} to game` )
  addRoll(score, (err, game) => {
    if (err) {
      console.log(err)
      res.status(500).send()
    }
    else {
      res.status(200).send(game)
    }
  })
}