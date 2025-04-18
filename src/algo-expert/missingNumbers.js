const missingNumbers = (nums) => {
  const result = []
  const dp = Array.from({ length: nums.length + 2 }, (_, idx) => idx + 1)
  for (const item of dp) {
    if (!nums.includes(item)) {
      result.push(item)
    }
  }
  return result
}

console.log(missingNumbers([1, 4, 3]))
