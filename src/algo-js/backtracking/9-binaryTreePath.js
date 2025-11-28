const { TreeNode } = require('../blind-75')

const binaryTreePath = (root) => {
  if (!root) return []
  const res = []
  const dfs = (root, path) => {
    path.push(root.val)
    if (!root.left && !root.right) {
      res.push(path.join('->'))
    }
    if (root.left) dfs(root.left, path)
    if (root.right) dfs(root.right, path)

    path.pop()
  }
  dfs(root, [])
  return res
}

const five = new TreeNode(5)
const three = new TreeNode(3)
const two = new TreeNode(2, null, five)
const one = new TreeNode(1, two, three)

console.log(binaryTreePath(one))
