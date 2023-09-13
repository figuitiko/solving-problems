const maximizingXor = (l, r) => {
  let xorResults = 0
  for (let i = l; i <= r; i++) {
    for (let j = l; j <= r; j++) {
      const tempXor = i ^ j
      if (tempXor > xorResults) {
        xorResults = tempXor
      }
    }
  }
  return xorResults
}
console.log(maximizingXor(11, 12))
