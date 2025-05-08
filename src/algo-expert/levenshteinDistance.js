const levenshteinDistance = (str1, str2) => {
  const small = str1.length < str2.length ? str1 : str2
  const big = str1.length >= str2.length ? str1 : str2
  const evenEdits = Array.from({ length: small.length + 1 }, (_, i) => i)
  const oddEdits = Array.from({ length: small.length + 1 }, () => null)
  let currentEdits = []
  let previousEdits = []
  for (let i = 1; i < big.length + 1; i++) {
    if (i % 2 === 1) {
      currentEdits = oddEdits
      previousEdits = evenEdits
    } else {
      currentEdits = evenEdits
      previousEdits = oddEdits
    }
    currentEdits[0] = i
    for (let j = 1; j < small.length + 1; j++) {
      if (big[i - 1] === small[j - 1]) {
        currentEdits[j] = previousEdits[j - 1]
      } else {
        currentEdits[j] = 1 + Math.min(previousEdits[j - 1], previousEdits[j], currentEdits[j - 1])
      }
    }
  }
  return big.length % 2 === 0 ? evenEdits[evenEdits.length - 1] : oddEdits[oddEdits.length - 1]
}

console.log(levenshteinDistance('abc', 'yadb'))
