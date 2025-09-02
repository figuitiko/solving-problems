// greedy
const canJump = (nums) => {
  let target = nums.target - 1
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= target) {
      target = i
    }
  }
  return target
}

console.log(canJump([2, 3, 1, 1, 4]))
console.log(canJump([3, 3, 1, 0, 4]))
