const threeSum = (nums) => {
  nums.sort((a, b) => a - b)
  const triplets = []
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right]
      if (currentSum === 0) {
        triplets.push([nums[i], nums[left], nums[right]])
        left++
        right--
        while (left < right && nums[left] === nums[left - 1]) {
          left++
        }
      } else if (currentSum < 0) {
        left++
      } else {
        right--
      }
    }
  }
  return triplets
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
