
const dfs = (node, r, c, result, board) => {
  if (node.word) {
    result.push(node.word)
    node.word = null
  }
  if (r < 0 || c < 0 || r > board.length - 1 || c > board[0].length - 1 || !node[board[r][c]]) return
  const char = board[r][c]
  board[r][c] = '#'
  dfs(node[char], r + 1, c, result, board)
  dfs(node[char], r - 1, c, result, board)
  dfs(node[char], r, c + 1, result, board)
  dfs(node[char], r, c - 1, result, board)
  board[r][c] = char
}

const buildTrie = (words) => {
  const root = {}
  for (const word of words) {
    let currNode = root
    for (const char of word) {
      if (!currNode[char]) currNode[char] = {}
      currNode = currNode[char]
    }
    currNode.word = word
  }
  return root
}

const findWords = (board, words) => {
  const result = []
  const root = buildTrie(words)
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      dfs(root, r, c, result, board)
    }
  }
  return result
}

const board = [
  ['o', 'a', 'a', 'n'],
  ['e', 't', 'a', 'e'],
  ['i', 'h', 'k', 'r'],
  ['i', 'f', 'l', 'v']
]
const words = ['oath', 'pea', 'eat', 'rain']

console.log(findWords(board, words))

const trieObject = {
  o: {
    a: {
      t: {
        h: {
          word: 'oath'
        }
      }
    }
  },
  p: {
    e: {
      a: {
        word: 'pea'
      }
    }
  },
  e: {
    a: {
      t: {
        word: 'eat'
      }
    }
  },
  r: {
    a: {
      i: {
        n: {
          word: 'rain'
        }
      }
    }
  }
}

console.log(Object.values(trieObject))
