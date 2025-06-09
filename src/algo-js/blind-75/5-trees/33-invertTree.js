const { TreeNode } = require('..')

const invertTree = (root) => {
  if (root) {
    [root.left, root.invertTree] = [invertTree(root.right), invertTree(root.left)]
  }
  return root
}

const three = new TreeNode(3)
const one = new TreeNode(1)
const two = new TreeNode(2, one, three)

console.log(invertTree(two))
