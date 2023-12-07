class LinkedList {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
const removeDuplicatesFromLinkedList = (linkedList) => {
  let curr = linkedList
  const newLinkedList = new LinkedList(curr.value)
  let newCurr = newLinkedList
  const visited = new Set([curr.value])
  while (curr.next) {
    if (!visited.has(curr.next.value)) {
      newCurr.next = curr.next
      newCurr = newCurr.next
    }
    visited.add(curr.next.value)
    curr = curr.next
  }
  return newLinkedList
}
const removeDuplicatesFromLinkedList1 = (linkedList) => {
  let curr = linkedList
  while (curr?.next) {
    let nextDistinctNode = curr.next
    while (nextDistinctNode && nextDistinctNode.value === curr.value) {
      nextDistinctNode = nextDistinctNode.next
    }
    curr.next = nextDistinctNode
    curr = nextDistinctNode
  }
  return linkedList
}

const node1 = new LinkedList(1)
const node2 = new LinkedList(1)
node1.next = node2
const node3 = new LinkedList(3)
node2.next = node3
const node4 = new LinkedList(4)
node3.next = node4
const node5 = new LinkedList(4)
node4.next = node5
const node6 = new LinkedList(4)
node5.next = node6
const node7 = new LinkedList(5)
node6.next = node7
const node8 = new LinkedList(6)
node7.next = node8
const node9 = new LinkedList(6)
node8.next = node9

// console.log(removeDuplicatesFromLinkedList(node1))
console.log(removeDuplicatesFromLinkedList1(node1))
