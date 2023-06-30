const insertionSort1 = (n, arr) => {
  const arrResult = []
  for (let i = arr.length - 1; i >= 0; i--) {
    const tempArr = [...arr]
    if (arr[i] < arr[i - 1]) {
      [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]]
      ;[tempArr[i], tempArr[i - 1]] = [tempArr[i - 1], tempArr[i - 1]]
      arrResult.push(tempArr)
    }
  }
  arrResult.push(arr)
  printArr(arrResult)
  return arrResult
}

const printArr = (matrix) => {
  matrix.forEach(row => {
    row.forEach(element => {
      process.stdout.write(element + ' ')
    })
    process.stdout.write('\n')
  })
}

console.log(insertionSort1(5, [2, 4, 6, 8, 3]))
