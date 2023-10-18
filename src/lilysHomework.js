const lilysHomework = (arr) => {
  let result = 0
  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.min(...arr) === arr[i]) continue
    const restMin = Math.min(...arr.slice(i + 1))
    const indexOfRestMin = arr.indexOf(restMin)
    if (restMin <= arr[i]) {
      [arr[i], arr[indexOfRestMin]] = [arr[indexOfRestMin], arr[i]]
      result++
    }
  }
  console.log(arr)
  return result
}
// console.log(lilysHomework([7, 15, 12, 3]))
// console.log(lilysHomework([3, 4, 2, 5, 1]))

function lilysHomework1 (arr) {
  function calcSwaps (arr, reversed) {
    // Write your code here
    const arr2 = Array.from(arr)
    arr2.sort((a, b) => reversed ? b - a : a - b)
    const indexMapping = arr2.reduce((prev, curr, currentIndex) => {
      prev.set(curr, currentIndex)
      return prev
    }, new Map())
    console.log(indexMapping)
    const visited = Array.from({ length: arr.length }, () => false)
    let swaps = 0
    for (let i = 0; i < arr.length; i++) {
      if (visited[i] || i === indexMapping.get(arr[i])) {
        continue
      }

      let j = i
      let cycleSize = 0
      while (!visited[j]) {
        visited[j] = true
        cycleSize++
        j = indexMapping.get(arr[j])
      }
      swaps += cycleSize - 1
    }
    return swaps
  }
  return Math.min(calcSwaps(arr, false), calcSwaps(arr, true))
}
// console.log(lilysHomework1([7, 15, 12, 3]))
console.log(lilysHomework1([3, 4, 2, 5, 1]))
