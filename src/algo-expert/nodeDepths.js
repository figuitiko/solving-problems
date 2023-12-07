const { Node } = require('./node-class')

const nodeDepths = (root) => {
  let result = 0
  const dfs = (root, currentDepth) => {
    if (!root.left && !root.right) {
      return
    }
    if (root.left) {
      result = result + currentDepth + 1
      dfs(root.left, currentDepth + 1)
    }
    if (root.right) {
      result = result + currentDepth + 1
      dfs(root.right, currentDepth + 1)
    }
  }
  dfs(root, 0)
  return result
}

const nodeDepths1 = (root) => {
  let result = 0
  const stack = [{ node: root, depth: 0 }]
  while (stack.length) {
    const nodeInfo = stack.pop()
    const { node, depth } = nodeInfo
    if (!node) continue
    result += depth
    stack.push({ node: node.left, depth: depth + 1 })
    stack.push({ node: node.right, depth: depth + 1 })
  }
  return result
}

const nodeDepths2 = (root) => {
  const recursive = (root, depth) => {
    if (!root) return 0
    return depth + recursive(root.left, depth + 1) + recursive(root.right, depth + 1)
  }
  return recursive(root, 0)
}
const node1 = new Node(8)
const node2 = new Node(9)
const node3 = new Node(4, node1, node2)
const node4 = new Node(5)
const node5 = new Node(2, node3, node4)
const node6 = new Node(6)
const node7 = new Node(7)
const node8 = new Node(3, node6, node7)
const node9 = new Node(1, node5, node8)

console.log(nodeDepths(node9))
console.log(nodeDepths1(node9))
console.log(nodeDepths2(node9))
