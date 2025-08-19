class LinkedList {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

function mergingLinkedLists (linkedListOne, linkedListTwo) {
  // Write your code here.
  const setNodes = new Set()
  while (linkedListOne) {
    setNodes.add(linkedListOne)
    linkedListOne = linkedListOne.next
  }
  while (linkedListTwo) {
    if (setNodes.has(linkedListTwo)) {
      return linkedListTwo
    }
    linkedListTwo = linkedListTwo.next
  }
  return null
}
