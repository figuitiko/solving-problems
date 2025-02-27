const commonCharacters = (strings) => {
  const result = []

  for (let i = 0; i < strings.length; i++) {
    for (let j = 0; j < strings[i].length; j++) {
      if (strings.every(item => {
        return item.includes(strings[i][j])
      })) {
        result.push(strings[i][j])
      }
    }
  }
  return [...new Set(result)]
}

console.log(commonCharacters(['abc', 'bcd', 'cbaccd']))

const commonCharacters1 = (strings) => {
  const mapCharacters = new Map()
  for (let i = 0; i < strings.length; i++) {
    const setString = [...new Set(strings[i].split(''))]
    for (let j = 0; j < setString.length; j++) {
      if (!mapCharacters.get(strings[i][j])) {
        mapCharacters.set(strings[i][j], 1)
      } else {
        mapCharacters.set(strings[i][j], mapCharacters.get(strings[i][j]) + 1)
      }
    }
  }
  console.log(mapCharacters)
}
console.log(commonCharacters1(['abc', 'bcd', 'cbaccd']))
