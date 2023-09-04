/*
 * Complete the 'encryption' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function encryption (s) {
  // Write your code here
  const strWithNotSpaces = s.replace(/\s+/g, '')
  const squareRoot = Math.sqrt(strWithNotSpaces.length)
  const min = Math.floor(squareRoot)
  const max = squareRoot % 1 === 0 ? squareRoot : min + 1
  const matrix = []
  for (let i = 0; i < strWithNotSpaces.length; i = i + max) {
    const newArr = []
    for (let j = i; j < i + max; j++) {
      newArr.push(strWithNotSpaces[j])
    }
    const strArr = newArr.join('')
    matrix.push(strArr)
  }
  const matrixEncrypted = []
  for (let i = 0; i < matrix[0].length; i++) {
    const newArr = []
    for (let j = 0; j < matrix.length; j++) {
      newArr.push(matrix[j]?.[i])
    }
    matrixEncrypted.push(newArr.join(''))
  }
  return matrixEncrypted.join(' ')
}

console.log(encryption('haveaniceday'))
// console.log(encryption('if man was meant to stay on the ground god would have given us roots'))
// console.log(encryption('pepeelbambino'))
