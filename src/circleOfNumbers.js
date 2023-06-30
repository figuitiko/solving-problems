const circleOfNumbers = (n, firstNumber) => {
  if (firstNumber >= (n / 2)) {
    return (firstNumber - parseInt(n / 2))
  }
  return (firstNumber + parseInt(n / 2))
}

console.log(circleOfNumbers(6, 3))
