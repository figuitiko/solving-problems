const missingNumber = (nums) => {
  let xor = nums.length
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ i ^ nums[i]
  }
  return xor
}

console.log(missingNumber([3, 0, 1]))
