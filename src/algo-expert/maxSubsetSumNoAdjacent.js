const maxSubsetSumNoAdjacent = (array) => {
  if (!array.length) return 0
  if (array.length === 1) return 1
  let second = array[0]
  let first = Math.max(array[0], array[1])
  for (let i = 2; i < array.length; i++) {
    const currentMax = Math.max(first, second + array[i])
    second = first
    first = currentMax
  }
  return first
}
console.log(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]))
