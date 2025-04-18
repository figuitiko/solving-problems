const { NodeClass } = require('../algo-js/nodeClass')

const mergeBinaryTrees = (tree1, tree2) => {
  const queue = [tree1, tree2]

  while (queue.length) {
    const currentNode1 = queue.shift()
    const currentNode2 = queue.shift()
    const value = (currentNode1?.val || 0) + (currentNode2?.val || 0)
    currentNode1.val = value

    if (currentNode1?.left) {
      queue.push(currentNode1.left)
    }
    if (currentNode2?.left) {
      queue.push(currentNode2?.left)
    }
    if (currentNode1?.right) {
      queue.push(currentNode1.right)
    }
    if (currentNode1?.right) {
      queue.push(currentNode2.right)
    }
    if (!currentNode1?.left && currentNode2?.left) {
      currentNode1.left = currentNode2?.left
    }
    if (!currentNode1?.right && currentNode2?.right) {
      currentNode1.right = currentNode2.right
    }
  }
  return tree1
}

const mergeBinaryTrees1 = (tree1, tree2) => {
  if (!tree1) return tree2
  if (!tree2) return tree1
  tree1.value += tree2.value
  tree1.left = mergeBinaryTrees1(tree1.left, tree2.right)
  tree1.right = mergeBinaryTrees1(tree1.right, tree2.right)
  return tree1
}
const mergeBinaryTrees2 = (tree1, tree2) => {
  if (!tree1) return tree2
  const tree1Stack = [tree1]
  const tree2Stack = [tree2]
  while (tree1Stack.length) {
    const tree1Node = tree1Stack.pop()
    const tree2Node = tree2Stack.pop()

    if (!tree2Node) {
      continue
    }
    tree1Node.value += tree2Node.value
    if (!tree1Node.left) {
      tree1Node.left = tree2Node.left
    } else {
      tree1Stack.push(tree1Node.left)
      tree2Stack.push(tree2Node.left)
    }
    if (!tree1Node.right) {
      tree1Node.right = tree2Node.right
    } else {
      tree1Stack.push(tree1Node.right)
      tree2Stack.push(tree2Node.right)
    }
  }
  return tree1
}

const seven1 = new NodeClass(7)
const four1 = new NodeClass(4)
const three1 = new NodeClass(3, seven1, four1)
const two1 = new NodeClass(2)
const one1 = new NodeClass(1, three1, two1)

const two2 = new NodeClass(2)
const five2 = new NodeClass(5, two2)
const seven2 = new NodeClass(7)
const six2 = new NodeClass(6)
const nine2 = new NodeClass(9, seven2, six2)
const one2 = new NodeClass(1, five2, nine2)

console.log(mergeBinaryTrees(one1, one2))
