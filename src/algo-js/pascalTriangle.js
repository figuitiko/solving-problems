const pascalTriangle = (numRows) => {
  const res = []
  if (numRows >= 1) res.push([1])
  if (numRows >= 2) res.push([1, 1])

  for (let i = 2; i < numRows; i++) {
    const first = 1
    const last = 1
    const prevArr = res[i - 1]
    if (prevArr.length === 2) {
      res.push([first, first + last, last])
    } else {
      let left = 0
      let right = 1
      const add = []
      while (right < prevArr.length) {
        add.push(prevArr[left] + prevArr[right])
        left++
        right++
      }
      res.push([first, ...add, last])
    }
  }
  return res
}

console.log(pascalTriangle(5))
