class Node {
  constructor (val, nodeLeft, nodeRight) {
    this.val = val
    this.left = nodeLeft ?? null
    this.right = nodeRight ?? null
  }
}

const invertTree = (root) => {
  if (root) {
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
  }
  return root
}

const node1 = new Node(1)
const node3 = new Node(3)
const node6 = new Node(6)
const node9 = new Node(9)
const node2 = new Node(2, node1, node3)
const node7 = new Node(7, node6, node9)
const node4 = new Node(4, node2, node7)

console.log(invertTree(node4))

const invertTree1 = (root) => {
  [root.left, root.right] = [root.right, root.left]
  let isChild = root.left || root.right
  while (isChild) {
    [isChild.left, isChild.right] = [isChild.right, isChild.left]
    isChild = isChild.left || isChild.right
  }
  return root
}

console.log(invertTree1(node4))
