const minimumNumber = (n, password) => {
  let failCases = 0
  const regexOneDigit = /\d/
  const regexUpperCase = /[A-Z]/
  const regexLowerCase = /[a-z]/
  const regexSpecialChar = /[!@#$%^&*()\-+]/
  // if (password.length < 6) {
  //   return 6 - password.length
  // }
  if (!regexOneDigit.test(password)) {
    failCases++
  }
  if (!regexLowerCase.test(password)) {
    failCases++
  }
  if (!regexUpperCase.test(password)) {
    failCases++
  }
  if (!regexSpecialChar.test(password)) {
    failCases++
  }
  if (password.length > 6) {
    return failCases
  }
  if (failCases + password.length > 6) {
    return failCases
  }
  return 6 - password.length
}

// console.log(minimumNumber(11, '#HackerRank'))
// console.log(minimumNumber(11, 'ab1'))
// console.log(minimumNumber(11, 'goxg'))
console.log(minimumNumber(11, '9'))
