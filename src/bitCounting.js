const countBits = (n) => {
  const binary = n.toString(2)
  return binary.split('').filter(item => item === '1').length
}

console.log(countBits(0))
console.log(countBits(1234))
