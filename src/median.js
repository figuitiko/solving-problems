const median = (arr) => {
  arr.sort((a, b) => a - b)
  const mid = Math.floor(arr.length / 2)
  return arr[mid]
}
console.log(median([5, 3, 1, 2, 4]))
