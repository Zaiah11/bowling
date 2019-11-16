const { Game } = require('./logic/game')

exports.getStatus = (cb) => cb(null, Game)

exports.addRoll = (score, cb) => {
  Game.addRoll(Number(score))
  cb(null, Game)
}