class BST {
  constructor (value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

const reconstructBst = (preOrderTraversalValues) => {
  if (preOrderTraversalValues.length === 0) return null

  const currentValue = preOrderTraversalValues[0]
  let rightSubtreeRootIdx = preOrderTraversalValues.length

  for (let idx = 1; idx < preOrderTraversalValues.length; idx++) {
    if (preOrderTraversalValues[idx] > currentValue) {
      rightSubtreeRootIdx = idx
      break
    }
  }

  const leftSubtree = reconstructBst(preOrderTraversalValues.slice(1, rightSubtreeRootIdx))
  const rightSubtree = reconstructBst(preOrderTraversalValues.slice(rightSubtreeRootIdx))

  return new BST(currentValue, leftSubtree, rightSubtree)
}
