
const tally = function() {

  let total = 0
  let round = 0

  const { frames } = this
  const { head } = frames
  
  let node = head

  while(node) {

    const { rolls } = node
    const { first, second } = rolls

    if (round <= 9) total += first + second

    if (first === 10) {
      const next = node.next
      if (next) {

        if (round <= 9) total += next.rolls.first

        if (next.rolls.first === 10) {
          if (next.next) {
            total += next.next.rolls.first
          }
        }

        else total += next.rolls.second
      }
    }

    else if (first + second === 10) {
      const next = node.next
      if (next) {
        total += next.rolls.first
      }
    }

    round++
    node = node.next
  }

  this.total = total
}

exports.tally = tally