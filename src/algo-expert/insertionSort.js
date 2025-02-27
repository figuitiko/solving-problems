const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    const numberToInsert = array[i]
    let j = i - 1
    while (j >= 0 && array[j] > numberToInsert) {
      // array[j + 1] = array[j]
      ;[array[j + 1], array[j]] = [array[j], array[j + 1]]
      j--
    }
    // array[j + 1] = numberToInsert
  }
  return array
}

console.log(insertionSort([12, 3, 6, 9, 5]))
