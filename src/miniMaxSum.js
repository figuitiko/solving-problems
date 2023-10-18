const miniMaxSum = (arr) => {
  arr.sort((a, b) => a - b)
  const min = arr.slice(0, arr.length - 1).reduce((acc, curr) => acc + curr, 0)
  const max = arr.slice(1).reduce((acc, curr) => acc + curr, 0)
  console.log(min, max)
}

console.log(miniMaxSum([1, 3, 5, 7, 9]))
