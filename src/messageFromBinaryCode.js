const messageFromBinaryCode = (code) => {
  let slice8 = ''
  let rest = code
  let letters = ''
  while (rest.length) {
    slice8 = rest.slice(0, 8)
    const digit = parseInt(slice8, 2)
    letters += String.fromCharCode(digit)
    console.log(letters)
    rest = rest.slice(8)
  }
  return letters
}
console.log(messageFromBinaryCode('010010000110010101101100011011000110111100100001'))
