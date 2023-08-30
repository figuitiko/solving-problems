// sum the digits in the even numbered positions
// multiply the result by three
// sum the digits in the odd numbered positions
// take the last digit of the result
// if its not zero, subtract it from ten, otherwise keep it as zero
// return the result

const computeCheckDigit = (input) => {
  const inputArr = input.split('')
  const even = inputArr.filter((_, idx) => idx % 2 === 0).reduce((acc, curr) => acc + Number(curr), 0)
  const odd = inputArr.filter((_, idx) => idx % 2 !== 0).reduce((acc, curr) => acc + Number(curr), 0)
  const result = (even * 3 + odd) % 10
  return result === 0 ? 0 : 10 - result
}

console.log(computeCheckDigit('123456789012')) // 0
