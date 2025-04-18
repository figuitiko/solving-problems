const sweetAndSavory = (dishes, target) => {
  const sweetDishes = dishes.filter(item => item < 0).sort((a, b) => Math.abs(a) - Math.abs(b))
  const savoryDishes = dishes.filter(item => item >= 0).sort((a, b) => a - b)
  let bestPair = [0, 0]
  let bestDifference = Infinity
  let [sweetIndex, savoryIndex] = [0, 0]
  while (sweetIndex < sweetDishes.length && savoryIndex < savoryDishes.length) {
    const currentSum = sweetDishes[sweetIndex] + savoryDishes[savoryIndex]
    if (currentSum <= target) {
      const currentDifference = target - currentSum
      if (currentDifference < bestDifference) {
        bestDifference = currentDifference
        bestPair = [sweetDishes[sweetIndex], savoryDishes[savoryIndex]]
      }
      savoryIndex += 1
    } else {
      sweetIndex += 1
    }
  }
  return bestPair
}
console.log(sweetAndSavory([-3, -5, 1, 7], 8))
