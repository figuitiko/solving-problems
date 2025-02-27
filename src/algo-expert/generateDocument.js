const generateDocument = (characters, document) => {
  // const frecMapCha = {}
  for (const char of document) {
    const documentAmount = countCharacter(char, characters)
    const charactersAmount = countCharacter(char, document)
    console.log({ documentAmount, charactersAmount })
    if (documentAmount < charactersAmount) {
      return false
    }
  }
  return true
}
const countCharacter = (char, string) => {
  let result = 0
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      result += 1
    }
  }
  return result
}
const characters = 'Bste!hetsi ogEAxpelrt x '
const document = 'AlgoExpert is the Best!'
console.log(generateDocument(characters, document))
