const longPressedName = (name, typed) => {
  const frecMapName = {}
  const frecMapTyped = {}
  for (let i = 0; i < name.length; i++) {
    if (!frecMapName[name[i]]) {
      frecMapName[name[i]] = 1
    } else {
      frecMapName[name[i]] = frecMapName[name[i]] + 1
    }
  }
  for (let i = 0; i < typed.length; i++) {
    if (!frecMapTyped[typed[i]]) {
      frecMapTyped[typed[i]] = 1
    } else {
      frecMapTyped[typed[i]] = frecMapTyped[typed[i]] + 1
    }
  }
  console.log({ frecMapName })
  console.log({ frecMapTyped })
  if (Object.keys(frecMapName).length !== Object.keys(frecMapTyped).length) {
    return false
  }
  if (Object.keys(frecMapName).join('') !== Object.keys(frecMapTyped).join('')) {
    return false
  }

  for (const key of Object.keys(frecMapName)) {
    if (frecMapTyped[key] < frecMapName[key]) {
      return false
    }
  }
  return true
}

// console.log(longPressedName('saeed', 'ssaaedd'))

const longPressedName1 = (name, typed) => {
  let i = 0 // Pointer for name
  let j = 0 // Pointer for typed

  while (j < typed.length) {
    if (name[i] === typed[j]) {
      i++
      j++
    } else if (j === 0 || typed[j] !== typed[j - 1]) {
      // If the character in typed doesn't match the one in name and it's not a long press (repeated character), return false.
      return false
    } else {
      j++ // Skip repeated characters in typed
    }
  }

  // Check if there are any remaining characters in name. If yes, they were not typed.
  while (i < name.length) {
    if (name[i] !== typed[j - 1]) {
      return false
    }
    i++
  }

  return i === name.length
}
// console.log(longPressedName1('saeed', 'ssaaedd'))
console.log(longPressedName1('alex', 'alexxa'))
