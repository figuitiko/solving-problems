const { Node } = require('./nodeClass')
const isValidBST = (root) => {
  const dfs = (root, min, max) => {
    if (!root) return true
    if (root.val <= min || root.val >= max) {
      return false
    }
    return dfs(root.left, min, root.val) && dfs(root.right, root.val, max)
  }
  return dfs(root, -Infinity, Infinity)
}

const B = new Node(1)
const C = new Node(3)
const A = new Node(2, B, C)

console.log(isValidBST(A))
