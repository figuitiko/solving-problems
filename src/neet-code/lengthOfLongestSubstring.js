const lengthOfLongestSubstring = (s) => {
  let longest = 0
  const set = new Set()
  let left = 0
  let right = 0
  while (right < s.length) {
    const rightChar = s[right]
    if (!set.has(rightChar)) {
      set.add(rightChar)
      longest = Math.max(longest, set.size)
      right++
    } else {
      const leftChar = s[left]
      set.delete(leftChar)
      left++
    }
  }
  return longest
}

console.log(lengthOfLongestSubstring('pwwkew'))
// console.log(lengthOfLongestSubstring('dvdf'))
