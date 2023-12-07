const { Node } = require('./node-class')

const branchSums = (root) => {
  const result = []
  let currSum = 0
  const dfs = (root) => {
    currSum += root.value
    if (!root.left && !root.right) {
      result.push(currSum)
      currSum = currSum - root.value
      return
    }
    if (root.left) {
      dfs(root.left)
    }
    if (root.right) {
      dfs(root.right)
    }
    currSum = currSum - root.value
  }
  dfs(root)
  return result
}

const node1 = new Node(8)
const node2 = new Node(9)
const node3 = new Node(4, node1, node2)
const node4 = new Node(10)
const node5 = new Node(5, node4)
const node6 = new Node(6)
const node7 = new Node(7)
const node8 = new Node(3, node6, node7)
const node9 = new Node(2, node3, node5)
const node10 = new Node(1, node9, node8)

console.log(branchSums(node10))
