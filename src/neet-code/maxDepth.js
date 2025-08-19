const { TreeNode } = require('.')

const maxDepth = (root) => {
  if (!root) return 0
  const left = 1 + maxDepth(root.left)
  const right = 1 + maxDepth(root.right)
  return Math.max(left, right)
}

const four = new TreeNode(4)
const three = new TreeNode(3, four)
const two = new TreeNode(2)
const one = new TreeNode(1, two, three)

console.log(maxDepth(one))
