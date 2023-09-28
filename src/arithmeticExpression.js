const arithmeticExpression = (a, b, c) => {
  const operators = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => x / y
  }
  for (const opt in operators) {
    if (operators[opt](a, b) === c) return true
  }
  return false
}
console.log(arithmeticExpression(2, 3, 5))
