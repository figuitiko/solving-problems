const insertionSort2 = (n, arr) => {
  const arrResult = []
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
      }
    }
    const tempArr = [...arr]
    arrResult.push(tempArr)
  }
  printArr(arr)
  return arr
}

const printArr = (matrix) => {
  matrix.forEach(row => {
    row.forEach(element => {
      process.stdout.write(element + ' ')
    })
    process.stdout.write('\n')
  })
}

// console.log(insertionSort2(6, [1, 4, 3, 5, 6, 2]))
console.log(insertionSort2(6, [3, 4, 7, 5, 6, 2, 1]))
