const { TreeNode } = require('../algo-js/blind-75')

const getLonelyNode = (root) => {
  const res = new Set()
  const recurse = (root, sibling = null) => {
    if (!root) return null
    if (!root.left && !root.right && !sibling) {
      res.add(root)
    }
    recurse(root.left, root.right)
    recurse(root.left, root.right)
  }
  recurse(root)
  return [...res]
}

const four = new TreeNode(4)
const two = new TreeNode(2, four)
const three = new TreeNode(3)
const one = new TreeNode(1, two, three)

console.log(getLonelyNode(one))
