
const tally = function() {
  this.total = this.getTotal(this.frames.head)
}


const getTotal = function (node, round = 1) {
  if (!node || round > 10) return 0

  const { rolls } = node
  const { first, second } = rolls

  let total = first + second

  if (first === 10) total += tallyStrike(node.next)
  else if (first + second === 10) total += tallySpare(node.next)

  node.score = total
  return total + getTotal(node.next, round + 1)
}


const tallyStrike = function(node) {
  if (!node) return 0 

  const { rolls } = node
  const { first, second } = rolls

  if (first === 10 && node.next) {
      return first + node.next.rolls.first
  }

  return first + second
}


const tallySpare = function(node) {
  if (!node) return 0 
  return node.rolls.first
}


module.exports = {
  tally,
  getTotal
}
