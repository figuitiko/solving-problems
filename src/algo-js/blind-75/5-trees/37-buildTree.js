const { TreeNode } = require('..')
const buildTree = (preOrder, inOrder) => {
  const recurse = (pStart, pEnd, inStart, inEnd) => {
    if (pStart > pEnd || inStart > inEnd) return null
    const rootVal = preOrder[pStart]
    const inIndex = inOrder.indexOf(rootVal)
    const nLeft = inIndex - inStart

    const root = new TreeNode(rootVal)
    root.left = recurse(pStart + 1, pStart + nLeft, inStart, inEnd - 1)
    root.right = recurse(pStart + 1 + nLeft, pEnd, inIndex + 1, inEnd)
    return root
  }
  return recurse(0, preOrder.length - 1, 0, inOrder.length - 1)
}
