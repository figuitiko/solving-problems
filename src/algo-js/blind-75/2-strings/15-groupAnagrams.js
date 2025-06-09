class Solution {
  /**
     * @param {string[]} strs
     * @return {string[][]}
     */
  groupAnagrams (strs) {
    const map = {}
    const inOrderStrs = strs.map(item => item.split('').sort().join(''))
    for (let i = 0; i < inOrderStrs.length; i++) {
      if (!map[inOrderStrs[i]]) {
        map[inOrderStrs[i]] = [strs[i]]
      } else {
        map[inOrderStrs[i]].push(strs[i])
      }
    }
    return Object.values(map)
  }
}
const newS = new Solution()

console.log(newS.groupAnagrams(['act', 'pots', 'tops', 'cat', 'stop', 'hat']))
