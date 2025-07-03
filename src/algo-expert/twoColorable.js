
const twoColorable = (edges) => {
  const colors = Array.from({ length: edges.length }, (_) => null)
  console.log({ colors })
  colors[0] = true
  const stack = [0]
  while (stack.length > 0) {
    const currNode = stack.pop()
    for (const connection of edges[currNode]) {
      if (colors[connection] === null) {
        colors[connection] = !colors[currNode]
        stack.push(connection)
      } else if (colors[connection] === colors[currNode]) {
        return false
      }
    }
  }
  return true
}
// unweighted same distance
const edges = [
  [1, 2],
  [0, 2],
  [0, 1]
]

console.log(twoColorable(edges))
