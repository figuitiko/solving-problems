const generateParentheses = (n) => {
  const res = []
  const sol = []
  const recurse = (open, close) => {
    if (sol.length === n * 2) {
      res.push(sol.join(''))
      return
    }
    if (open < n) {
      sol.push('(')
      recurse(open + 1, close)
      sol.pop()
    }
    if (open > close) {
      sol.push(')')
      recurse(open, close + 1)
      sol.pop()
    }
  }
  recurse(0, 0)
  return res
}
console.log(generateParentheses(3))
