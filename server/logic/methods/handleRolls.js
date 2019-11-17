const { Frame } = require('../constructors/frame')


const handleFirstRoll = function(roll) {
  const { frames } = this

  frames.head = new Frame(roll)
  frames.tail = frames.head

  if (roll === 10) this.handleSecondRollOfFrame(0)
}


const handleFirstRollOfNewFrame = function(roll) {
  const { frames } = this
  const { tail } = frames

  tail.next = new Frame(roll)
  frames.tail = tail.next

  if (roll === 10) this.handleSecondRollOfFrame(0)
}


const handleSecondRollOfFrame = function(roll) {
  const { frames } = this
  const { tail } = frames
  const { rolls } = tail

  rolls.second = roll
  this.round = this.round + 1

  if (this.round === 10) {
    if (rolls.first === 10) {
      this.bonusRound = 2
    }
    else if (rolls.first + rolls.second === 10) {
      this.bonusRound = 1
    }
  }
}


const handleBonusRoll = function(roll) {
  const { frames } = this
  const { tail } = frames
  const { rolls } = tail
  const { second } = rolls
  
  if (second !== null) {
    this.handleFirstRollOfNewFrame(roll, true)
  }
  else {
    this.handleSecondRollOfFrame(roll, true)
  }

  this.bonusRound = this.bonusRound - 1
}


module.exports = {
  handleFirstRoll,
  handleFirstRollOfNewFrame,
  handleSecondRollOfFrame,
  handleBonusRoll
}