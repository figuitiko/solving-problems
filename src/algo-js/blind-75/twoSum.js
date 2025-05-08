const twoSum = (nums, target) => {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i]
    if (map.has(compliment)) {
      return [i, map.get(compliment)]
    } else {
      map.set(nums[i], i)
    }
  }
  return false
}
const twoSum1 = (nums, target) => {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i]
    if (map[compliment] !== undefined) {
      return [i, map[compliment]]
    } else {
      map[nums[i]] = i
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum1([2, 7, 11, 15], 9))
