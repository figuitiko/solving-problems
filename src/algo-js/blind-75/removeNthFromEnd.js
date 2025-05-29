function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next(val === undefined ? null : next)
}
const removeNthFromEnd = (head, n) => {
  const dummy = new ListNode(0)
  dummy.next = head
  let left = dummy
  let right = head
  while (right && n > 0) {
    right = right.next
    n -= 1
  }
  while (right) {
    left = left.next
    right = right.next
  }
  left.next = left.next.next
  return dummy.next
}
const five = new ListNode(5)
const four = new ListNode(4, five)
const three = new ListNode(3, four)
const two = new ListNode(2, three)
const one = new NodeList(1, two)

console.log(removeNthFromEnd(one, 2))
