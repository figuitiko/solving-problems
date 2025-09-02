const longestCommonPrefix = function (strs) {
  if (!strs.length) return ''
  for (let i = 0; i < strs[0].length; i++) {
    for (const s of strs) {
      if (strs[0][i] !== s[i]) {
        return s.slice(0, i)
      }
    }
  }
  return strs[0]
}

// console.log(longestCommonPrefix(['dog', 'racecar', 'car']))
console.log(longestCommonPrefix(['flower', 'flow', 'alight']))
