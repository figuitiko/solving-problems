class Node {
  constructor (val, nodeLeft, nodeRight) {
    this.val = val
    this.left = nodeLeft ?? null
    this.right = nodeRight ?? null
  }
}

module.exports = { NodeClass: Node }
