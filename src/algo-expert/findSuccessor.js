const { NodeClass } = require('../algo-js/nodeClass')

function findSuccessor (tree, node) {
  // Write your code here.
  const nodesArr = []

  const recursive = (tree) => {
    if (!tree) return

    recursive(tree.left)
    nodesArr.push(tree)

    recursive(tree.right)
  }
  recursive(tree)
  for (let i = 0; i < nodesArr.length; i++) {
    if (nodesArr[i] !== node) {
      continue
    }
    if (i === nodesArr.length - 1) {
      return null
    }
    return nodesArr[i + 1]
  }
}

// const findSuccessor1 = (tree, )
const six = new NodeClass(6)
const four = new NodeClass(4, six)
const five = new NodeClass(5)
const two = new NodeClass(2, four, five)
const three = new NodeClass(3)
const one = new NodeClass(1, two, three)
console.log(findSuccessor(one, five))
