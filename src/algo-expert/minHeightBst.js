function minHeightBst (array) {
  // Write your code here.
  let mid = Math.floor((array.length) / 2)
  const firstHalf = array.slice(0, mid)
  const secondHalf = array.slice(mid + 1)
  console.log({
    firstHalf,
    secondHalf
  })
  const newBst = new BST(array[mid])
  while (firstHalf.length) {
    mid = Math.floor((firstHalf.length) / 2)
    newBst.insert(firstHalf[mid])
    firstHalf.splice(mid, 1)
  }
  while (secondHalf.length) {
    mid = Math.floor((secondHalf.length) / 2)
    newBst.insert(secondHalf[mid])
    secondHalf.splice(mid, 1)
  }
  return newBst
}

const minHeightBst1 = (array) => {
  return constructMinHeightBst(array, null, 0, array.length - 1)
}
const constructMinHeightBst = (array, bst, startIdx, endIdx) => {
  if (endIdx < startIdx) return
  const midIdx = Math.floor((startIdx + endIdx) / 2)
  const newBstNode = new BST(array[midIdx])
  if (!bst) {
    bst = newBstNode
  } else {
    if (array[midIdx] < bst.value) {
      bst.left = newBstNode
      bst = bst.left
    } else {
      bst.right = newBstNode
      bst = bst.right
    }
  }
  constructMinHeightBst(array, bst, startIdx, midIdx - 1)
  constructMinHeightBst(array, bst, midIdx + 1, endIdx)
  return bst
}
class BST {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }

  insert (value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value)
      } else {
        this.left.insert(value)
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value)
      } else {
        this.right.insert(value)
      }
    }
  }
}

// console.log(minHeightBst([1, 2, 5, 7, 10, 13, 14, 15, 22]))
console.log(minHeightBst1([1, 2, 5, 7, 10, 13, 14, 15, 22, 28, 32, 36, 89]))
