function searchPhone (phones, target) {
  // Your code here...
  let left = 0
  let right = phones.length - 1
  while (left <= right) {
    const mid = Math.floor((right + left) / 2)
    if (phones[mid] === target) {
      return mid
    }
    const isBefore = phones[mid] > target
    if (isBefore) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
}

console.log(searchPhone([1001, 1002, 1003, 1004], 1003))
