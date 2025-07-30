class ListNode {
  constructor (val, next = null, random = null) {
    this.val = val
    this.next = next
  }
}

const addTwoNumbers = (l1, l2) => {
  const num1Arr = []
  const num2Arr = []
  let res = new ListNode(-1)
  const dummy = res
  while (l1) {
    console.log({ l1 })

    num1Arr.unshift(l1.val)

    l1 = l1.next
  }
  while (l2) {
    num2Arr.unshift(l2.val)
    l2 = l2.next
  }
  const num1 = parseInt(num1Arr.join(''))
  const num2 = parseInt(num2Arr.join(''))
  const numsSum = num1 + num2
  const numSumArr = numsSum.toString().split('').reverse()
  for (const num of numSumArr) {
    res.next = new ListNode(parseInt(num))
    res = res.next
  }
  return dummy.next
}

const nodeOneL1 = new ListNode(1)
const nodeTwoL1 = new ListNode(2)
const nodeThreeL1 = new ListNode(3)
const nodeFourL2 = new ListNode(4)
const nodeFiveL2 = new ListNode(5)
const nodeSixL2 = new ListNode(6)

nodeOneL1.next = nodeTwoL1
nodeTwoL1.next = nodeThreeL1
nodeFourL2.next = nodeFiveL2
nodeFiveL2.next = nodeSixL2

console.log(addTwoNumbers(nodeOneL1, nodeFourL2))
