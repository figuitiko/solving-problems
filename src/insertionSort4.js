const insertionSort4 = (arr) => {
  let result = 0
  while (arr.length > 1) {
    const max = Math.max(...arr)
    const pos = arr.indexOf(max)
    let next = pos + 1
    while (arr[pos] > arr[next] && arr[next]) {
      result++
      next++
    }
    arr = arr.filter((item) => item !== max)
  }
  return result
}
// console.log(insertionSort4([4, 3, 2, 1]))
// console.log(insertionSort4([2, 1, 3, 1, 2])) // 4
const solution = (arr) => {
  let result = 0
  const mergeSort = (arr) => {
    if (arr.length <= 1) return arr
    result++
    const mid = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))
    return merge(left, right)
  }
  const merge = (left, right) => {
    const sortedArr = []
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sortedArr.push(left.shift())
      } else {
        sortedArr.push(right.shift())
      }
    }
    return [...sortedArr, ...left, ...right]
  }
  mergeSort(arr)
  return result
}
// console.log(solution([2, 1, 3, 1, 2]))
// console.log(solution([4, 3, 2, 1]))

// solution took

function update (i, dehaka) {
  while (i < dehaka.length) {
    dehaka[i]++
    i = i + (i & -i)
  }
}

function access (i, dehaka) {
  let sum = 0
  while (i > 0) {
    sum = sum + dehaka[i]
    i = i - (i & -i)
  }
  return sum
}

function insertionSort (arr) {
  let shift = 0
  const dehaka = new Array(10000001).fill(0)
  const n = 10000000
  for (let i = 0; i < arr.length; i++) {
    shift = shift + access(n, dehaka) - access(arr[i], dehaka)
    update(arr[i], dehaka)
  }
  return shift
}

console.log(insertionSort([2, 1, 3, 1, 2]))
console.log(insertionSort([4, 3, 2, 1]))
