const treeMinVal = (root) => {
  if (root === null) return Infinity
  const leftMin = treeMinVal(root.left)
  const rightMin = treeMinVal(root.right)
  return Math.min(root.val, leftMin, rightMin)
}

class Node {
  constructor (val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

const a = new Node(5)
const b = new Node(11)
const c = new Node(3)
const d = new Node(4)
const e = new Node(14)
const f = new Node(12)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

treeMinVal(a)
