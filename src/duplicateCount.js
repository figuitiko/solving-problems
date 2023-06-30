const duplicateCount = (text) => {
  const objContainer = new Map()
  let result = 0
  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase()
    if (!objContainer.has(char)) {
      objContainer.set(char, 1)
    } else {
      objContainer.set(char, objContainer.get(char) + 1)
    }
  }
  for (const [, val] of objContainer) {
    if (val > 1) {
      result++
    }
  }
  return result
}

console.log(duplicateCount('abcde'))
console.log(duplicateCount('aabBcde'))
console.log(duplicateCount('Indivisibility'))
