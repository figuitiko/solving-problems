const { TreeNode } = require('../algo-js/blind-75')

const isSubtree = (root, subRoot) => {
  const isSame = (nodeA, nodeB) => {
    if (!nodeA && !nodeB) return true
    if (!nodeA || !nodeB || nodeA.val !== nodeB.val) return false
    return isSame(nodeA.left, nodeB.left) && isSame(nodeA.right, nodeB.right)
  }
  const dfs = (root) => {
    if (!root) return false
    if (isSame(root, subRoot)) return true
    return dfs(root.left) || dfs(root.right)
  }
  return dfs(root)
}

const four = new TreeNode(4)
const five = new TreeNode(5)
const two = new TreeNode(2, four, five)
const three = new TreeNode(3)
const one = new TreeNode(1, two, three)

const four1 = new TreeNode(4)
const five1 = new TreeNode(5)
const two1 = new TreeNode(2, four1, five1)

console.log(isSubtree(one, two1))
