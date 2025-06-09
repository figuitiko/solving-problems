const { TreeNode } = require('..')

const maxDepth = (root) => {
  if (root === null) return 0
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}

const seven = new TreeNode(7)
const fifteen = new TreeNode(15)
const twenty = new TreeNode(20, fifteen, seven)
const nine = new TreeNode(9)
const three = new TreeNode(3, nine, twenty)

console.log(maxDepth(three))

const maxDepth1 = (root) => {
  if (!root) return 0
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
console.log(maxDepth1(three))
