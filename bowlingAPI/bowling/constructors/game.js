const { methods } = require('../methods/index')

class Game {
  constructor() {
    this.round = 0
    this.total = null
    this.bonusRound = 0
    this.frames = {
      head: null,
      tail: null
    }
  }
}

Game.prototype = Object.assign(
  Game.prototype, 
  methods
)

exports.Game = Game