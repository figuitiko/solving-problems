const searchInsert = function (nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] === target) {
      return mid
    }
    if (nums[mid] <= target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return left === nums.length ? left + 1 : left
}

console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))
