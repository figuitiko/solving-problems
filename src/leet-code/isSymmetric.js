const { TreeNode } = require('../algo-js/blind-75')

const isSymmetric = function (root) {
  if (!root) return false
  const queue = [[root.left, root.right]]

  while (queue.length) {
    const [left, right] = queue.pop()
    if (left?.val !== right?.val) {
      return false
    }
    if (left?.left || right.right) {
      queue.push([left?.left, right?.right])
    }
    if (left.right || right.left) {
      queue.push([left?.right, right?.left])
    }
  }

  return true
}

const isSymmetric1 = (root) => {
  const recurse = (left, right) => {
    if (!left && !right) return true
    if (!left || !right || left.val !== right.val) return false
    return recurse(left.left, right.right) && recurse(left.right, right.right)
  }
  return recurse(root.left, root.right)
}
const three = new TreeNode(3)
const three1 = new TreeNode(3)
const four = new TreeNode(4)
const four1 = new TreeNode(4)
const two = new TreeNode(2, three, four)
const two1 = new TreeNode(2, four1, three1)
const one = new TreeNode(2, two, two1)

console.log(isSymmetric(one))
console.log(isSymmetric1(one))

const three2 = new TreeNode(3)
const two2 = new TreeNode(2)
const one1 = new TreeNode(1, two2, three2)

console.log(isSymmetric(one1))
