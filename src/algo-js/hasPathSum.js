const { NodeClass } = require('./nodeClass')

const hasPathSum = (root, targetSum) => {
  const recurse = (root, currSum) => {
    if (root === null) return false
    currSum += root.val
    if (!root.left && !root.right) {
      return currSum === targetSum
    }
    return recurse(root.left, currSum) || recurse(root.right, currSum)
  }
  return recurse(root, 0)
}

const a = new NodeClass(5)
const b = new NodeClass(4)
const c = new NodeClass(8)
const d = new NodeClass(11)
const e = new NodeClass(2)
const f = new NodeClass(7)
const g = new NodeClass(13)
const h = new NodeClass(4)
const j = new NodeClass(1)

a.left = b
a.right = c
b.left = d
d.left = f
d.right = e
c.left = g
c.right = h
h.right = j

console.log(hasPathSum(a, 22))
