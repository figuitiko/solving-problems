const WordDictionary = function () {
  this.trie = {}
}

WordDictionary.prototype.addWord = function (word) {
  const node = this.trie
  for (const char of word) {
    if (node[char] === null) node[char] = {}
  }
  node.isEnd = true
}

WordDictionary.prototype.dfs = function (word, trie, index) {
  if (word.length === index) {
    return !!trie.isEnd
  }
  const char = word[index]
  if (char === '.') {
    for (const key in trie) {
      if (this.dfs(word, trie[key], index + 1)) return true
    }
  } else {
    if (trie[char] !== null) {
      return this.dfs(word, trie[char], index + 1)
    }
  }
  return false
}

WordDictionary.prototype.search = function (word) {
  return this.dfs(word, this.trie, 0)
}
