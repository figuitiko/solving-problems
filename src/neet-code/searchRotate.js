const searchRotate = (nums, target) => {
  let l = 0; let r = nums.length - 1

  while (l <= r) {
    const mid = Math.floor((l + r) / 2)
    if (target === nums[mid]) {
      return mid
    }

    if (nums[l] <= nums[mid]) {
      if (target > nums[mid] || target < nums[l]) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    } else {
      if (target < nums[mid] || target > nums[r]) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    }
  }
  return -1
}

console.log(searchRotate([3, 4, 5, 6, 1, 2], 1))
console.log(searchRotate([3, 5, 6, 0, 1, 2], 4))
console.log(searchRotate([4, 5, 6, 7, 0, 1, 2], 0))
