const { ListNode } = require('.')

const reverseNodesInKGroup = (head, k) => {
  let slow = head
  let fast = head
  let dummy = new ListNode(-1)
  const res = dummy
  const temPk = k
  let offset = 0
  while (head) {
    while (k > 0 && fast) {
      fast = fast.next
      k--
      offset++
    }
    let prev = null
    if (k === 0) {
      while (slow !== fast) {
        const temp = slow.next
        slow.next = prev
        prev = slow
        slow = temp
      }
      dummy.next = prev

      console.log({ prev })
    } else {
      dummy.next = slow
    }

    while (offset > 0 && dummy) {
      dummy = dummy.next
      offset--
    }
    head = fast

    k = temPk
  }
  console.log({ k })
  console.log({ fast })
  console.log('rest', JSON.stringify(res.next, null, 2))
  return res.next
}

// const six = new ListNode(6)
const five = new ListNode(5)
// five.next = six
const four = new ListNode(4)
four.next = five
const three = new ListNode(3)
three.next = four
const two = new ListNode(2)
two.next = three
const one = new ListNode(1)
one.next = two

console.log(reverseNodesInKGroup(one, 3))
