const killKthBit = (n, k) => {
  if (n === 0) return 0
  const binaryN = n.toString(2)
  const valueToCheck = binaryN[binaryN.length - k] === '1' ? '0' : binaryN[binaryN.length - k]
  const binaryNResult = binaryN.slice(0, binaryN.length - (k)) + valueToCheck + binaryN.slice(binaryN.length - (k - 1))  
  return parseInt(binaryNResult, 2)
}
console.log(killKthBit(37, 3))

const killKthBit1 = (n, k) => {
  return parseInt(n.toString(2).slice(0, n.toString(2).length - (k)) + '0' + n.toString(2).slice(n.toString(2).length - (k - 1)) || 0, 2)
}
console.log(killKthBit1(37, 4))
