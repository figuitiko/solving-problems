const { Node } = require('../nodeClass.js')
const pathSum = (root, targetSum) => {
  const res = []
  const dfs = (root, currSum, currArr) => {
    if (root === null) return []
    currSum += root.val
    currArr.push(root.val)
    if (!root.left && !root.right && currSum === targetSum) {
      res.push([...currArr])
    }
    dfs(root.left, currSum, currArr)
    dfs(root.right, currSum, currArr)
    // backtrack
    currArr.pop()
  }
  dfs(root, 0, [])
  return res
}

const node7 = new Node(7)
const node2 = new Node(2)
const node11 = new Node(11, node7, node2)
const node4 = new Node(4, node11)
const node5 = new Node(5)
const node1 = new Node(1)
const node4Right = new Node(4, node5, node1)
const node13 = new Node(13)
const node8 = new Node(8, node13, node4Right)
const node5Root = new Node(5, node4, node8)

console.log(pathSum(node5Root, 22))
