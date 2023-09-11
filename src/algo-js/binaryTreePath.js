class Node {
  constructor (val, nodeLeft, nodeRight) {
    this.val = val
    this.left = nodeLeft ?? null
    this.right = nodeRight ?? null
  }
}
const binaryTreePath = (root) => {
  if (!root) return []
  const res = []
  const dfs = (root, path) => {
    path.push(root.val)
    if (!root.left && !root.right) {
      res.push(path.join('->'))
    }
    if (root.left) dfs(root.left, path)
    if (root.right) dfs(root.right, path)
    path.pop()
  }
  dfs(root, [])
  return res
}

const node5 = new Node(5)
const node3 = new Node(3)
const node2 = new Node(2, node5, null)
const node1 = new Node(1, node2, node3)

console.log(binaryTreePath(node1))
