const { NodeClass } = require('../algo-js/nodeClass')
const findKthLargestValueInBst = (tree, k) => {
  const queue = [tree]
  const resultArr = []
  while (queue.length) {
    const node = queue.shift()
    resultArr.push(node.val)
    if (node.left) {
      queue.push(node.left)
    }
    if (node.right) {
      queue.push(node.right)
    }
  }
  return resultArr.sort((a, b) => b - a)[k - 1]
}

const findKthLargestValueInBst1 = (tree, k) => {
  const result = []
  const recursive = (tree) => {
    if (result.length >= k) return
    if (!tree) return
    recursive(tree.right)
    if (result.length < k) {
      result.push(tree.val)
    }
    recursive(tree.left)
    return result
  }
  recursive(tree, result)
  return result.at(-1)
}
const findKthLargestValueInBst2 = (tree, k) => {
  let visited = 0
  let lastValue = null
  const recursive = (tree) => {
    if (!tree) return
    recursive(tree.right)
    if (visited !== k) {
      lastValue = tree.val
      visited++
    }
    recursive(tree.left)
  }
  recursive(tree)
  return lastValue
}
const findKthLargestValueInBst3 = (tree, k, visited = 0, lastValue = null) => {
  if (!tree) return
  findKthLargestValueInBst3(tree.right, k, visited, lastValue)
  if (visited !== k) {
    lastValue = tree.val
    visited++
  } else {
    return
  }
  findKthLargestValueInBst3(tree.left, k, visited, lastValue)
  return lastValue
}

const one = new NodeClass(1)
const three = new NodeClass(3)
const two = new NodeClass(2, one, three)
const fiveA = new NodeClass(5)
const five = new NodeClass(5, two, fiveA)
const seventeen = new NodeClass(17)
const twentyTwo = new NodeClass(22)
const twenty = new NodeClass(20, seventeen, twentyTwo)
const fifteen = new NodeClass(15, five, twenty)
// console.log(findKthLargestValueInBst(fifteen, 3))
// console.log(findKthLargestValueInBst1(fifteen, 3))
console.log(findKthLargestValueInBst2(fifteen, 3))
// console.log(findKthLargestValueInBst3(fifteen, 3))
