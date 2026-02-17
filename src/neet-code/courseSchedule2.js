const findOrder = (numCourses, prerequisites) => {
  const prereq = {}
  for (let i = 0; i < numCourses; i++) {
    prereq[i] = []
  }
  for (const [a, b] of prerequisites) {
    prereq[a].push(b)
  }
  const output = []
  const visit = new Set()
  const cycle = new Set()

  const dfs = (crs) => {
    if (cycle.has(crs)) return false
    if (visit.has(crs)) return true

    cycle.add(crs)
    for (const pre of prereq[crs]) {
      if (dfs(pre) === false) {
        return false
      }
    }
    cycle.delete(crs)
    visit.add(crs)
    output.push(crs)
    return true
  }
  for (let i = 0; i < numCourses; i++) {
    if (dfs(i) === false) {
      return []
    }
  }
  return output
}

console.log(findOrder(3, [[0, 1], [1, 2], [2, 0]]))
console.log(findOrder(3, [[1, 0]]))
