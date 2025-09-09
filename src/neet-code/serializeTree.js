const { TreeNode } = require('../algo-js/blind-75')

const serialize = (root) => {
  const res = []
  const dfs = (node, res) => {
    if (node === null) {
      res.push('N')
      return
    }
    res.push(node.val.toString())
    dfs(node.left, res)
    dfs(node.right, res)
  }
  dfs(root, res)
  return res.join(',')
}

const five = new TreeNode(5)
const four = new TreeNode(4)
const three = new TreeNode(3, four, five)
const three1 = new TreeNode(-3)
const two = new TreeNode(2, three1)
const one = new TreeNode(1, two, three)

console.log(serialize(one))
const serializeTree = serialize(one)

const deserialize = (data) => {
  const vals = data.split(',')
  const i = { val: 0 }
  const dfs = (vals, i) => {
    if (vals[i.val] === 'N') {
      i.val++
      return null
    }
    const node = new TreeNode(parseInt(vals[i.val]))
    i.val++
    node.left = dfs(vals, i)
    node.right = dfs(vals, i)
    return node
  }
  return dfs(vals, i)
}

console.log(deserialize(serializeTree))
