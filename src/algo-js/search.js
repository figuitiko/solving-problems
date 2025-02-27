const search = (nums, target) => {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)
    if (nums[mid] === target) {
      return mid
    }
    // which side is sorted
    if (nums[right] > nums[mid]) {
      if (target > nums[mid]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    } else {
      if (target < nums[mid] && target >= nums[left]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
  }
  return -1
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0))
// console.log(search([4, 5, 6, 7, 0, 1, 2], 3))
