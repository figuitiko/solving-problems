function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (val === undefined ? null : next)
}
const mergeLists = (list1, list2) => {
  let dummy = new ListNode(0)
  const head = dummy
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      dummy.next = list1
      list1 = list1.next
    } else {
      dummy.next = list2
      list2 = list2.next
    }
    dummy = dummy.next
  }
  if (list1 === null) {
    dummy.next = list2
  } else {
    dummy.next = list1
  }
  return head.next
}
const mergeKLists = (lists) => {
  if (lists.length === 0) {
    return null
  }
  while (lists.length > 1) {
    const list1 = lists.shift()
    const list2 = lists.shift()
    const merged = mergeLists(list1, list2)
    lists.push(merged)
  }
  return lists[0]
}

const four1 = new ListNode(4)
const two1 = new ListNode(2, four1)
const one1 = new ListNode(1, two1)

const five2 = new ListNode(5)
const three2 = new ListNode(3, five2)
const one2 = new ListNode(1, three2)

const six3 = new ListNode(6)
const three3 = new ListNode(3, six3)

mergeKLists([one1, one2, three3])
