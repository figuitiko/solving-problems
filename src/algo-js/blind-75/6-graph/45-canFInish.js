const canFinish = (numCourses, prerequisites) => {
  const adjList = {}
  const visited = new Set()

  for (const [a, b] of prerequisites) {
    if (!adjList[a]) {
      adjList[a] = [b]
    } else {
      adjList[a].push(b)
    }
  }

  const dfs = (curr) => {
    if (visited.has(curr)) return false
    if (adjList[curr] === curr) return true
    visited.add(curr)
    if (adjList[curr]) {
      for (const neigh of adjList[curr]) {
        if (!dfs(neigh)) {
          return false
        }
      }
    }
    visited.delete(curr)
    adjList[curr] = []
    return true
  }
  for (const key in adjList) {
    if (!dfs(key)) {
      return false
    }
  }
  return true
}

console.log(canFinish(2, [[1, 0]]))
