const { Node } = require('./node-class')
const evaluateExpressionTree = ({ value, left, right }) => {
  if (value === -1) return evaluateExpressionTree(left) + evaluateExpressionTree(right)
  if (value === -2) return evaluateExpressionTree(left) - evaluateExpressionTree(right)
  if (value === -3) return Math.trunc(evaluateExpressionTree(left) / evaluateExpressionTree(right))
  if (value === -4) return evaluateExpressionTree(left) * evaluateExpressionTree(right)
  return value
}

const evaluateExpressionTree1 = ({ value, left, right }) => {
  if (value >= 0) return value
  const leftValue = evaluateExpressionTree1(left)
  const rightValue = evaluateExpressionTree1(right)

  if (value === -1) return leftValue + rightValue
  if (value === -2) return leftValue - rightValue
  if (value === -3) return Math.trunc(leftValue / rightValue)
  return leftValue * rightValue
}

const node1 = new Node(2)
const node2 = new Node(3)
const node3 = new Node(-4, node1, node2)
const node4 = new Node(2)
const node5 = new Node(-2, node3, node4)
const node6 = new Node(8)
const node7 = new Node(3)
const node8 = new Node(-3, node6, node7)
const node9 = new Node(-1, node5, node8)

console.log(evaluateExpressionTree(node9))
console.log(evaluateExpressionTree1(node9))
