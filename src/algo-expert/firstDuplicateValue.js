const firstDuplicateValue = (array) => {
  if (array.length === 1) return -1
  const tempArrSet = new Set()
  tempArrSet.add(array[0])
  for (let i = 1; i < array.length; i++) {
    if (tempArrSet.has(array[i])) {
      return array[i]
    }
    tempArrSet.add(array[i])
  }
  return -1
}
console.log(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4]))

const firstDuplicateValue1 = (array) => {
  for (const value of array) {
    const absValue = Math.abs(value)
    if (array[absValue - 1] < 0) {
      return absValue
    }
    array[absValue - 1] *= -1
  }
  return -1
}

console.log(firstDuplicateValue1([2, 1, 5, 2, 3, 3, 4]))
