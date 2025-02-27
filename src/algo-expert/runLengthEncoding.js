const runLengthEncoding = (string) => {
  let length = 1
  let result = ''
  for (let i = 1; i < string.length; i++) {
    const prev = string[i - 1]
    if (prev !== string[i] || length === 9) {
      result += length + string[i - 1]
      length = 0
    }
    length++
  }
  result += length + string[string.length - 1]
  return result
}

console.log(runLengthEncoding('AAAAAAAAAAAAABBCCCCDD'))
