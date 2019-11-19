const { Game, formatGame } = require('./bowling/game')

exports.getStatus = (cb) => cb(null, Game.formatGame())

exports.addRoll = (score, cb) => {
  Game.addRoll(Number(score))
  cb(null, Game.formatGame())
}