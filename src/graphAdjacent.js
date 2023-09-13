class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

const createAdjacencyList = (edges) => {
  const adjacencyList = {}

  for (let i = 0; i < edges.length; i++) {
    const [first, second] = edges[i]
    if (!adjacencyList[first]) {
      adjacencyList[first] = new Node(second)
    } else {
      let current = adjacencyList[first]
      while (current.next) {
        current = current.next
      }
      current.next = new Node(second)
    }
  }
  return adjacencyList
}

const createAdjacencyMatrix = (edges) => {
  const adjacencyMatrix = []
  for (let i = 0; i < edges.length; i++) {
    const [first, second] = edges[i]
    if (!adjacencyMatrix[first]) {
      adjacencyMatrix[first] = 0
    }
    adjacencyMatrix[first][second] = 1
  }
  return adjacencyMatrix
}

const createAdjacencyMatrix2 = (edges) => {
  const adjacencyMatrix = []
  const setVertices = new Set()
  for (let i = 0; i < edges.length; i++) {
    const [val1, val2] = edges[i]
    if (!setVertices.has(val1)) {
      setVertices.add(val1)
    }
    if (!setVertices.has(val2)) {
      setVertices.add(val2)
    }
  }
  for (const val of [...setVertices]) {
    const newArr = Array(setVertices.size).fill(0)
    const idxOfVal = [...setVertices].indexOf(val)
    newArr[idxOfVal] = 0
    for (let j = 0; j < edges.length; j++) {
      if (edges[j].includes(val)) {
        const [edgeA, edgeB] = edges[j]
        if (val === edgeA) {
          const idxOfValConnected = [...setVertices].indexOf(edgeB)
          newArr[idxOfValConnected] = 1
        }
      }
    }
    adjacencyMatrix.push(newArr)
  }
  return adjacencyMatrix
}

const edges = [
  ['A', 'B'],
  ['A', 'C'],
  ['B', 'D'],
  ['B', 'E'],
  ['C', 'E']

]

// console.log(createAdjacencyMatrix(edges));
// console.log(createAdjacencyList(edges));
console.log(createAdjacencyMatrix2(edges))
