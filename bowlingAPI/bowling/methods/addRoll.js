const addRoll = function(roll) {
  if (this.bonusRound) {
    this.handleBonusRoll(roll)
    this.tally()
  }

  if (this.round >= 10) return null

  const { frames } = this
  const { head } = frames

  if (head === null) {
    this.handleFirstRoll(roll)
  }

  else {
    const { tail } = frames
    const { rolls } = tail
    const { first, second } = rolls

    if (first !== null) {

      if (second !== null) {
        this.handleFirstRollOfNewFrame(roll)
      }

      else {
        this.handleSecondRollOfFrame(roll)
      }
    }
  }

  this.tally()
}

exports.addRoll = addRoll