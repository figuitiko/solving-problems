const { TreeNode } = require('../algo-js/blind-75')

class Solution {
  /**
   * @param {TreeNode} root
   * @return {TreeNode}
   */
  invertTree (root) {
    if (!root) return null
    if (root.left || root.right) {
      [root.right, root.left] = [this.invertTree(root.left), this.invertTree(root.right)]
    }
    return root
  }
}

const one = new TreeNode(1)
const two = new TreeNode(2)
const three = new TreeNode(3, two, one)

const solution = new Solution()
console.log(solution.invertTree(three))
