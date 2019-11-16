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
}


module.exports = {
  handleFirstRoll,
  handleFirstRollOfNewFrame,
  handleSecondRollOfFrame
}