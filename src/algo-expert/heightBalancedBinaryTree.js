const { NodeClass } = require('../algo-js/nodeClass')

const heightBalancedBinaryTree = (tree) => {
  // const getHeight = (tree) => {
  //   if (!tree) return 0
  //   const queue = [tree]
  //   let height = 0
  //   while (queue.length) {
  //     const currentQueue = [...queue]
  //     for (const currentNode of currentQueue) {
  //       if (currentNode.left) {
  //         queue.push(currentNode.left)
  //       }
  //       if (currentNode.right) {
  //         queue.push(currentNode.right)
  //       }
  //       queue.shift()
  //     }
  //     height++
  //   }
  //   return height
  // }
  let result = true
  const recursive = (tree) => {
    if (!tree) return -1
    const heightLeft = recursive(tree.left)
    const heightRight = recursive(tree.right)

    if (Math.abs(heightLeft - heightRight) > 1) {
      result = false
    }
    return Math.max(heightLeft, heightRight) + 1
  }
  recursive(tree, 0)
  return result
}

const teen = new NodeClass(10)
const nine = new NodeClass(9)
const seven = new NodeClass(7)
const eight = new NodeClass(8)
const five = new NodeClass(5, seven, eight)
const four = new NodeClass(4)
const two = new NodeClass(2, four, five)
const six = new NodeClass(6, nine, teen)
const three = new NodeClass(3, null, six)
const one = new NodeClass(1, two, three)

console.log(heightBalancedBinaryTree(one))
