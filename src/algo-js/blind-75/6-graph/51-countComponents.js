const countComponents = (n, edges) => {
  let count = 0
  const graph = {}

  for (let i = 0; i < n; i++) {
    graph[i] = []
  }

  for (const [u, v] of edges) {
    graph[u].push(v)
    graph[v].push(u)
  }

  const visited = new Set()
  function dfs (node) {
    if (visited.has(node)) return 0
    visited.add(node)
    for (const n of graph[node]) {
      dfs(n)
    }
    return 1
  }
  for (let key in graph) {
    key = parseInt(key)
    count += dfs(key)
  }
  return count
}

const arr = [
  [0, 1],
  [1, 2],
  [3, 4]
]

console.log(countComponents(5, arr))
