const { TreeNode } = require('..')

const isSubtree = (root, subRoot) => {
  const isSameTree = (root1, root2) => {
    if (!root1 && !root2) return true
    if (!root1 || !root2 || root1.val !== root2.val) return false
    return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right)
  }
  const dfs = (node) => {
    if (!node) return false
    if (isSameTree(node, subRoot)) {
      return true
    }
    return dfs(node.left) || dfs(node.right)
  }
  return dfs(root)
}

const one = new TreeNode(1)
const two = new TreeNode(2)
const four = new TreeNode(4, one, two)
const five = new TreeNode(5)
const three = new TreeNode(3, four, five)

const one1 = new TreeNode(1)
const two1 = new TreeNode(2)
const four1 = new TreeNode(4, one1, two1)

console.log(isSubtree(three, four1))
