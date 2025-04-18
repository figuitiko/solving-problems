const heapify = (arr, length, parentIndex) => {
  let largest = parentIndex
  const left = parentIndex * 2 + 1
  const right = left + 1
  if (left < length && arr[right] > arr[largest]) {
    largest = right
  }
  if (largest !== parentIndex) {
    [arr[parentIndex], arr[largest]] = [arr[largest], arr[parentIndex]]
    heapify(arr, length, largest)
  }
}

const heapSort = (arr) => {
  const length = arr.length
  let lastParentIndex = Math.floor(length / 2 - 1)
  let lastChildIndex = length - 1

  while (lastParentIndex >= 0) {
    heapify(arr, length, lastParentIndex)
    lastParentIndex--
  }
  while (lastChildIndex >= 0) {
    [arr[0], arr[lastChildIndex]] = [arr[lastChildIndex], arr[0]]
    heapify(arr, lastChildIndex, 0)
    lastChildIndex--
  }
  return arr
}
console.log(heapSort([4, 6, 4, 2, 9]))
