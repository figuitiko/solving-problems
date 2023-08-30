const differentSymbolsNaive = (s) => {
  const setOfChars = new Set()
  for (let i = 0; i < s.length; i++) {
    setOfChars.add(s[i])
  }
  return setOfChars.size
}

console.log(differentSymbolsNaive('cabca'))
