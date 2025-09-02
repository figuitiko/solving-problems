const { TreeNode } = require('../algo-js/blind-75')

const lowestCommonAncestor = (root, p, q) => {
  if (root.val < p && root.val < q) {
    return lowestCommonAncestor(root.right, p, q)
  } else if (root.val > p && root.val > q) {
    return lowestCommonAncestor(root.left, p, q)
  } else {
    return root
  }
}

const two = new TreeNode(2)
const one = new TreeNode(1, null, two)
const four = new TreeNode(4)
const three = new TreeNode(3, one, four)
const seven = new TreeNode(7)
const nine = new TreeNode(9)
const eight = new TreeNode(8, seven, nine)
const five = new TreeNode(5, three, eight)

console.log(lowestCommonAncestor(five, 3, 4))
