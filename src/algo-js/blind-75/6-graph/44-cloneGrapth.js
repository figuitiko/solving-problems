const { NodeGraph } = require('..')

const cloneGraph = (node) => {
  const visited = {}
  const dfs = (node) => {
    if (!node) return node
    if (visited[node.val]) return visited[node.val]
    const root = new NodeGraph(node.val)
    visited[node.val] = root
    for (const neighbor of node.neighbors) {
      root.neighbors.push(dfs(neighbor))
    }
    return root
  }
  return dfs(node)
}
// const three = new NodeGraph(3)
// const four = new NodeGraph(4)
// const one = new NodeGraph(1, [two, four])
// const two = new NodeGraph(2, [one, three])
