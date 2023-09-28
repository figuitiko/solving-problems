const isInfinityProcess = (a, b) => {
  if (a > b || b - 1 === a) return true
  if (a % 2 === 0 && b % 2 !== 0) return true
  if (b % 2 === 0 && a % 2 !== 0) return true
  return false
}
console.log(isInfinityProcess(2, 6))
