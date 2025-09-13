const searchRotateSorted2 = (nums, target) => {
  nums = [...new Set(nums)]
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      return true
    }
    if (nums[right] > nums[mid]) {
      if (target > nums[mid] && target <= nums[right]) {
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
  return false
}
console.log(searchRotateSorted2([1, 0, 1, 1, 1], 0))
