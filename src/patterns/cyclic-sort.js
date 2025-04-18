// Problem: Find the missing number in an array containing numbers from 0 to n.
function findMissingNumber (nums) {
  let i = 0
  while (i < nums.length) {
    if (nums[i] < nums.length && nums[i] !== nums[nums[i]]) {
      [nums[i], nums[nums[i]]] = [nums[nums[i]], nums[i]]
    } else {
      i++
    }
  }
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== j) return j
  }
  return nums.length
}

console.log(findMissingNumber([1, 4, 6, 8, 9, 12]))
