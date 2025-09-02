const staircaseTraversal = (height, maxSteps) => {
  let res = 0
  const recurse = (value) => {
    if (value < 0) {
      return
    }
    if (value === 0) {
      res += 1
      return
    }
    for (let i = 1; i <= maxSteps; i++) {
      recurse(value - i)
    }
  }
  recurse(height)
  return res
}
console.log(staircaseTraversal(4, 2))
