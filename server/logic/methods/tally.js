const tally = function() {

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

exports.tally = tally