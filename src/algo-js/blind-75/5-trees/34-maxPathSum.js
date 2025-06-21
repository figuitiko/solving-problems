const { TreeNode } = require('..')

const maxPathSum = (root) => {
  let max = -Infinity
  const dfs = (root) => {
    if (!root) return 0
    const left = Math.max(0, dfs(root.left))
    const right = Math.max(0, dfs(root.right))
    const currMax = left + root.val + right
    max = Math.max(currMax, max)
    return root.val + Math.max(left, right)
  }
  dfs(root)
  return max
}

const three = new TreeNode(3)
const two = new TreeNode(2)
const one = new TreeNode(1, two, three)

console.log(maxPathSum(one))
