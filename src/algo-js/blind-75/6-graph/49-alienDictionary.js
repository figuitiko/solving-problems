class Solution {
  findOrder (dict, N, K) {
    const adj = {}
    dict.forEach(word => {
      for (const char of word) {
        if (!adj[char]) {
          adj[char] = new Set()
        }
      }
    })
    // {b: Set(0){}, a: Set(0){}, c:Set(0){}, d: Set(0){}}

    for (let i = 0; i < dict.length - 1; i++) {
      const w1 = dict[i]
      const w2 = dict[i + 1]
      const minLen = Math.min(w1.length, w2.length)
      for (let j = 0; j < minLen; j++) {
        if (w1[j] !== w2[j]) {
          adj[w1[j]].add(w2[j])
          break
        }
      }
    }

    /*
     b: Set(2) {'a', 'd'}
     a: Set(1) {'c'}
     c: Set(0) {}
     d: Set(1) {a}
    */

    const state = {}
    const res = []
    const VISIT_STATE = {
      VISITING: 1,
      VISITED: 2
    }

    function dfs (char) {
      if (state[char] === VISIT_STATE.VISITING) {
        return true
      }
      if (state[char] === VISIT_STATE.VISITED) {
        return false
      }
      state[char] = VISIT_STATE.VISITING
      for (const neighChar of adj[char]) {
        if (dfs(neighChar)) {
          return true
        }
      }
      state[char] = VISIT_STATE.VISITED
      res.push(char)
      return false
    }
    for (const char in adj) {
      if (!state[char] && dfs(char)) {
        return ''
      }
    }
    res.reverse()
    return res.join('')
  }
}

console.log(new Solution().findOrder(['baa', 'abcd', 'abca', 'cab', 'cad']))
