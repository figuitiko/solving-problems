const extraNumber = (a, b, c) => {
  if (a !== b && a !== c) return a
  if (b !== c && b !== a) return b
  return c
}
console.log(extraNumber(2, 7, 2))
