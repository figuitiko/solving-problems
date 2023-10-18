const findMedian = (arr) => {
  const mediam = Math.floor(arr.length / 2)
  arr.sort((a, b) => a - b)
  return arr[mediam]
}
console.log(findMedian([5, 3, 1, 2, 4]))
