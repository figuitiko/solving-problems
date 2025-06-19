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
const two = new TreeNode(2)
const eight = new TreeNode(8)
const six = new TreeNode(6, two, eight)

console.log(lowestCommonAncestor(six, 2, 8))
