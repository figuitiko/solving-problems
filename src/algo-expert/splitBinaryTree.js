const { Node } = require('./node-class')

const splitBinaryTree = (tree) => {
  const desiredTreeSum = getTreeSum(tree) / 2
  const canBeSplit = trySubTrees(tree, desiredTreeSum)[1]
  return canBeSplit ? desiredTreeSum : 0
}
const trySubTrees = (tree, desiredSubtreeSum) => {
  if (!tree) {
    return [0, false]
  }
  const [leftSum, leftCanBeSplit] = trySubTrees(tree.left, desiredSubtreeSum)
  const [rightSum, rightCanBeSplit] = trySubTrees(tree.right, desiredSubtreeSum)

  const currentTreeSum = tree.value + leftSum + rightSum
  const canBeSplit = leftCanBeSplit || rightCanBeSplit || currentTreeSum === desiredSubtreeSum
  return [currentTreeSum, canBeSplit]
}
const getTreeSum = (tree) => {
  if (!tree) return 0
  return tree.value + getTreeSum(tree.left) + getTreeSum(tree.right)
}

const twoA = new Node(2)
const sixA = new Node(6, twoA)
const fiveA = new Node(-5)
const threeA = new Node(3, sixA, fiveA)
const fiveB = new Node(5)
const twoB = new Node(2)
const twoBNeg = new Node(-2, fiveB, twoB)
const oneRoot = new Node(1, threeA, twoBNeg)

console.log(splitBinaryTree(oneRoot))
