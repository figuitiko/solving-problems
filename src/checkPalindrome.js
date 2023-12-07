const checkPalindrome = (inputString) => {
  if (inputString.length === 1) return true
  if (inputString.length === 0) return false
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const reverse = inputString.split('').map(item => item.toLowerCase()).filter(item => alphabet.includes(item)).reverse().join('')
  inputString = inputString.split('').map(item => item.toLowerCase()).filter(item => alphabet.includes(item)).join('')
  console.log(inputString)
  console.log(reverse)
  if (reverse === inputString) return true
  return false
}

// console.log(checkPalindrome('aabaa'))
console.log(checkPalindrome('A man, a plan, a canal. Panama!'))
console.log(checkPalindrome('tacocate'))

// const palindromeIndex
const checkifPalindrome = (sentence) => {
  let i = 0
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let j = sentence.length - 1
  while (i <= j) {
    if ((!alphabet.includes(sentence[i].toLowerCase()) || (!alphabet.includes(sentence[j].toLowerCase())))) {
      continue
    }
    if (sentence[i].toLowerCase() !== sentence[j].toLowerCase()) {
      return false
    }
    i++
    j--
  }
  return true
}

console.log(checkifPalindrome('A man, a plan, a canal. Panama!'))
