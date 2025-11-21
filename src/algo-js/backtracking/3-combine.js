const combine = (n, k) => {
  const result = []
  const dfs = (index, current) => {
    if (current.length === k) {
      result.push([...current])
    }
    for (let i = index; i <= n; i++) {
      current.push(i)
      dfs(i + 1, current)
      current.pop()
    }
  }
  dfs(1, [])
  return result
}
console.log(combine(4, 2))
