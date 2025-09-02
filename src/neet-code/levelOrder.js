const { TreeNode } = require('../algo-js/blind-75')

const levelOrder = (root) => {
  const queue = [root]
  const res = []
  while (queue.length) {
    let length = queue.length
    const currLev = []
    while (length) {
      const curr = queue.shift()
      if (curr.left) queue.push(curr.left)
      if (curr.right) queue.push(curr.right)
      length--
      currLev.push(curr.val)
    }
    res.push(currLev)
  }
  return res
}
const four = new TreeNode(4)
const five = new TreeNode(5)
const two = new TreeNode(2, four, five)
const six = new TreeNode(6)
const seven = new TreeNode(7)
const three = new TreeNode(3, six, seven)
const one = new TreeNode(1, two, three)

console.log(levelOrder(one))
