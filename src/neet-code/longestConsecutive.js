const longestConsecutive = (nums) => {
  if (nums.length === 0) return 0
  const uniqueArr = [...new Set(nums)]
  uniqueArr.sort((a, b) => a - b)
  let consecutive = 1
  let maxConsecutive = 1
  for (let i = 1; i < uniqueArr.length; i++) {
    while (uniqueArr[i] === uniqueArr[i - 1] + 1) {
      consecutive += 1
      i++
    }
    maxConsecutive = Math.max(maxConsecutive, consecutive)
    consecutive = 1
  }
  return maxConsecutive
}
const longestConsecutive1 = (nums) => {
  const numSet = new Set(nums)
  let longest = 0
  for (const n of nums) {
    if (!numSet.has(n - 1)) {
      let length = 0
      while (numSet.has(n + length)) {
        length += 1
      }
      longest = Math.max(length, longest)
    }
  }
  return longest
}
// console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]))
console.log(longestConsecutive1([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]))

// console.log(longestConsecutive([2, 20, 4, 10, 3, 4, 5]))
