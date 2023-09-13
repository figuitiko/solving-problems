const isSequence = (sequence) => {
  if (sequence.length === 1) return true
  if (sequence.length === 0) return false
  let result = true
  for (let i = 0; i < sequence.length; i++) {
    const dynamicSequence = [...sequence].slice(i, 1)

    result = checkSorted(dynamicSequence)
    if (result) return result
  }
  return false
}

const checkSorted = (arr) => {
  let i = 0
  while (i < arr.length - 1) {
    if (arr[i + 1] < arr[i]) {
      return false
    }
    i++
  }
  return true
}
console.log(isSequence([1, 2, 1, 2]))
