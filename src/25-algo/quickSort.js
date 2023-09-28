const quickSort = (arr) => {
  const pivot = arr[arr.length - 1]
  const leftArr = []
  const rightArr = []
  if (arr.length < 2) return arr
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i])
    } else {
      rightArr.push(arr[i])
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}
console.log(quickSort([-6, 20, 8, -2, 4]))
