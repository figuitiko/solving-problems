const validTree = (n, edges) => {
  const adjList = {}
  for (let i = 0; i < n; i++) {
    adjList[i] = []
  }
  for (const [a, b] of edges) {
    adjList[a].push(b)
    adjList[b].push(a)
  }

  const visited = new Set()

  function checkCycle (current, parent) {
    visited.add(current)
    const neighbors = adjList[current]
    if (neighbors.length) {
      for (const neigh of neighbors) {
        if (visited.has(neigh)) {
          if (neigh !== parent) return true
        } else {
          if (checkCycle(neigh, current)) {
            return true
          }
        }
      }
    }
    return false
  }
  if (checkCycle(0, -1)) return false
  return visited.size === n
}

console.log(validTree(5, [[0, 1], [0, 2], [0, 3], [1, 4]]))
