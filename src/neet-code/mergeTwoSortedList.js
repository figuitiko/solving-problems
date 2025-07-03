class ListNode {
  constructor (val = 0, next = null) {
    this.val = val
    this.next = next
  }
}
const mergeTwoLists = (list1, list2) => {
  let dummy = new ListNode(-1)
  const result = dummy
  while (list1 && list2) {
    if (list1.val > list2.val) {
      dummy.next = list2
      dummy = dummy.next
    } else {
      dummy.next = list1
      dummy = dummy.next
    }
    list1 = list1.next
    list2 = list2.next
  }
  if (list1) {
    dummy.next = list1
  } else {
    dummy.next = list2
  }
  return result
}

const four = new ListNode(4)
const two = new ListNode(2, four)
const one = new ListNode(1, two)

const five1 = new ListNode(5)
const three = new ListNode(3, five1)
const one1 = new ListNode(1, three)

console.log(mergeTwoLists(one, one1))
