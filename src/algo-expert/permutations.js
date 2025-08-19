const getPermutations = (array) => {
  if (array.length === 0) return []
  const result = []

  const backTrack = (arr) => {
    const setArr = new Set(arr)
    if (arr.length === array.length) {
      result.push([...arr])
      return
    }
    for (let i = 0; i < array.length; i++) {
      if (setArr.has(array[i])) continue
      setArr.add(array[i])
      arr.push(array[i])
      backTrack(arr)
      const value = arr.pop()
      setArr.delete(value)
    }
  }
  backTrack([])
  return result
}
// console.log(getPermutations([1, 2, 3]))

const getPermutations1 = (array) => {
  const permutations = []
  permutationsHelper(0, array, permutations)
  return permutations
}
function permutationsHelper (i, array, permutations) {
  if (i === array.length - 1) {
    permutations.push([...array])
  } else {
    for (let j = i; j < array.length; j++) {
      swap(array, i, j)
      permutationsHelper(i + 1, array, permutations)
      swap(array, i, j)
    }
  }
}

function swap (array, i, j) {
  [array[i], array[j]] = [array[j], array[i]]
}
console.log(getPermutations1([1, 2, 3]))
