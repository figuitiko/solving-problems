const { NodeClass } = require('../algo-js/nodeClass')

const binaryTreeDiameter = (tree) => {
  return getTreeInfo(tree).diameter
}
const getTreeInfo = (tree) => {
  if (!tree) {
    return { diameter: 0, height: 0 }
  }
  const leftTreeInfo = getTreeInfo(tree.left)
  const rightTreeInfo = getTreeInfo(tree.right)

  const longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height
  const maxDiameterSoFar = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter)
  const currentDiameter = Math.max(longestPathThroughRoot, maxDiameterSoFar)
  const currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height)
  return { diameter: currentDiameter, height: currentHeight }
}

const nine = new NodeClass(9)
const eight = new NodeClass(8, nine)
const seven = new NodeClass(7, eight)
const six = new NodeClass(6)
const five = new NodeClass(5, null, six)
const four = new NodeClass(4, null, five)
const two = new NodeClass(2)
const three = new NodeClass(3, seven, four)
const one = new NodeClass(1, three, two)

console.log(binaryTreeDiameter(one))
