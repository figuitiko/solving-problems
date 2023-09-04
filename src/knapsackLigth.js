const knapsackLight = (value1, weight1, value2, weight2, maxW) => {
  if (weight1 > maxW && weight2 > maxW) {
    return 0
  }
  const obArr = [
    {
      val: value1,
      weight: weight1
    },
    {
      val: value2,
      weight: weight2
    }
  ]
  const filteredValues = obArr.filter(item => item.weight <= maxW)
  if (!filteredValues.length) return 0
  const totalWeight = filteredValues.reduce((acc, curr) => curr.weight + acc, 0)
  if (totalWeight > maxW) {
    return Math.max(...filteredValues.map(item => item.val))
  }
  return filteredValues.reduce((acc, curr) => acc + curr.val, 0)
}

// console.log(knapsackLight(10, 5, 6, 4, 8))
// console.log(knapsackLight(5, 3, 7, 4, 6))
console.log(knapsackLight(5, 3, 7, 4, 6))
console.log(knapsackLight(15, 2, 20, 3, 2))
