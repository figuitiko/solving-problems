const { TreeNode } = require('..')

const isValidBST = (root) => {
  const recurse = (root, min, max) => {
    if (root === null) return true
    if ((root.val >= max || root.val <= min)) {
      return false
    }
    return recurse(root.left, min, root.val) && recurse(root.right, root.val, max)
  }
  return recurse(root, -Infinity, Infinity)
}

const one = new TreeNode(1)
const three = new TreeNode(3)
const two = new TreeNode(2, one, three)

console.log(isValidBST(two))
