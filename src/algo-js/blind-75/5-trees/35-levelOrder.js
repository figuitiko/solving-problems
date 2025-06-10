const { TreeNode } = require('..')

const levelOrder = (root) => {
  if (root === null) return []
  const res = []
  const queue = [root]
  while (queue.length) {
    const levelArr = []
    let levelSize = queue.length
    while (levelSize) {
      const current = queue.shift()
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
      levelArr.push(current.val)
      levelSize--
    }
    res.push(levelArr)
  }
  return res
}

const seven = new TreeNode(7)
const fifteen = new TreeNode(15)
const twenty = new TreeNode(20, fifteen, seven)
const nine = new TreeNode(9)
const three = new TreeNode(3, nine, twenty)

console.log(levelOrder(three))
