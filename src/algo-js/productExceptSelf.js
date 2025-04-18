const productExceptSelf = (nums) => {
  const res = []
  let start = 1
  for (let i = 0; i < nums.length; i++) {
    res.push(start)
    start = start * nums[i]
  }
  let start2 = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = start2 * res[i]
    start2 = start2 * nums[i]
  }
  return res
}
console.log(productExceptSelf([1, 2, 3, 4]))
