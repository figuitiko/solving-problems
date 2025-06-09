const { TreeNode } = require('..')

const isSameTree = (p, q) => {
  if (p === null && q === null) return true
  if (p === null || q === null) return false

  if (p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  }
}

const three1 = new TreeNode(3)
const three2 = new TreeNode(3)
const two1 = new TreeNode(2)
const two2 = new TreeNode(2)
const one1 = new TreeNode(1, two1, three1)
const one2 = new TreeNode(1, two2, three2)

console.log(isSameTree(one1, one2))
