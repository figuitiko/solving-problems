const isPalindrome = function (s) {
  const cleanStr = clean(s)
  let left = 0
  let right = cleanStr.length - 1
  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false
    }
    left++
    right--
  }
  return true
}

const clean = function (s) {
  const alphaNumericSet = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])
  let cleanStr = ''
  for (const str of s) {
    const strLower = str.toLowerCase()
    if (alphaNumericSet.has(strLower)) {
      cleanStr += strLower
    }
  }
  return cleanStr
}

console.log(isPalindrome('abc ddabce'))
