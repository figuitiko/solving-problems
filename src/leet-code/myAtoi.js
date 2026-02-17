const myAtoi = function (s) {
  const INT_MAX = 2147483647 // 2^31 - 1
  const INT_MIN = -2147483648 // -2^31

  let i = 0
  let result = 0
  let sign = 1

  while (i < s.length && s[i] === ' ') {
    i++
  }

  if (i < s.length && (s[i] === '+' || s[i] === '-')) {
    sign = s[i] === '-' ? -1 : 1
    i++
  }

  while (i < s.length && s[i] >= '0' && s[i] <= '9') {
    const digit = s[i] - '0' // Convert char to number

    if (result > Math.floor(INT_MAX / 10) ||
            (result === Math.floor(INT_MAX / 10) && digit > 7)) {
      return sign === 1 ? INT_MAX : INT_MIN
    }

    result = result * 10 + digit
    i++
  }

  return result * sign
}

console.log(myAtoi('-+12'))
// console.log(myAtoi('+1'))
// console.log(myAtoi('42'))
// console.log(myAtoi('-042'))
// console.log(myAtoi('1337c0d3'))
// console.log(myAtoi('0-1'))
