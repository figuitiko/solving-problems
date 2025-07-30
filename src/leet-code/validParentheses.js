const isValid = (s) => {
  const stack = []
  // if (s.length === 1) return false
  for (const str of s) {
    if (str === '[' || str === '(' || str === '{') {
      stack.push(str)
    } else {
      const prev = stack.pop()
      if (prev === '[' && str !== ']') return false
      if (prev === '(' && str !== ')') return false
      if (prev === '{' && str !== '}') return false
      if (prev === undefined) return false
    }
  }
  return stack.length === 0
}

console.log(isValid('(){}}{'))
