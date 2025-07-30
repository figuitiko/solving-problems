class Node {
  constructor (val, next = null, random = null) {
    this.val = val
    this.next = next
    this.random = random
  }
}

const copyRandomList = (head) => {
  const oldToCopy = new Map()
  oldToCopy.set(null, null)

  let cur = head
  while (cur) {
    const copy = new Node(cur.val)
    oldToCopy.set(cur, copy)
    cur = cur.next
  }

  cur = head
  while (cur) {
    const copy = oldToCopy.get(cur)
    copy.next = oldToCopy.get(cur.next)
    copy.random = oldToCopy.get(cur.random)
    cur = cur.next
  }

  return oldToCopy.get(head)
}

const node4 = new Node(4)
const node5 = new Node(5)
const node7 = new Node(7)
const node3 = new Node(3)
node3.next = node7
node7.next = node4
node7.random = node5
node5.next = null
node5.random = node3

console.log(copyRandomList(node3))
