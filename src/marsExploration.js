const marsExploration = (s) => {
  const arr = []
  let result = 0
  const validStr = 'SOS'
  for (let i = 0; i < s.length; i += 3) {
    arr.push(s.substr(i, 3))
  }
  console.log(arr)
  arr.forEach(item => {
    for (let i = 0; i < 3; i++) {
      if (item[i] !== validStr[i]) {
        result++
      }
    }
  })
  return result
}

console.log(marsExploration('SOSSOSSOS'))
