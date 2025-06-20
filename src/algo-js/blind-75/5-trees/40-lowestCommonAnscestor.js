const { TreeNode } = require('..')

const lowestCommonAncestor = (root, p, q) => {
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q)
  } else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q)
  } else {
    return root
  }
}

const five = new TreeNode(5)
const three = new TreeNode(3)
const nine = new TreeNode(9)
const seven = new TreeNode(7)
const four = new TreeNode(4, three, five)
const zero = new TreeNode(0)
const two = new TreeNode(2, zero, four)
const eight = new TreeNode(8, seven, nine)
const six = new TreeNode(6, two, eight)

console.log(lowestCommonAncestor(six, seven, eight))
