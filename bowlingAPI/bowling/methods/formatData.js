const formatData = function() {
  const { frames, total } = this
  const { tail } = frames

  let possible = tail && tail.rolls.second === null ? 10 - tail.rolls.first : 10

  return {
    total,
    frames: generateFramesArray(frames),
    possible 
  }
}

const { Frame } = require('../constructors/frame')

const generateFramesArray = (frames) => {
  const { head } = frames

  const arr = []
  let node = head

  while (node) {
    const { rolls, score } = node
    arr.push({
      rolls,
      score
    })
    node = node.next
  }

  for (let length = arr.length; length <= 10; length++) {
    arr.push(new Frame(null))
  }

  return arr
}

exports.formatData = formatData