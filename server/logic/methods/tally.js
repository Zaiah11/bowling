const tally = function() {
  
  const { frames } = this
  const { head } = frames

  let round = 0
  let total = 0
  let multiplier = 0
  let node = head

  while (node) {

    const { rolls } = node
    const { first, second } = rolls

    total += first + second

    if (round < 10) {
      if (multiplier) {
        total += first
        multiplier--
      }

      if (multiplier) {
        if (second) {
          total += second
          multiplier--
        }
      }
    }

    if (first === 10) multiplier += 2
    else if (first + second === 10) multiplier += 1

    round++
    node = node.next
  }

  this.total = total
}

exports.tally = tally