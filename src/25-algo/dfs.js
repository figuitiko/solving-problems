const graph = {
  A: ['B', 'C'],
  B: ['D'],
  C: ['D'],
  D: []
}

const recursiveDFS = (graph, node) => {
  const callStack = []
  let max = 0
  const visited = new Set()
  const dfs = (graph, node, visited) => {
    callStack.push(node)
    max = Math.max(max, callStack.length)
    visited.add(node)
    console.log(`Pushed ${node} on to the stack: [${callStack}]`)
    graph[node].forEach(child => {
      if (!visited.has(child)) {
        dfs(graph, child, visited)
      } else {
        console.log(`Already visited ${child}: [${callStack}]`)
      }
    })
    callStack.pop()
    console.log(`Finished with node ${node}: [${callStack}]`)
  }
  dfs(graph, node, visited)
  console.log('Longest stack', max)
}

console.log('Recursive')
recursiveDFS(graph, 'A')

const iteractiveDFS = (graph, start) => {
  const visited = new Set()
  let max = 0
  const stack = [start]
  console.log(`Starting with stack:[${stack}]`)
  while (stack.length > 0) {
    const node = stack.pop()
    console.log(`Popping ${node} off the stack: [${stack}]`)
    if (visited.has(node)) {
      console.log(`Already visited ${node}: [${stack}]`)
      continue
    }
    visited.add(node)
    graph[node].forEach(child => {
      stack.push(child)
      max = Math.max(max, stack.length)
      console.log(`Pushed child ${child} on to the stack. [${stack}]`)
    })
  }
  console.log('Longest stack', max)
}
console.log('Interactive')
iteractiveDFS(graph, 'A')
