const binarySearch = (array, target) => {
  let result = null
  const mainArray = array
  const recursive = (array, target) => {
    const mid = Math.floor(array.length / 2)
    if (target === array[mid]) {
      result = mainArray.indexOf(target)
      return
    }
    if (array.length <= 1) return -1
    if (target <= array[mid]) {
      recursive(array.slice(0, mid), target)
    } else {
      recursive(array.slice(mid), target)
    }
  }
  recursive(array, target)
  return result ?? -1
}

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33))
