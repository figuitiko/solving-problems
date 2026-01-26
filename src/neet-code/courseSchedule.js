const courseSchedule = (numCourses, prerequisites) => {
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
      for (const nei of adjList[curr]) {
        if (!dfs(nei)) {
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

console.log(courseSchedule(2, [[0, 1], [1, 0]]))
