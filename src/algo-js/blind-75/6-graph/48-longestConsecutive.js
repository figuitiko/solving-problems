const longestConsecutive = (nums) => {
  const set = new Set(nums)
  let streak = 0
  for (let num of set) {
    if (set.has(num - 1)) continue
    let currStreak = 1
    while (set.has(num + 1)) {
      currStreak++
      num++
    }
    streak = Math.max(streak, currStreak)
  }
  return streak
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 3, 2]))
