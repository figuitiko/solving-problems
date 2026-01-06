const plusOne = function (digits) {
  let remain = null
  const result = []
  const valuesToAdd = [1]
  while (digits.length || remain) {
    const valueToAdd = (valuesToAdd.pop() || 0)
    const curr = (digits.pop() || 0) + (remain || 0) + valueToAdd

    if (curr >= 10) {
      remain = 1
      result.unshift(0)
    } else {
      result.unshift(curr)
      remain = null
    }
  }
  return result
}
console.log(plusOne([9, 9]))
// console.log(plusOne([9]))
// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))
// console.log(plusOne([4, 3, 2, 1]))
