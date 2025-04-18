const { NodeClass } = require('../algo-js/nodeClass')

const invertBinaryTree = (tree) => {
  if (!tree) return
  const tempLeft = tree.left
  const tempRight = tree.right
  tree.left = tempRight
  tree.right = tempLeft
  if (tree.left) {
    invertBinaryTree(tree.left)
  }
  if (tree.right) {
    invertBinaryTree(tree.right)
  }

  return tree
}

const nine = new NodeClass(9)
const eight = new NodeClass(8)
const four = new NodeClass(4, eight, nine)
const five = new NodeClass(5)
const six = new NodeClass(6)
const seven = new NodeClass(7)
const three = new NodeClass(3, six, seven)
const two = new NodeClass(2, four, five)
const one = new NodeClass(1, two, three)

console.log(invertBinaryTree(one))
