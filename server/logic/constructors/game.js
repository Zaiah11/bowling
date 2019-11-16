const { methods } = require('../methods/index')

class Game {
  constructor() {
    this.round = 1
    this.total = null
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