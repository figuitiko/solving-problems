const getSum = (a, b) => {
  let carry
  while (b !== 0) {
    carry = a & b
    a = a ^ b
    b = carry << 1
  }
  return a
}
console.log(getSum(1, 2))
