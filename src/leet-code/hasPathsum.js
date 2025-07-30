const { TreeNode } = require('../algo-js/blind-75')

const hasPathSum = (root, targetSum) => {
  const recursive = (root, acc) => {
    if (!root) return false
    acc += root.val
    if (!root.left && !root.right) {
      return acc === targetSum
    }
    return recursive(root.left, acc) || recursive(root.right, acc)
  }
  return recursive(root, 0)
}

const two = new TreeNode(2)
const seven = new TreeNode(7)
const eleven = new TreeNode(11, seven, two)
const four = new TreeNode(4, eleven)
const one = new TreeNode(1)
const four1 = new TreeNode(4, null, one)
const thirteen = new TreeNode(13)
const eight = new TreeNode(thirteen, four1)
const five = new TreeNode(5, four, eight)

console.log(hasPathSum(five, 22))

const three1 = new TreeNode(3)
const two1 = new TreeNode(2)
const one1 = new TreeNode(1, two1, three1)

console.log(hasPathSum(one1, 0))

const two2 = new TreeNode(2)
const one2 = new TreeNode(1, two2)
console.log(hasPathSum(one2, 1))
