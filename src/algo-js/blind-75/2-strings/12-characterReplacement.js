// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times. Return the length of the longest substring containing the same letter you can get after performing the above operations.

const characterReplacement = (s, k) => {
  const map = {}
  let topFrequency = 0
  let longest = 0
  let left = 0
  let right = 0

  while (right < s.length) {
    const rightChar = s[right]
    map[rightChar] = map[rightChar] + 1 || 1
    topFrequency = Math.max(topFrequency, map[rightChar])
    // right - left + 1 give us the substring length
    while ((right - left + 1) - topFrequency > k) {
      const leftChar = s[left]
      map[leftChar]--
      left++
    }
    longest = Math.max(longest, (right - left + 1))
    right++
  }
  return longest
}
console.log(characterReplacement('ABAB', 2))
// console.log(characterReplacement('AABABBA', 1))
