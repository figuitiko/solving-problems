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
  for (let i = 0; i < n + 1; i++) {
    if (visited.has(i)) {
      return false
    }
  }
  return true
}

const validTree1 = (n, edges) => {
  const adjList = {}
  for (let i = 0; i < n; i++) {
    adjList[i] = []
  }
  for (const [a, b] of edges) {
    adjList[a].push(b)
    adjList[b].push(a)
  }
  const visited = new Set()
  const checkCycle = (current, parent) => {
    visited.add(current)
    const neighbors = adjList[current]
    if (neighbors.length) {
      for (const nei of neighbors) {
        if (visited.has(nei)) {
          if (nei !== parent) {
            return true
          }
        } else {
          if (checkCycle(nei, current)) {
            return true
          }
        }
      }
    }
    return false
  }
  if (checkCycle(0, -1)) {
    return false
  }
  for (let i = 0; i < n - 1; i++) {
    if (visited.has(i)) {
      return false
    }
  }
  return true
}

console.log(validTree(5, [[0, 1], [0, 2], [0, 3], [1, 4]]))
console.log(validTree1(5, [[0, 1], [0, 2], [0, 3], [1, 4]]))
