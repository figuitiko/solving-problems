const { NodeValueClass } = require('../algo-js/nodeClass')

const symmetricalTree = (tree) => {
  if (!tree.right && !tree.left) return true
  if (!tree.left || !tree.right) return false
  const queueA = [tree.left]
  const queueB = [tree.right]
  while (queueA.length !== 0 || queueB.length !== 0) {
    if (queueA.length !== queueB.length) return false
    for (let i = 0; i < queueA.length; i++) {
      if (queueA[i].value !== queueB[i].value) return false
      const currentNodeA = queueA.shift()
      const currentNodeB = queueB.shift()
      if (currentNodeA.left && !currentNodeB.right) {
        return false
      }
      if (currentNodeA.right && !currentNodeB.left) {
        return false
      }
      if (currentNodeB.left && !currentNodeA.right) {
        return false
      }
      if (currentNodeB.right && !currentNodeA.left) {
        return false
      }

      if (currentNodeA.left) {
        queueA.unshift(currentNodeA.left)
      }
      if (currentNodeB.right) {
        queueB.unshift(currentNodeB.right)
      }
      if (currentNodeA.right) {
        queueA.unshift(currentNodeA.right)
      }
      if (currentNodeB.left) {
        queueB.unshift(currentNodeB.left)
      }
    }
  }
  return true
}

const fiveA = new NodeValueClass(5)
const sixA = new NodeValueClass(6)
const threeA = new NodeValueClass(3, fiveA, sixA)
const fourA = new NodeValueClass(4)
const twoA = new NodeValueClass(2, threeA, fourA)
const sixB = new NodeValueClass(6)
const fiveB = new NodeValueClass(5)
const threeB = new NodeValueClass(3, sixB, fiveB)
const fourB = new NodeValueClass(4)
const twoB = new NodeValueClass(2, fourB, threeB)
const one = new NodeValueClass(1, twoA, twoB)

console.log(symmetricalTree(one))

const threeSecondA = new NodeValueClass(3)
const threeSecondB = new NodeValueClass(3)
const twoSecondA = new NodeValueClass(2, threeSecondA, threeSecondB)
const twoSecondB = new NodeValueClass(2)
const oneSecond = new NodeValueClass(1, twoSecondA, twoSecondB)

console.log(symmetricalTree(oneSecond))
