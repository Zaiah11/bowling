const { Game } = require('../bowling/game')

exports.getStatus = (cb) => cb(null, Game.formatData())

exports.addRoll = (score, cb) => {
  Game.addRoll(Number(score))
  cb(null, Game.formatData())
}