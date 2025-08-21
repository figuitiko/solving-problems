const hammingWeight = function (n) {
  let count = 0
  while (n !== 0) {
    const isOne = n & 1
    if (isOne === 1) count++
    n = n >>> 1
  }
  return count
}

console.log(hammingWeight(11))
