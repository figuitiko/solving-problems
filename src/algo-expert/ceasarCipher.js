
const caesarCipherEncryptor = (string, key) => {
  if (key === 0) return string
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.repeat(key)
  let result = ''
  for (let i = 0; i < string.length; i++) {
    const idx = alphabet.indexOf(string[i])
    result = result + alphabet[idx + key]
  }
  return result
}
console.log(caesarCipherEncryptor('abc', 0))
