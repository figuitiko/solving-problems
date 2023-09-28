const cartisianProduct = (setA, setB) => {
  const result = []
  for (let i = 0; i < setA.length; i++) {
    for (let j = 0; j < setB.length; j++) {
      result.push([setA[i], setB[j]])
    }
  }
  return result
}
console.log(cartisianProduct([1, 2], [3, 4]))
console.log(cartisianProduct([1, 2], [3, 4, 5]))
