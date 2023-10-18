const { Node } = require('./nodeClass')
const pathSum = (root, targetSum) => {
  if (!root) return false
  targetSum = targetSum - root.val
  if (!root.left && !root.right && targetSum === 0) return true
  if (!root.left && !root.right && targetSum < 0) return false
  return pathSum(root.left, targetSum) || pathSum(root.right, targetSum)
}

const i = new Node(1)
const h = new Node(4, i)
const g = new Node(13)
const f = new Node(2)
const e = new Node(7)
const d = new Node(11, e, f)
const c = new Node(8, g, h)
const b = new Node(4, d)
const a = new Node(5, b, c)

console.log(pathSum(a, 22))

//        5
//      /   \
//     4      8
//    /      / \
//   11     13  4
//   / \         \
//  7   2         1
