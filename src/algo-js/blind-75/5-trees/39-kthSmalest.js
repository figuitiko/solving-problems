const { TreeNode } = require('..')

const kthSmallest = (root, k) => {
  const arr = []
  inOrder(root, arr)
  return findKth(arr, k)
}
function inOrder (root, arr) {
  if (!root) return
  inOrder(root.left, arr)
  arr.push(root.val)
  inOrder(root.right, arr)
}
function findKth (arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (i === k - 1) return arr[i]
  }
}

const two = new TreeNode(2)
const one = new TreeNode(1, null, two)
const four = new TreeNode(4)
const three = new TreeNode(3, one, four)

console.log(kthSmallest(three, 1))
