const { ListNode } = require('../neet-code')

const addTwoNumbers = (l1, l2) => {
  let acc = 0
  let dump = new ListNode(-1)
  const res = dump

  while (l1 && l2) {
    const sumValues = l1.val + l2.val
    const currSum = sumValues + acc
    const currRes = currSum > 9 ? currSum - 10 : currSum
    const currResNode = new ListNode(currRes)
    dump.next = currResNode
    dump = dump.next
    acc = currSum > 9 ? 1 : 0
    if (l1.next === null && l2.next === null && acc) {
      dump.next = new ListNode(acc)
      l1 = l1.next
      l2 = l2.next
      break
    }
    l1 = l1.next
    l2 = l2.next
  }

  helperSumSingleList(l1, acc, dump)
  helperSumSingleList(l2, acc, dump)

  return res.next
}
function helperSumSingleList (list, acc, dump) {
  while (list) {
    const currSum = list.val + acc
    const currRes = currSum > 9 ? currSum - 10 : currSum
    const currResNode = new ListNode(currRes)
    dump.next = currResNode
    dump = dump.next
    acc = currSum > 9 ? 1 : 0
    if (list.next === null && acc) {
      dump.next = new ListNode(acc)
      break
    }
    list = list.next
  }
}

const two1 = new ListNode(2)
const four1 = new ListNode(4)
const three1 = new ListNode(3)
two1.next = four1
four1.next = three1

const five2 = new ListNode(5)
const six2 = new ListNode(6)
const four2 = new ListNode(4)

five2.next = six2
six2.next = four2

// console.log(addTwoNumbers(two1, five2))
// [9, 9, 9, 9, 9, 9, 9]
//  [9,9,9,9]
const nine1 = new ListNode(9)
const nine2 = new ListNode(9)
const nine3 = new ListNode(9)
const nine4 = new ListNode(9)
const nine5 = new ListNode(9)
const nine6 = new ListNode(9)
const nine7 = new ListNode(9)
nine1.next = nine2
nine2.next = nine3
nine3.next = nine4
nine4.next = nine5
nine5.next = nine6
nine6.next = nine7

const nine8 = new ListNode(9)
const nine9 = new ListNode(9)
const nine10 = new ListNode(9)
const nine11 = new ListNode(9)

nine8.next = nine9
nine9.next = nine10
nine10.next = nine11

const fiveSecond1 = new ListNode(5)
const fiveSecond2 = new ListNode(5)

// console.log(JSON.stringify(addTwoNumbers(nine1, nine8), null, 2))
console.log(addTwoNumbers(fiveSecond1, fiveSecond2))
