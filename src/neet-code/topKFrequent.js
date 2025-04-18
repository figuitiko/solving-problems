const topKFrequent = (nums, k) => {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] || 0) + 1
  }
  console.log(map)
  const mapArr = Object.entries(map)
  mapArr.sort((a, b) => {
    const [, valueA] = a
    const [, valueB] = b
    return valueB - valueA
  })
  return mapArr.slice(0, k).map(item => {
    const [a] = item
    return a
  })
}
// console.log(topKFrequent([3, 1, 1, 1, 2, 2], 2))
console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2))

function topKFrequent1 (nums, k) {
  const count = {}
  for (const num of nums) {
    count[num] = (count[num] || 0) + 1
  }

  const arr = Object.entries(count).map(([num, freq]) => [freq, parseInt(num)])
  arr.sort((a, b) => b[0] - a[0])

  return arr.slice(0, k).map(pair => pair[1])
}
console.log(topKFrequent1([1, 2, 2, 3, 3, 3], 2))
