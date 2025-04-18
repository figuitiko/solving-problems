function topKFrequent (nums, k) {
  const freqMap = new Map()
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1)
  }

  const freqArray = Array.from(freqMap.entries())
  freqArray.sort((a, b) => b[1] - a[1]) // Sort by frequency in descending order

  return freqArray.slice(0, k).map(entry => entry[0]) // Take the top k elements
}

console.log(topKFrequent([2, 3, 4, 4, 2, 4, 5], 3))
