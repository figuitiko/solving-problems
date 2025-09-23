const longestPalindrome = (s) => {
  let longest = ''
  const isPal = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--
      right++
    }
    return s.slice(left + 1, right)
  }
  for (let i = 0; i < s.length; i++) {
    const oddPal = isPal(s, i, i)
    const evenPal = isPal(s, i, i + 1)
    const longestPal = oddPal.length > evenPal.length ? oddPal : evenPal
    if (longestPal.length > longest.length) {
      longest = longestPal
    }
  }
  return longest
}

// another solution
const longestPalindrome1 = (s) => {
  // console.log(s.split('').sort())
  if (!s) return 0
  let res = 0
  const frecMap = s.split('').reduce((acc, curr) => {
    acc[curr] = (acc[curr] + 1) || 1
    return acc
  }, {})

  const valuesArr = Object.values(frecMap)
  if (valuesArr.length === 1) {
    return valuesArr[0]
  }

  valuesArr.forEach(item => {
    if (item > 1) {
      res += item
    }
  })
  return res % 2 !== 0 ? res : res < s.length ? res + 1 : res
}

console.log(longestPalindrome('babad'))
console.log(longestPalindrome('abccccdd'))
console.log(longestPalindrome('abccccdd'))
console.log(longestPalindrome1('dccaccd'))
console.log(longestPalindrome1('ccc'))
console.log(longestPalindrome1('bananas'))
