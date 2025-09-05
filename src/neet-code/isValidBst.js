const { TreeNode } = require('../algo-js/blind-75')

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

const three = new TreeNode(3)
const seven = new TreeNode(7)
const six = new TreeNode(6, three, seven)
const four = new TreeNode(4)
const five = new TreeNode(5, four, six)

console.log(isValidBST(five))

const one = new TreeNode(1)
const three1 = new TreeNode(3)
const two = new TreeNode(2, one, three1)

console.log(isValidBST(two))
