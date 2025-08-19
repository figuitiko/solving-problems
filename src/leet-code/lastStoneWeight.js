const lastStoneWeight = (stones) => {
  if (stones.length === 1) return stones[0]
  while (stones.length > 1) {
    stones.sort((a, b) => b - a)
    const first = stones[0]
    const second = stones[1]
    const newVal = first - second
    stones = stones.slice(2)
    if (first !== second) {
      stones = [...stones, newVal]
    }
  }
  return stones[0] ?? 0
}

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]))
// console.log(lastStoneWeight([4, 6, 4, 10]))
// console.log(filterStones([4, 4, 4], 4, 4))
