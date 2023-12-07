const minimumWaitingTime = (queries) => {
  queries.sort((a, b) => a - b)
  // console.log(queries)
  let result = 0
  for (let i = 1; i < queries.length; i++) {
    result += queries.slice(0, i).reduce((a, b) => a + b, 0)
  }
  return result
}

const minimumWaitingTime1 = (queries) => {
  queries.sort((a, b) => a - b)
  let result = 0
  for (let i = 0; i < queries.length; i++) {
    const queriesLeft = queries.length - (i + 1)
    result += queries[i] * queriesLeft
  }
  return result
}

const minimumWaitingTim2 = (queries) => {
  queries.sort((a, b) => a - b)
  return queries.reduce((acc, curr, idx) => {
    const queriesLeft = queries.length - (idx + 1)
    return acc + curr * queriesLeft
  }, 0)
}

// console.log(minimumWaitingTime([3, 2, 1, 2, 6]))
// console.log(minimumWaitingTime1([3, 2, 1, 2, 6]))
console.log(minimumWaitingTim2([3, 2, 1, 2, 6]))
