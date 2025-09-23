const WordDictionary = function () {
  this.trie = {}
}

WordDictionary.prototype.addWord = function (word) {
  let node = this.trie
  for (const char of word) {
    if (node[char] === null) node[char] = {}
    node = node[char]
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

class WordDictionary1 {
  constructor () {
    this.trie = {}
  }

  addWord (word) {
    let node = this.trie
    for (const char of word) {
      if (!node[char]) node[char] = {}
      node = node[char]
    }
    node.isEnd = true
  }

  dfs (word, trie, index) {
    if (word.length === index) {
      return !!trie.isEnd
    }
    const char = word[index]
    if (char === '.') {
      for (const key in trie) {
        if (this.dfs(word, trie[key], index + 1)) return true
      }
    } else {
      if (trie[char]) {
        return this.dfs(word, trie[char], index + 1)
      }
    }
    return false
  }

  search (word) {
    return this.dfs(word, this.trie, 0)
  }
}

const wordDictionary = new WordDictionary1()
wordDictionary.addWord('day')
wordDictionary.addWord('bay')
wordDictionary.addWord('may')
console.log(wordDictionary.search('say'))
console.log(wordDictionary.search('day'))
console.log(wordDictionary.search('.ay'))
console.log(wordDictionary.search('b..'))
