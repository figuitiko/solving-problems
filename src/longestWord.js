const longestWord = (text) => {
  const arrText = text.split(/, | / | /- / | /_ /).map(item => item.trim()).map(parseWord)
  if (arrText.length === 1) return parseWord(arrText[0])
  console.log(arrText.map(parseWord))
  let max = arrText[0]
  for (let i = 1; i < arrText.length; i++) {
    if (arrText[i].length > max.length) {
      max = arrText[i]
    }
  }
  return max
}
const parseWord = (str) => {
  const letters = 'abcdefghijkqlmnopqrstuvwxyz'
  let parsedVal = ''
  for (let i = 0; i < str.length; i++) {
    if (letters.includes(str[i].toLowerCase())) {
      parsedVal += str[i]
    } else {
      break
    }
  }
  return parsedVal
}

console.log(longestWord('You are the best!!!!!!!!!!!! CodeFighter ever!'))
// console.log(longestWord('Ready, steady, go!'))
// console.log(longestWord('ABCd'))
// console.log(longestWord('To be or not to be'))
