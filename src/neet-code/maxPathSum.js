const { TreeNode } = require('../algo-js/blind-75')

const maxPathSum = (root) => {
  let max = -Infinity
  const recurse = (root) => {
    if (!root) return 0
    const left = Math.max(0, recurse(root.left))
    const right = Math.max(0, recurse(root.right))
    const currMax = root.val + left + right
    max = Math.max(currMax, max)
    return root.val + Math.max(left, right)
  }
  recurse(root)
  return max
}

const five = new TreeNode(5)
const minusFive = new TreeNode(-5)
const fifteen = new TreeNode(15, minusFive)
const twenty = new TreeNode(20, fifteen, five)
const teen = new TreeNode(10)
const minusFifteen = new TreeNode(-15, teen, twenty)

console.log(maxPathSum(minusFifteen))
