const countingSort = (arr) => {
  if (arr.length <= 100) {
    const table = Array(arr.length).fill(0)
    for (let i = 0; i < arr.length; i++) {
      table[arr[i]] = table[arr[i]] + 1
    }
    return table
  } else {
    const map = {}
    for (let i = 0; i < arr.length; i++) {
      if (!map[arr[i]]) {
        map[arr[i]] = 1
      } else {
        map[arr[i]] = map[arr[i]] + 1
      }
    }
    return Object.values(map)
  }
}
// console.log(countingSort([1, 1, 3, 2, 1]))

const countingSort1 = (arr) => {
  const map = {}
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = 1
    } else {
      map[arr[i]] = map[arr[i]] + 1
    }
  }
  return Object.values(map)
}
console.log(countingSort1([1, 1, 3, 2, 1]))
