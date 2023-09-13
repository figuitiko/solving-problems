// given a string of morsecode that contains a list of '.' and '-' you are allowd to mae one move an replace tow consecutive '.'
// " .. "  with "--";
// " -- " with ".."; return array of all combinations of morsecode
const morseCode = (morsecode) => {
  const res = []
  const morsecodeArray = morsecode.split('')
  const morsecodeArrayLength = morsecodeArray.length
  let i = 0
  while (i < morsecodeArrayLength) {
    if (morsecodeArray[i] === '.' && morsecodeArray[i + 1] === '.') {
      const morsecodeArrayCopy = morsecodeArray.slice()
      morsecodeArrayCopy.splice(i, 2, '-')
      res.push(morsecodeArrayCopy.join(''))
      i++
    } else if (morsecodeArray[i] === '-' && morsecodeArray[i + 1] === '-') {
      const morsecodeArrayCopy = morsecodeArray.slice()
      morsecodeArrayCopy.splice(i, 2, '.')
      res.push(morsecodeArrayCopy.join(''))
      i++
    } else {
      i++
    }
  }
  return res
}

console.log(morseCode('....'))
