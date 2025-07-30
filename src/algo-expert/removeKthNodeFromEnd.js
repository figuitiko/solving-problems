class LinkedList {
  constructor (value) {
    this.value = value
    this.next = null
  }
}
const removeKthNodeFromEnd = (head, k) => {
  let count = 0
  let fast = head
  let slow = head
  while (count < k) {
    fast = fast?.next
    count++
  }
  if (!fast) {
    head.value = head.next.value
    head.next = head.next.next
    return
  }
  while (fast?.next) {
    fast = fast.next
    slow = slow.next
  }

  slow.next = slow?.next?.next
}

const node9 = new LinkedList(9)
const node8 = new LinkedList(8, node9)
const node7 = new LinkedList(7, node8)
const node6 = new LinkedList(6, node7)
const node5 = new LinkedList(5, node6)
const node4 = new LinkedList(4, node5)
const node3 = new LinkedList(3, node4)
const node2 = new LinkedList(2, node3)
const node1 = new LinkedList(1, node2)
const node0 = new LinkedList(0, node1)

console.log(removeKthNodeFromEnd(node0, 4))
