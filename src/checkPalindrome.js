const checkPalindrome = (inputString) => {
  if (inputString.length === 1) return true
  if (inputString.length === 0) return false
  const reverse = inputString.split('').reverse().join('')
  if (reverse === inputString) return true
  return false
}

console.log(checkPalindrome('aabaa'))
