const numConnectedComp = (n, edges) => {
  const adj = {}
  let amount = 0
  for (let i = 0; i < n; i++) {
    adj[i] = []
  }
  for (const [a, b] of edges) {
    adj[a].push(b)
    adj[b].push(a)
  }
  const visited = new Set()

  const checkCycle = (current, parent) => {
    visited.add(current)
    const neighbors = adj[current]
    if (neighbors.length) {
      for (const nei of neighbors) {
        if (visited.has(nei) && nei !== parent) {
          return 1
        } else {
          if (checkCycle(nei, current)) {
            return 1
          }
        }
      }
    }
    return 0
  }
  for (let i = 0; i < n; i++) {
    amount += checkCycle(0, -1)
  }
  return amount
}
