const { TreeNode } = require('../algo-js/blind-75')

const rightSideView = (root) => {
  if (!root) return []
  const res = []
  const queue = [root]
  while (queue.length) {
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const curr = queue.shift()
      if (i === len - 1) {
        res.push(curr.val)
      }
      if (curr.left) queue.push(curr.left)
      if (curr.right) queue.push(curr.right)
    }
  }
  return res
}
