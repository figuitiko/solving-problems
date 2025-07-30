const { TreeNode } = require('../algo-js/blind-75')

const binaryTreePath = (root) => {
  const res = []
  const recursive = (root, path) => {
    if (!root) return
    let currPath = path + root.val
    if (!root.left && !root.right) {
      res.push(currPath)
    }
    currPath += '->'
    recursive(root.left, currPath)
    recursive(root.right, currPath)
  }
  recursive(root, '')
  return res
}

const five = new TreeNode(5)
const two = new TreeNode(2, null, five)
const three = new TreeNode(3)
const one = new TreeNode(1, two, three)

console.log(binaryTreePath(one))
