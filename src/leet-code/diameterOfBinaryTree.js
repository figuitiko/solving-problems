const { TreeNode } = require('../algo-js/blind-75')

const diameterOfBinaryTree = (root) => {
  let length = 0
  const dfs = (root) => {
    if (!root) return 0
    const left = dfs(root.left)
    const right = dfs(root.right)
    const curr = right + left
    length = Math.max(curr, length)
    return Math.max(left + 1, right + 1)
  }
  dfs(root)
  return length
}

const four = new TreeNode(4)
const five = new TreeNode(5)
const two = new TreeNode(2, four, five)
const three = new TreeNode(3)
const one = new TreeNode(1, two, three)

console.log(diameterOfBinaryTree(one))

const two1 = new TreeNode(2)
const one1 = new TreeNode(1, two1)

console.log(diameterOfBinaryTree(one1))
