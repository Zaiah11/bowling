class Frame {
  constructor(roll) {
    this.score = null
    this.next = null
    this.rolls = {
      first: roll,
      second: null
    }
  }
}

exports.Frame = Frame