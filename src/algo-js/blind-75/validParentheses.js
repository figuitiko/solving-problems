const validParentheses = (s) => {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char)
    } else {
      const preVal = stack.pop()
      if (preVal === '(' && char !== ')') return false
      if (preVal === '{' && char !== '}') return false
      if (preVal === '[' && char !== ']') return false
      if (preVal === undefined) return false
    }
  }
  return stack.length === 0
}

console.log(validParentheses('()()(('))
