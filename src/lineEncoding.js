const lineEncoding = (s) => {
  if (s.length === 0) return ''

  let encoded = ''
  let currentChar = s[0]
  let charCount = 1

  for (let i = 1; i < s.length; i++) {
    if (s[i] === currentChar) {
      charCount++
    } else {
      encoded += (charCount > 1 ? charCount : '') + currentChar
      currentChar = s[i]
      charCount = 1
    }
  }

  // Add the last character(s)
  encoded += (charCount > 1 ? charCount : '') + currentChar

  return encoded
}

console.log(lineEncoding('aabbbc'))
// console.log(lineEncoding('ffhikk'))
