const prime = (arr) => {
  return arr.filter(item => checkIfPrime(item))
}
const checkIfPrime = (number) => {
  if (number <= 1) {
    return false
  }
  if (number <= 3) {
    return true
  }
  if (number % 2 === 0 || number % 3 === 0) {
    return false
  }
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false
    }
  }
  return true
}

// console.log(prime([5, 6, 7, 9, 13, 24, 45]))

const crivaPrime = (num) => {
  const table = new Array(num + 1).fill(1)
  const sqrtTableLength = Math.floor(Math.sqrt(table.length))
  for (let i = 2; i <= sqrtTableLength; i++) {
    for (let j = i < sqrtTableLength ? sqrtTableLength : i; j <= table.length; j++) {
      if (j % i === 0 && j !== i) {
        table[j] = 0
      }
    }
  }
  console.log(table)
  return table[num] === 1
}
console.log(crivaPrime(23))
console.log(crivaPrime(24))