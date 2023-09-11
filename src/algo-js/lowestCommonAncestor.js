const { Node } = require('./nodeClass')

const lowestCommonAncestor = (root, p, q) => {
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q)
  } else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q)
  } else {
    return root
  }
}

const node3 = new Node(3)
const node5 = new Node(5)
const node4 = new Node(4, node3, node5)
const node0 = new Node(0)
const node2 = new Node(2, node0, node4)
const node7 = new Node(7)
const node9 = new Node(9)
const node8 = new Node(8, node7, node9)
const node6 = new Node(6, node2, node8)

console.log(JSON.stringify(lowestCommonAncestor(node6, node2, node8)))
