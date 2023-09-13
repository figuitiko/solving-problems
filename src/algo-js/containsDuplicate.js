const containsDuplicate = (nums) => {
  const set = new Set(nums)
  return set.size !== nums.length
}

console.log(containsDuplicate([5, 7, 8, 6, 4]))
