const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        ;[array[j], array[i]] = [array[i], array[j]]
      }
    }
  }
  return array
}
console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]))
