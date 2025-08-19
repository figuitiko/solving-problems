const powerSet = (array) => {
  if (array.length === 0) return [[]]
  if (array.length === 0) return []
  const result = []

  const backTrack = (arr) => {
    const setArr = new Set(arr)
    result.push([...arr])
    if (arr.length === array.length) {
      return
    }
    for (let i = 0; i < array.length; i++) {
      if (setArr.has(array[i]) || arr[arr.length - 1] > array[i]) continue
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

console.log(powerSet([1, 2, 3]))

const powerSet1 = (array, idx = null) => {
  if (idx === null) {
    idx = array.length - 1
  }
  if (idx < 0) {
    return [[]]
  }
  const item = array[idx]
  const subsets = powerSet1(array, idx - 1)
  const length = subsets.length
  for (let i = 0; i < length; i++) {
    const currSubset = subsets[i]
    subsets.push([...currSubset, item])
  }
  return subsets
}

const powerSet2 = (array) => {
  const subsets = [[]]
  for (const ele of array) {
    const length = subsets.length
    for (let i = 0; i < length; i++) {
      const currSubset = subsets[i]
      subsets.push([...currSubset, ele])
    }
  }
  return subsets
}
console.log(powerSet1([1, 2, 3]))
console.log(powerSet2([1, 2, 3]))
