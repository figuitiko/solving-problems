const mergeSort = (arr) => {
  if (arr.length <= 1) return arr
  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))

  return merge(left, right)
}

const merge = (left, right) => {
  const sortedArr = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }
  }
  return [...sortedArr, ...left, ...right]
}

console.log(mergeSort([4, 2, 1, 9, 3]))
console.log(mergeSort([4, 2, 1]))

// const mergeSortRecursive = (arr) => {
//   const mid = Math.floor(arr.length / 2)
//   const left = arr.slice(0, mid)
//   const right = arr.slice(mid)
//   const recursive = (left, right) => {
//     const sortedArr = []
//     if (left.length < 1 || right < 1) return [...right, ...left]
//     if (left[0] < right[0]) {
//       sortedArr.push(left.shift())
//     } else {
//       sortedArr.push(right.shift())
//     }
//     return [...sortedArr, ...recursive(left, right)]
//   }
//   return recursive(left, right)
// }
// // console.log(mergeSortRecursive([-6, 20, -2, 4, 8]))
// console.log(mergeSortRecursive([14, 23, 3, -6, 20, -2, 4, 8, 12, 6]))
