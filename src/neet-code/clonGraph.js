const { GraphNode } = require('./')
const cloneGraph = (node) => {
  const oldToNew = new Map()

  const dfs = (node, oldToNew) => {
    if (!node) return null
    if (oldToNew.has(node)) {
      return oldToNew.get(node)
    }
    const copy = new GraphNode()
    oldToNew.set(node, copy)
    for (const nei of node.neighbors) {
      copy.neighbors.push(dfs(nei, oldToNew))
    }
    return copy
  }
  return dfs(node, oldToNew)
}

const graph1 = new GraphNode(1)
const graph2 = new GraphNode(2)
const graph3 = new GraphNode(3)

graph1.neighbors = [graph2]
graph2.neighbors = [graph3]

console.log(cloneGraph(graph1))
