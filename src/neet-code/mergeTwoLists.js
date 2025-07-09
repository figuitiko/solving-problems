class ListNode {
  constructor (val = 0, next = null) {
    this.val = val
    this.next = next
  }
}
const mergeTwoList = (list1, list2) => {
  const dummy = new ListNode(-1)
  const res = dummy.next
  while (list1 && list2) {
    if (list1.val > list2.val) {
      dummy.next = list2

      list2 = list2.next
    } else {
      dummy.next = list1.val
      list1 = list1.next
    }
  }
  if (list1) {
    dummy.next = list1
  } else {
    dummy.next = list2
  }
  return res
}

const nodeOne = new ListNode(1)
const nodeTwo = new ListNode(2)
const nodeFour = new ListNode(3)
nodeOne.next = nodeTwo
nodeTwo.next = nodeFour

const list1 = nodeOne

const nodeOne1 = new ListNode(1)
const nodeThree1 = new ListNode(3)
const nodeFive1 = new ListNode(5)

nodeOne1.next = nodeThree1
nodeThree1.next = nodeFive1

const list2 = nodeOne1

console.log(mergeTwoList(list1, list2))
