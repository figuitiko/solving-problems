class ListNode {
  constructor (val, next) {
    this.val = (val === undefined) ? 0 : val
    this.next = (next === undefined) ? null : next
  }
}
const reorderList = (head) => {
  // find mid
  let slow = head
  let fast = head

  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }

  // break linked list
  let curr = slow.next
  slow.next = null

  // reverse second linked list
  let prev = null

  while (curr) {
    const temp = curr.next
    curr.next = prev
    prev = curr
    curr = temp
  }

  // combine lists
  let h1 = head
  let h2 = prev

  while (h2) {
    const temp = h1.next
    h1.next = h2
    h1 = h2
    h2 = temp
  }
  return head
}

const four = new ListNode(4)
const three = new ListNode(3, four)
const two = new ListNode(2, three)
const one = new ListNode(1, two)

console.log(JSON.stringify(reorderList(one), null, 2))
