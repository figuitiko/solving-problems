const fileNaming = (names) => {
  const frecuencyMap = {}
  const result = []

  for (let i = 0; i < names.length; i++) {
    if (!frecuencyMap[names[i]]) {
      frecuencyMap[names[i]] = 1
      result.push(names[i])
    } else {
      let newVal = names[i] + `(${frecuencyMap[names[i]]})`
      while (frecuencyMap[newVal]) {
        newVal = names[i] + `(${frecuencyMap[names[i]] + 1})`
        frecuencyMap[names[i]] = frecuencyMap[names[i]] + 1
      }
      result.push(newVal)
      frecuencyMap[newVal] = 1
    }
  }
  return result
}

// console.log(fileNaming(['doc', 'doc', 'images', 'doc(1)', 'doc']))
// console.log(fileNaming(['a(1)', 'a(6)', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']))

// console.log(findTheEnd('doc(1)'))

const findUniqueNumbers = (numbers) => {
  const map = {}
  const result = []
  for (let i = 0; i < numbers.length; i++) {
    if (!map[numbers[i]]) {
      map[numbers[i]] = 1
    } else {
      map[numbers[i]]++
    }
  }
  for (const key in map) {
    if (map[key] === 1) {
      result.push(Number(key))
    }
  }
  return result
}

console.log(findUniqueNumbers([1, 2, 1, 3, 4, 4]))

//largest number in array of two numbers
const findMaxSum = (numbers) => {
  let max = numbers[0]
  let secondMax = numbers[1]
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      secondMax = max
      max = numbers[i]
    } else if (numbers[i] > secondMax) {
      secondMax = numbers[i]
    }
  }
  return max + secondMax
}

console.log(findMaxSum([5, 9, 7, 11])) // 20