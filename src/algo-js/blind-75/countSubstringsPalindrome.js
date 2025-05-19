const countSubstrings = (s) => {
  let count = 0
  const helper = (left, right) => {
    while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
      count++
      left--
      right++
    }
  }
  for (let i = 0; i < s.length; i++) {
    const left = i
    const right = i
    // odd
    helper(left, right)
    // even
    helper(left, right + 1)
  }
  return count
}

console.log(countSubstrings('abc'))
