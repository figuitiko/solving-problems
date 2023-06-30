const arrayReplace = (inputArray, elemToReplace, substitutionElem) => {
  return inputArray.map(item => {
    if (item === elemToReplace) {
      return substitutionElem
    } else {
      return item
    }
  })
}

console.log(arrayReplace([1, 2, 3], 1, 3))
