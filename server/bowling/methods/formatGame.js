const formatGame = function() {
  const { frames, total } = this
  const { head } = frames
  const framesArr = []
  let node = head
  while (node) {
    const { rolls, score } = node
    framesArr.push({
      rolls,
      score
    })
    node = node.next
  }
  return {
    total,
    frames: framesArr
  }
}

exports.formatGame = formatGame