
const WHITE = 0
const GREY = 1
const BLACK = 2

const cycleInGraph = (edges) => {
  const numberOfNodes = edges.length
  const colors = Array.from({ length: numberOfNodes }, () => WHITE)
  for (let i = 0; i < numberOfNodes; i++) {
    if (colors[i] !== WHITE) continue
    const containsCycle = traverseANdColorNodes(i, edges, colors)
    if (containsCycle) return true
  }
  return false
}
function traverseANdColorNodes (node, edges, colors) {
  colors[node] = GREY

  const neighbors = edges[node]
  for (const neighbor in neighbors) {
    const neighborColor = colors[neighbor]
    if (neighborColor === GREY) return true
    if (neighborColor !== WHITE) continue

    const containsCycle = traverseANdColorNodes(neighbor, edges, colors)
    if (containsCycle) return true
  }
  colors[node] = BLACK
  return false
}

const edges = [
  [1, 3],
  [2, 3, 4],
  [0],
  [],
  [2, 5],
  []
]

console.log(cycleInGraph(edges))
