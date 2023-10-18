const isValidSubsequence = (array, sequence) => {
  const tempArr = []
  if (sequence.length > array.length) return false
  for (let i = 0; i < array.length; i++) {
    if (sequence.includes(array[i]) && tempArr.length < sequence.length) {
      tempArr.push(array[i])
      if (tempArr[tempArr.length - 1] !== sequence[tempArr.length - 1]) return false
    }
  }
  if (sequence.length !== tempArr.length) return false

  return true
}
// console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))
console.log(isValidSubsequence([1, 1, 1, 1, 1], [1, 1, 1]))
// console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, -1]))
// console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 23, 6, -1, 8, 10]))
