const mergeOverlappingIntervals = (array) => {
  array = array.sort((a, b) => a[0] - b[0])
  const result = [array[0]]

  for (let i = 1; i < array.length; i++) {
    const [a, b] = array[i]
    const [firstValue, lastValue] = result[result.length - 1]
    if (a <= lastValue) {
      result[result.length - 1] = [firstValue, Math.max(b, lastValue)]
    } else {
      result.push(array[i])
    }
  }
  return result
}
console.log(mergeOverlappingIntervals([[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]]))

const mergeOverlappingIntervals1 = (array) => {
  array = array.sort((a, b) => a[0] - b[0])
  let previous = array[0]
  const res = [array[0]]
  for (let i = 1; i < array.length; i++) {
    const current = array[i]
    if (previous[1] >= current[0]) {
      previous[1] = Math.max(previous[1], current[1])
    } else {
      res.push(current)
      previous = current
    }
  }
  return res
}
console.log(mergeOverlappingIntervals1([[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]]))
