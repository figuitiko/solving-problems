const romanNumberEncoder = (number) => {
  const romanSymbols = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }

  let romanNumeral = ''
  // Iterate through the Roman numeral symbols
  for (const symbol in romanSymbols) {
    // Repeat the symbol while the number is greater than or equal to its value
    while (number >= romanSymbols[symbol]) {
      romanNumeral += symbol // Add the symbol to the Roman numeral string
      number -= romanSymbols[symbol] // Subtract the value from the number
    }
  }

  return romanNumeral
}

console.log(romanNumberEncoder(324))
