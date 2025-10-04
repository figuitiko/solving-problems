
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode (val) {
  this.val = val
  this.next = null
}
const hasCycle = (head) => {
  if (!head) return false
  let fast = head
  let slow = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) return true
  }
  return false
}

const four = new ListNode(4)
const two = new ListNode(2)
const zero = new ListNode(0)
const three = new ListNode(3)
four.next = two
two.next = zero
zero.next = four
three.next = two

console.log(hasCycle(three))
