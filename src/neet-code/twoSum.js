const twoSum = (numbers, target) => {
  const map = new Map()
  for (let i = 0; i < numbers.length; i++) {
    const compliment = target - numbers[i]
    if (map.has(compliment)) {
      return [map.get(compliment), i + 1]
    }
    map.set(numbers[i], i + 1)
  }
  return []
}
console.log(twoSum([1, 2, 3, 4], 3))
