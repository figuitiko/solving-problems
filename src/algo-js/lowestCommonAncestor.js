const { NodeClass } = require('./nodeClass')

const lowestCommonAncestor = (root, p, q) => {
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q)
  } else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q)
  } else {
    return root
  }
}

const node3 = new NodeClass(3)
const node5 = new NodeClass(5)
const node4 = new NodeClass(4, node3, node5)
const node0 = new NodeClass(0)
const node2 = new NodeClass(2, node0, node4)
const node7 = new NodeClass(7)
const node9 = new NodeClass(9)
const node8 = new NodeClass(8, node7, node9)
const node6 = new NodeClass(6, node2, node8)

console.log(JSON.stringify(lowestCommonAncestor(node6, node2, node8)))
