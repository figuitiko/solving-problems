const validPalindrome = function (s) {
  let left = 0
  let right = s.length - 1
  while (left < right) {
    if (s[left] !== s[right]) {
      return isValid(s, left + 1, right) || isValid(s, left, right - 1)
    }
    left++
    right--
  }
  return true
}

const isValid = (s, left, right) => {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false
    }
    left++
    right--
  }
  return true
}

console.log(validPalindrome('abc'))
