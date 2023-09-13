const circularArrayRotation = (a, k, queries) => {
  const n = a.length
  k = k % n
  const rotated = [...a.slice(n - k), ...a.slice(0, n - k)]
  return queries.map(q => rotated[q])
}
console.log(circularArrayRotation([3, 4, 5], 2, [1, 2]))
