const { getStatus, addRoll } = require('./models')

exports.getStatus = (req, res) => {
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