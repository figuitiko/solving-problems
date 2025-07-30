class ListNode {
  constructor (val = 0, next = null) {
    this.val = val
    this.next = next
  }
}
class Solution {
  mergeKLists (lists) {
    console.log('here we are')
    if (lists.length <= 0) return null
    let res = [lists[0]]

    for (let i = 1; i < lists.length; i++) {
      res = this.mergeTwoList(res, lists[i])
    }
    return res
  }

  mergeTwoList (l1, l2) {
    let dummy = new ListNode(-1)
    const res = dummy

    while (l1 && l2) {
      if (l1.val > l2.val) {
        dummy.next = l2
        l2 = l2.next
      } else {
        dummy.next = l1
        l1 = l1.next
      }

      dummy = dummy.next
    }
    if (l1 !== null) {
      dummy.next = l1
    } else {
      dummy.next = l2
    }
    return res.next
  }
}

const four1 = new ListNode(4)
const two1 = new ListNode(2, four1)
const one1 = new ListNode(1, two1)

const five2 = new ListNode(5)
const three2 = new ListNode(3, five2)
const one2 = new ListNode(1, three2)

const six3 = new ListNode(6)
const three3 = new ListNode(3, six3)

const solution = new Solution()

console.log(JSON.stringify(solution.mergeKLists([one1, one2, three3]), null, 2))
