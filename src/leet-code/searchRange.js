const searchRange = (nums, target) => {
  const res = [-1, -1]
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    const mid = Math.floor((r + l) / 2)
    const isBefore = nums[mid] > target
    if (nums[mid] === target) {
      let start = mid
      let end = mid
      while (nums[start] === nums[mid]) {
        start--
      }
      while (nums[end] === nums[mid]) {
        end++
      }

      res[0] = start + 1
      res[1] = end - 1
      return res
    }
    if (isBefore) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return res
}
console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
console.log(searchRange([1, 2, 3, 3, 3, 3, 4, 5, 9], 3))
console.log(searchRange([1, 2, 3, 4, 5, 9], 3))
