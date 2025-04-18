class PriorityQueue {
  constructor () {
    this.values = []
  }

  enqueue (node, priority) {
    this.values.push({ node, priority })
    this.values.sort((a, b) => a.priority - b.priority)
  }

  dequeue () {
    return this.values.shift()
  }

  isEmpty () {
    return this.values.length === 0
  }
}

function dijkstra (graph, start) {
  const distances = {} // Stores shortest distances
  const pq = new PriorityQueue()
  const previous = {} // Stores shortest path

  // Initialize distances
  for (const node in graph) {
    distances[node] = node === start ? 0 : Infinity
    previous[node] = null
  }

  pq.enqueue(start, 0)

  while (!pq.isEmpty()) {
    const { node: current } = pq.dequeue()

    for (const [neighbor, weight] of graph[current]) {
      const newDist = distances[current] + weight

      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist
        previous[neighbor] = current
        pq.enqueue(neighbor, newDist)
      }
    }
  }

  return { distances, previous }
}

// Example Usage
const graph = {
  A: [['B', 4], ['C', 2]],
  B: [['A', 4], ['C', 5], ['D', 10]],
  C: [['A', 2], ['B', 5], ['D', 3]],
  D: [['B', 10], ['C', 3]]
}

console.log(dijkstra(graph, 'A'))
