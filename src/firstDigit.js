const firstDigit = (inputString) => {
  for (let i = 0; i < inputString.length; i++) {
    if (!isNaN(Number(inputString[i])) && typeof Number(inputString[i]) && inputString[i] !== ' ') {
      return inputString[i]
    }
  }
}

// console.log(firstDigit('var_1__Int'))
console.log(firstDigit('a a_933'))
