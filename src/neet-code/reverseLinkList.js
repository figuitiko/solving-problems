class ListNode {
  constructor (val = 0, next = null) {
    this.val = val
    this.next = next
  }
}

const reverseLinkList = (head) => {
  let prev = null

  while (head) {
    const nextNode = head.next
    head.next = prev
    prev = head
    head = nextNode
  }
  return prev
}

const three = new ListNode(3)
const two = new ListNode(2, three)
const one = new ListNode(1, two)

console.log(reverseLinkList(one))
