const taumBday = (b, w, bc, wc, z) => {
  const result1 = b * (wc + z) + w * (bc + z)
  const result2 = b * bc + w * (bc + z)
  const result3 = b * (wc + z) + w * wc
  const result4 = b * bc + w * wc
  const arrResult = [result1, result2, result3, result4]
  const min = Math.min(...arrResult)

  return min
}

console.log(taumBday(3, 5, 3, 4, 1))
console.log(taumBday(3, 5, 3, 4, 1))
