const majorityElement = (array) => {
  const map = new Map()
  for (let i = 0; i < array.length; i++) {
    if (map.has(array[i])) {
      map.set(array[i], map.get(array[i]) + 1)
    } else {
      map.set(array[i], 1)
    }
  }
  let result = null
  let currentValue = -1
  for (const [key, value] of map) {
    if (value > currentValue) {
      result = key
      currentValue = value
    }
  }
  return result
}
console.log(majorityElement([1, 2, 3, 2, 2, 1, 2]))

const majorityElement1 = (array) => {
  const arrResult = array.reduce((acc, curr, _, arr) => {
    const values = arr.filter(item => item === curr)
    if (values.length > acc[1]) {
      return [curr, values.length]
    }
    return acc
  }, [null, null])
  return arrResult[0]
}
console.log(majorityElement1([1, 2, 3, 2, 2, 1, 2]))

const majorityElement2 = (array) => {
  const map = new Map()
  map.set(array[0], 1)
  let result = array[0]
  let currentVal = 1
  for (let i = 1; i < array.length; i++) {
    if (map.has(array[i])) {
      map.set(array[i], map.get(array[i]) + 1)
      if (map.get(array[i]) > currentVal) {
        result = array[i]
        currentVal = map.get(array[i])
      }
    } else {
      map.set(array[i], 1)
    }
  }

  return result
}

console.log(majorityElement2([1, 2, 3, 2, 2, 1, 2]))
const majorityElement3 = (array) => {
  let count = 0
  let answer = null
  for (const value of array) {
    if (count === 0) {
      answer = 1
    }
    if (value === answer) {
      count++
    } else {
      count--
    }
  }
}
console.log(majorityElement3([1, 2, 3, 2, 2, 1, 2]))
