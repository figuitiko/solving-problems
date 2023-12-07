class Node {
  constructor (value, nodeLeft, nodeRight) {
    this.value = value
    this.left = nodeLeft ?? null
    this.right = nodeRight ?? null
  }
}

module.exports = { Node }
