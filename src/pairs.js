const pairs = (k, arr) => {
  let result = 0
  let arrValues = [...arr]
  for (let i = 0; i < arrValues.length; i++) {
    for (let j = i + 1; j < arrValues.length; j++) {
      const diff = Math.abs(arrValues[j] - arrValues[i])
      if (diff === k) {
        result++
        arrValues = arrValues.filter(item => item !== arrValues[i] || item !== arrValues[j])
      }
    }
  }
  return result
}

const pair1 = (k, arr) => {
  let result = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i] + k)) {
      result++
    }
  }
  return result
}

console.log(pairs(1, [1, 2, 3, 4]))
console.log(pairs(1, [1, 2, 3, 4]))
