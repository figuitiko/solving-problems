const inOrderTraverse = (tree, array) => {
  if (!tree) return
  inOrderTraverse(tree.left, array)
  array.push(tree.value)
  inOrderTraverse(tree.right, array)
  return array
}

const preOrderTraverse = (tree, array) => {
  if (!tree) return
  array.push(tree.value)
  preOrderTraverse(tree.left, array)
  preOrderTraverse(tree.right, array)
  return array
}

const postOrderTraverse = (tree, array) => {
  if (!tree) return
  postOrderTraverse(tree.left, array)
  postOrderTraverse(tree.right, array)
  array.push(tree.value)
  return array
}
const one = { id: '1', left: null, right: null, value: 1 }
const two = { id: '2', left: one, right: null, value: 2 }
// const eleven = { id: '11', left: null, right: null, value: 11 }
const fiveA = { id: '5-2', left: null, right: null, value: 6 }
const twentyTwo = { id: '22', left: null, right: null, value: 22 }
const five = { id: '5', left: two, right: fiveA, value: 5 }
const fifteen = { id: '15', left: null, right: twentyTwo, value: 15 }
const root = { id: '10', left: five, right: fifteen, value: 10 }

console.log(inOrderTraverse(root, []))
// console.log(preOrderTraverse(root, []))
// console.log(postOrderTraverse(root, []))
