const findMin = (nums) => {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] > nums[right]) {
      left = mid + 1
    } else {
      right = right - 1
    }
  }
  return nums[left]
}

console.log(findMin([3, 4, 5, 6, 1, 2]))
