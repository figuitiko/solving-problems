class ListNode {
  constructor (val = 0, next = null) {
    this.val = val
    this.next = next
  }
}
class TreeNode {
  constructor (val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}
class GraphNode {
  constructor (val = 0, neighbors = []) {
    this.val = val
    this.neighbors = neighbors
  }
}
module.exports = { ListNode, TreeNode, GraphNode }
