class Node {
  constructor (val, nodeLeft, nodeRight) {
    this.val = val
    this.left = nodeLeft ?? null
    this.right = nodeRight ?? null
  }
}
class NodeClass1 {
  constructor (value, nodeLeft, nodeRight) {
    this.value = value
    this.left = nodeLeft ?? null
    this.right = nodeRight ?? null
  }
}

module.exports = { NodeClass: Node, NodeValueClass: NodeClass1 }
