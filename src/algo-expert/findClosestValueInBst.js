// import { Node } from '../algo-js/nodeClass'
const { Node } = require('../algo-js/nodeClass')
const findClosestValueInBst = (tree, target) => {
  let minimun = Infinity
  let result = null
  const dfs = (node) => {
    if (Math.abs(target - node.val) < minimun) {
      minimun = Math.abs(target - node.val)
      result = node.val
    }
    if (!node.left && !node.right) return
    if (node.left) {
      dfs(node.left)
    }
    if (node.right) {
      dfs(node.right)
    }
  }
  dfs(tree)
  return result
}

const node1 = new Node(1)
const node2 = new Node(2, node1)
const node3 = new Node(5)
const node5 = new Node(5, node2, node3)
const node6 = new Node(14)
const node7 = new Node(13, node6)
const node8 = new Node(22)
const node9 = new Node(15, node7, node8)
const node10 = new Node(10, node5, node9)

console.log(findClosestValueInBst(node10, 12))
