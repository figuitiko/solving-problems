const maxDepthBinary = (root) => {
  if (!root) {
    return 0
  }
  let depth = 0
  const queue = [root]

  while (queue.length) {
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const current = queue.shift()
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }
    depth++
  }
  return depth
}

const minDepthBinary = (root) => {
  if (root === null) return 0
  let minDepth = 1
  const queue = [root]

  while (queue.length) {
    let levelSize = queue.length
    while (levelSize) {
      const current = queue.shift()
      if (current.left === null && current.right === null) {
        return minDepth
      } else {
        if (current.left) queue.push(current.left)
        if (current.right) queue.push(current.right)
      }
      levelSize--
    }
    minDepth++
  }
  return minDepth
}
