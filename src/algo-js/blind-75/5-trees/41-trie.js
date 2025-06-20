const Trie = function () {
  this.root = {}
}

Trie.prototype.insert = function (word) {
  let node = this.root
  for (const c of word) {
    if (node[c] === null) node[c] = {}
    node = node[c]
  }
  node.isWord = true
}

Trie.prototype.traverse = function (word) {
  let node = this.root
  for (const c of word) {
    node = node[c]
    if (node === null) return null
  }
  return node
}

Trie.prototype.search = function (word) {
  const node = this.traverse(word)
  return node !== null && node.isWord === true
}

Trie.prototype.startsWith = function (prefix) {
  const node = this.traverse(prefix)
  return node !== null
}
