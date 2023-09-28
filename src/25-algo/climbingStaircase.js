const climbingStaircase = (n) => {
  const table = Array(n + 1).fill(0)
  table[1] = 1
  table[2] = 2
  for (let i = 2; i < n; i++) {
    table[i] += table[i - 1] + table[i - 2]
  }
  return table[n - 1]
}
console.log(climbingStaircase(4))
