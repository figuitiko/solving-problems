// use sorted arr
const binarySearch = (arr, x) => {
  let start = 0
  let end = arr.length - 1
  let mid

  while (end >= start) {
    mid = Math.floor((start + end) / 2)
    if (arr[mid] === x) {
      return mid
    }

    if (arr[mid] > x) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return -1
}

console.log(binarySearch([2, 3, 4, 10, 40], 10))

const recursiveBinarySearch = (arr, target) => {
  const search = (arr, target, leftIndex, rightIndex) => {
    if (leftIndex > rightIndex) {
      return -1
    }
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (target === arr[middleIndex]) {
      return middleIndex
    }
    if (target < arr[middleIndex]) {
      return search(arr, target, leftIndex, middleIndex - 1)
    } else {
      return search(arr, target, middleIndex + 1, rightIndex)
    }
  }
  return search(arr, target, 0, arr.length - 1)
}

// console.log(binarySearchRecursive([2, 3, 4, 10, 40], 10))
console.log(recursiveBinarySearch([2, 3, 4, 10, 40, 45, 60, 62], 60))
