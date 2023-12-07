const wordSearch = (board, words) => {
  const result = []
  const root = buildTrie(words)
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(root, i, j, result, board)
    }
  }
  return result
}
const dfs = (node, i, j, result, board) => {
  if (node.word) {
    result.push(node.word)
    node.word = null
  }
  if (i < 0 || j < 0 || i > board.length - 1 || j > board[0].length - 1) return
  if (!node[board[i][j]]) return
  const c = board[i][j]
  board[i][j] = '#'
  dfs(node[c], i + 1, j, result, board)
  dfs(node[c], i - 1, j, result, board)
  dfs(node[c], i, j + 1, result, board)
  dfs(node[c], i, j - 1, result, board)
  board[i][j] = c
}

const buildTrie = (words) => {
  const root = {}
  for (const word of words) {
    let currNode = root
    for (const chart of word) {
      if (!currNode[chart]) currNode[chart] = {}
      currNode = currNode[chart]
    }
    currNode.word = word
  }
  return root
}
const boardValues = [
  ['o', 'a', 'a', 'n'],
  ['e', 't', 'a', 'e'],
  ['i', 'h', 'k', 'r'],
  ['i', 'f', 'l', 'v']
]
const words = ['oath', 'pea', 'rain']

console.log(wordSearch(boardValues, words))
