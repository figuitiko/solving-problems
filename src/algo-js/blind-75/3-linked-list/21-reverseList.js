class ListNode {
  constructor (val, next) {
    this.val = (val === undefined) ? 0 : val
    this.next = (next === undefined) ? null : next
  }
}
const reverseList = (head) => {
  let prev = null
  while (head) {
    const nextNode = head.next
    head.next = prev
    prev = head
    head = nextNode
  }
  return prev
}

const three = new ListNode(3, null)
const two = new ListNode(2, three)
const one = new ListNode(1, two)

console.log(reverseList(one))
