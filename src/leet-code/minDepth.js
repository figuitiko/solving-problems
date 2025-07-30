
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const minDepth = (root) => {
  if (!root) return 0
  let minDepth = 1
  const queue = [root]

  while (queue.length) {
    let levelSize = queue.length
    while (levelSize) {
      const current = queue.shift()
      if (current.left === null && current.right === null) {
        return minDepth
      } else {
        if (current.left) queue.push(current.left)
        if (current.right) queue.push(current.right)
      }
      levelSize--
    }
    minDepth += 1
  }
  return minDepth
}

const seven = new TreeNode(7)
const fifteen = new TreeNode(15)
const twenty = new TreeNode(20, fifteen, seven)
const nine = new TreeNode(9)
const three = new TreeNode(3, nine, twenty)

console.log(minDepth(three))

const six1 = new TreeNode(6)
const five1 = new TreeNode(5, null, six1)
const four1 = new TreeNode(4, null, five1)
const three1 = new TreeNode(3, null, four1)
const two1 = new TreeNode(2, null, three1)

console.log(minDepth(two1))
