const fibonacci = (n) => {
  if (n < 2) return n
  return fibonacci(n - 1) + fibonacci(n - 2)
}
console.log(fibonacci(6))

const fibonacci1 = (n) => {
  const fib = [0, 1]
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }
  return fib
}
console.log(fibonacci1(6))

const fibonacciSecuence = (n) => {
  const fib = [0, 1]
  const cache = {}
  const recursive = (n) => {
    if (n < 2) return n
    if (cache[n]) return cache[n]
    const result = recursive(n - 1) + recursive(n - 2)
    if (!cache[n]) {
      fib.push(result)
    }
    cache[n] = result
    return result
  }
  recursive(n - 1)
  return fib
}
console.log(fibonacciSecuence(6))

function fibonacciRecursive (n) {
  if (n <= 0) {
    return []
  } else if (n === 1) {
    return [0]
  } else if (n === 2) {
    return [0, 1]
  } else {
    const prevFib = fibonacciRecursive(n - 1)
    const nextNumber = prevFib[prevFib.length - 1] + prevFib[prevFib.length - 2]
    prevFib.push(nextNumber)
    return prevFib
  }
}
console.log(fibonacciRecursive(6))

const fibonacciTabulation = (n) => {
  const table = Array(n + 1).fill(0)
  table[1] = 1
  for (let i = 0; i <= n; i++) {
    if (table[i + 1] !== undefined) {
      table[i + 1] += table[i]
    }
    if (table[i + 2] !== undefined) {
      table[i + 2] += table[i]
    }
  }
  return table
}

console.log(fibonacciTabulation(6))
