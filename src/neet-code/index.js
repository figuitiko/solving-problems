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
module.exports = { ListNode, TreeNode }
