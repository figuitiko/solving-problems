const isPalindrome = (string) => {
  let start = 0
  let end = string.length - 1
  while (end > start) {
    if (string[start] !== string[end]) {
      console.log('here')
      return false
    }
    start++
    end--
  }
  return true
}

console.log(isPalindrome('aba'))
