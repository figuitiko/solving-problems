const serviceLane = (width, cases) => {
  const result = []
  for (const caseVal of cases) {
    const [a, b] = caseVal
    const resultArr = width.slice(a, b + 1)
    console.log(resultArr)
    result.push(Math.min(...resultArr))
  }
  return result
}

// console.log(serviceLane([2, 3, 1, 2, 3, 2, 3, 3], [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]] ))
console.log(serviceLane([1, 2, 2, 2, 1], [[2, 3], [1, 4], [2, 4], [2, 4], [2, 3]])) // 2,1,1,1,2
