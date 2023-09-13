function solution (n) {
  const nArr = n.toString().split('').map(item => parseInt(item))
  console.log(nArr)
  const product = nArr.reduce((a, b) => a * b)
  const sum = nArr.reduce((a, b) => a + b)
  return product - sum
}

console.log(solution(234))

// A string is said to be beautiful if each letter in the string appears at most as many times
// as the previous letter in the alphabet within the string; ie: b occurs no more times than a;
// c occurs no more times than b; etc.Note that letter a has no previous letter.
// Given a string, check whether it is beautiful.

// For inputString = "bbbaacdafe", the output should be solution(inputString) = true.

// This string contains 3 as, 3 bs, 1 c, 1 d, 1 e, and 1 f (and 0 of every other letter), so since there aren't any letters that appear more frequently than the previous letter, this string qualifies as beautiful.

// For inputString = "aabbb", the output should be solution(inputString) = false.

// Since there are more bs than as, this string is not beautiful.

// function beautifulString (inputString) {
//   const arr = inputString.split('').sort()
//   const obj = {}
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz'
//   const alphabetArr = alphabet.split('')
//   const alphabetObj = {}
//   for (let i = 0; i < alphabetArr.length; i++) {
//     alphabetObj[alphabetArr[i]] = 0
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]]) {
//       obj[arr[i]] += 1
//     } else {
//       obj[arr[i]] = 1
//     }
//   }
//   console.log({ obj })
//   const objValues = Object.values(obj)
//   console.log({ objValues })
//   for (let i = 0; i < objValues.length; i++) {
//     if (objValues[i + 1] > objValues[i]) return false
//     if (objValues[i] === 0) return false
//   }
//   return true
// }

// console.log(beautifulString('bbbaacdafe')) //  true
// console.log(beautifulString('aabbb')) //  true
// console.log(beautifulString('bbc')) //  false
function isBeautifulString (str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const alphabetArr = alphabet.split('')
  const alphabetObj = {}
  for (let i = 0; i < alphabetArr.length; i++) {
    alphabetObj[alphabetArr[i]] = 0
  }
  for (let i = 0; i < str.length; i++) {
    alphabetObj[str[i]] += 1
  }
  const objValues = Object.values(alphabetObj)
  console.log(alphabetObj)
  console.log(objValues)
  for (let i = 0; i < objValues.length; i++) {
    if (objValues[i + 1] > objValues[i]) return false
    if (objValues[i] > objValues[i - 1]) return false
  }
  return true
}

console.log(isBeautifulString('bbbaacdafe')) //  true
// console.log(isBeautifulString('aabbb')) //  true
// console.log(isBeautifulString('aabbc')) //  false
// console.log(isBeautifulString('bbc')) //  false
