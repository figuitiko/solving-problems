class Node {
  constructor(value, node) {
    this.value = value
    this.next = node ?? null
  }
}

const reverseLinkedList = (head) => {
  const stack = [head]
  while (head.next) {
    stack.unshift(head.next)
    head = head.next
  }
  let i = 0
  while (i < stack.length) {
    stack[i].next = stack[i + 1] || null
    i++
  }
  console.log(head)
  // console.log(stack)
}
const reverseLinkedList1 = (head) => {
  let currPrev = null
  const recursive = (node) => {
    if (!node) return
    const next = node.next
    node.next = currPrev
    currPrev = node
    head = node
    recursive(next)
  }
  recursive(head)
  return head
}
const reverseLinkedList2 = (head, currPrev = null) => {
  if (!head) return
  const next = head.next
  head.next = currPrev
  currPrev = head
  head = next
  reverseLinkedList2(next, currPrev)
  return head
}

const node1 = new Node('C')
const node2 = new Node('B', node1)
const node3 = new Node('A', node2)

// console.log(reverseLinkedList(node3))
// console.log(reverseLinkedList1(node3))
console.log(reverseLinkedList2(node3))
