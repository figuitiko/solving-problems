/*
 * Complete the 'isValid' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

const fs = require('fs')
const filePath = './tes-case-shertlock.txt'
let data = ''
try {
  data = fs.readFileSync(filePath, 'utf8')
  console.log('File contents:', data)
} catch (err) {
  console.error('Error reading file:', err)
}
function isValid (s) {
  // Write your code here
  const objValues = {}
  for (let i = 0; i < s.length; i++) {
    if (s[i] in objValues) {
      objValues[s[i]] = objValues[s[i]] + 1
    } else {
      objValues[s[i]] = 1
    }
  }
  const arrValues = Object.values(objValues)
  if (arrValues.every(item => item === arrValues[0])) {
    return 'YES'
  }
  for (let i = 0; i < arrValues.length; i++) {
    const newArr = arrValues.map((item, idx) => {
      if (idx === i) {
        return item - 1
      }
      return item
    }).filter(item => item !== 0)
    if (newArr.every(item => item === newArr[0])) {
      return 'YES'
    }
  }
  return 'NO'
}

// console.log(isValid('test')) // yes
// console.log(isValid('aabbccddeefghi'))
// console.log(isValid('aabbcd'))
// console.log(isValid('abcdefghhgfedecba'))
// console.log(isValid('aaaabbcc'))
// console.log(isValid('aabbc'))
console.log(isValid(data))
