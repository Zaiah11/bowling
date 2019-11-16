class Frame {
  constructor(roll) {
    this.next = null
    this.rolls = {
      first: roll,
      second: null
    }
  }
}

class Bowling {
  constructor() {
    this.round = 1
    this.total = null
    this.frames = {
      head: null,
      tail: null
    }
  }

  addRoll(roll) {

    const { frames } = this
    const { head } = frames

    if (head === null) {
      return this.handleFirstRoll(roll)
    }

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

    this.tally()
  }

  handleFirstRoll(roll) {

    const { frames } = this

    frames.head = new Frame(roll)
    frames.tail = frames.head

    if (roll === 10) this.handleSecondRollOfFrame(0)
  }

  handleFirstRollOfNewFrame(roll) {

    const { frames } = this
    const { tail } = frames

    tail.next = new Frame(roll)
    frames.tail = tail.next

    if (roll === 10) this.handleSecondRollOfFrame(0)
  }

  handleSecondRollOfFrame(roll) {

    const { frames } = this
    const { tail } = frames
    const { rolls } = tail

    rolls.second = roll
    this.round = this.round + 1
  }

  tally() {

    const { frames } = this
    const { head } = frames

    let total = 0
    let multiplier = 0
    let node = head

    while (node) {

      const { rolls } = node
      const { first, second } = rolls

      total += first + second

      if (multiplier) {
        total += first
        multiplier--
      }

      if (multiplier) {
        if (second !== null) {
          total += second
          multiplier--
        }
      }

      if (first === 10) multiplier += 2
      else if (first + second === 10) multiplier += 1

      node = node.next
    }

    this.total = total
  }
}

exports.Bowling = Bowling