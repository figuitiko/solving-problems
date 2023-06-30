function TreeNode (val, left, right) {
  const node = {}
  node.val = (val === undefined) ? 0 : val
  node.left = (left === undefined) ? null : left
  node.right = (right === undefined) ? null : right
  return node
}

const isSameTree = (p, q) => {
  if (p === null && q === null) return true
  if (p === null || q === null) return true
  if (p?.val === q?.val) {
    return isSameTree(p?.left, q?.left) && isSameTree(p?.right, q?.right)
  }
}
const treeP = TreeNode(1, 2, 3)
const treeQ = TreeNode(1, 2, 3)
console.log(treeP, treeQ)

console.log(isSameTree(treeP, treeQ))
