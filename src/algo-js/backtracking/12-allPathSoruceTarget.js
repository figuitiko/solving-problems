const allPathSourceTarget = (graph) => {
  const res = []
  const backtrack = (currNode, currArr) => {
    currArr.push(currNode)
    if (currNode === graph.length - 1) {
      res.push([...currArr])
    }
    const neighbours = graph[currNode]
    for (const n of neighbours) {
      backtrack(n, currArr)
    }
    currArr.pop()
  }
  backtrack(0, [])
  return res
}

const graph = [[1, 2], [3], [3], []]
console.log(allPathSourceTarget(graph))
