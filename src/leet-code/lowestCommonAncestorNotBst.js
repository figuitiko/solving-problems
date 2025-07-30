const { TreeNode } = require('../algo-js/blind-75')

const lowestCommonAncestor = function (root, p, q) {
  const dfs = (node) => {
    if (node === null) return null
    if (node === p || node === q) return node
    const left = dfs(node.left)
    const right = dfs(node.right)
    if (left && right) return node
    return left || right
  }
  return dfs(root)
}

const two = new TreeNode(2)
const one = new TreeNode(1, two)

console.log(lowestCommonAncestor(one, one, two))
