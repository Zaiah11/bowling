class Frame {
  constructor(roll) {
    this.next = null
    this.rolls = {
      first: roll,
      second: null
    }
  }
}

exports.Frame = Frame