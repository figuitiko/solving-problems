
const validateBST = (tree) => {
  return validateBstHelper(tree, -Infinity, Infinity)
}

const validateBstHelper = (tree, minValue, maxValue) => {
  if (!tree) return true
  if (tree.value < minValue || tree.value >= maxValue) {
    return false
  }
  const leftIsValid = validateBstHelper(tree.left, minValue, tree.value)
  return leftIsValid && validateBstHelper(tree.right, tree.value, maxValue)
}
const one = { id: '1', left: null, right: null, value: 1 }
const two = { id: '2', left: one, right: null, value: 2 }
const eleven = { id: '11', left: null, right: null, value: 11 }
const fiveA = { id: '5-2', left: null, right: eleven, value: 5 }
const twentyTwo = { id: '22', left: null, right: null, value: 22 }
const five = { id: '5', left: two, right: fiveA, value: 5 }
const fifteen = { id: '15', left: null, right: twentyTwo, value: 15 }
const root = { id: '10', left: five, right: fifteen, value: 10 }

console.log(validateBST(root))

//        10
//     5     15
//   2   5      22
// 1        11
