const isPalindrome = (s) => {
  const cleanStr = cleanUp(s)
  return isPal(cleanStr)
}

const cleanUp = (str) => {
  const char = 'abcdefghijklmnopqrstuvwxyz01234567890'

  let newS = ''
  for (let i = 0; i < str.length; i++) {
    const lCase = str[i].toLowerCase()
    if (char.indexOf(lCase) !== -1) {
      newS += lCase
    }
  }
  return newS
}

const isPal = (s) => {
  let left = 0
  let right = s.length - 1
  while (left < right) {
    if (s[left] !== s[right]) {
      return false
    }
    left++
    right--
  }
  return true
}

console.log(isPalindrome('aba'))
