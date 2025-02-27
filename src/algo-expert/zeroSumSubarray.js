const zeroSumSubarray = (nums) => {
  let left = 0
  for (let i = 0; i < nums.length; i++) {
    let right = left + 1
    let acc = nums[i]
    if (acc === 0) {
      return true
    }
    while (right < nums.length) {
      acc += nums[right]
      if (acc === 0) {
        return true
      }
      right++
    }
    left++
  }
  return false
}
console.log(zeroSumSubarray([-5, -5, 2, 3, -2]))
console.log(zeroSumSubarray([1, 2, 3, 4, 0, 5, 6, 7]))

const zeroSumSubarray1 = (nums) => {
  const sums = new Set([0])
  let currentSum = 0
  for (const num of nums) {
    currentSum += num
    if (sums.has(currentSum)) {
      return true
    }
    sums.add(currentSum)
  }
  return false
}
// console.log(zeroSumSubarray1([1, 2, 3, 4, 0, 5, 6, 7]))
// console.log(zeroSumSubarray1([4, -3, 2, 4, -1, -5, 7]))
console.log(zeroSumSubarray1([1, 2, 3]))
