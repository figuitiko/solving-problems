const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  return arr
}

console.log(bubbleSort([-6, 20, 8, -2, 4]))

const bubbleSort1 = (arr) => {
  let swapped
  do {
    swapped = false
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        swapped = true
      }
    }
  } while (swapped)
  return arr
}
console.log(bubbleSort1([-6, 20, 8, -2, 4]))
