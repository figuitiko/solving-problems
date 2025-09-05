const { TreeNode } = require('../algo-js/blind-75')
const goodNode = (root) => {
  let res = 0
  const dfs = (root, currMax) => {
    if (!root) return

    if (root.val >= currMax) {
      currMax = root.val
      res++
    }
    dfs(root.left, currMax)
    dfs(root.right, currMax)
  }
  dfs(root, root.val)
  return res
}

const five = new TreeNode(5)
const one2 = new TreeNode(1)
const one3 = new TreeNode(1, one2, five)
const three = new TreeNode(3)
const one1 = new TreeNode(1, three)
const two = new TreeNode(2, one1, one3)

console.log(goodNode(two))
