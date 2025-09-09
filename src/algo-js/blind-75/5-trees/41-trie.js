const Trie = function () {
  this.root = {}
}

Trie.prototype.insert = function (word) {
  let node = this.root
  for (const c of word) {
    if (!node[c]) node[c] = {}
    node = node[c]
  }
  node.isWord = true
}

Trie.prototype.traverse = function (word) {
  let node = this.root
  for (const c of word) {
    node = node[c]
    if (!node) return null
  }
  return node
}

Trie.prototype.search = function (word) {
  const node = this.traverse(word)
  return !!node && node.isWord === true
}

Trie.prototype.startsWith = function (prefix) {
  const node = this.traverse(prefix)
  return !!node
}

// const words = ['Trie', 'insert', 'dog', 'search', 'dog', 'search', 'do', 'startsWith', 'do', 'insert', 'do', 'search', 'do']

const trie = new Trie()
trie.insert('dog')
console.log(trie.search('dog'))

console.log(
  trie.startsWith('do')
)

console.log(
  trie.startsWith('pe')
)
