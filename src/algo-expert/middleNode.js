class LinkedList {
  constructor (value) {
    this.value = value
    this.next = null
  }
}
const middleNode = (linkedList) => {
  const arrNodes = []
  const recursive = (linkedList) => {
    arrNodes.push(linkedList)
    if (!linkedList.next) return
    recursive(linkedList.next)
  }
  recursive(linkedList)
  const middle = arrNodes.length % 2 === 0
    ? Math.floor((arrNodes.length - 1) / 2) + 1
    : Math.floor((arrNodes.length - 1) / 2)
  return arrNodes[middle]
}
const middleNode1 = (linkedList) => {
  let slowNode = linkedList
  let fastNode = linkedList
  const recursive = (node) => {
    if (!fastNode) return
    if (!fastNode.next) return
    fastNode = node.next?.next
    slowNode = node.next
    recursive(slowNode)
  }
  recursive(slowNode)
  return slowNode
}

const node1 = new LinkedList(5)
const node2 = new LinkedList(3)
node2.next = node1
const node3 = new LinkedList(7)
node3.next = node2
const node4 = new LinkedList(2)
node4.next = node3

// console.log(middleNode(node4))
console.log(middleNode1(node4))
