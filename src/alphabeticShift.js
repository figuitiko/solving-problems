
const alphabeticShift = (inputString) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let strResult = ''
  for (let i = 0; i < inputString.length; i++) {
    let idxVal = alphabet.indexOf(inputString[i])
    idxVal = idxVal < 25 ? idxVal + 1 : 0
    strResult += alphabet[idxVal]
  }
  return strResult
}

console.log(alphabeticShift('crazy'))
