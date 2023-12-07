const depthFirstSearch = (arr) => {

}

class Node {
  constructor (name) {
    this.name = name
    this.children = []
  }

  addChild (name) {
    this.children.push(new Node(name))
    return this
  }

  depthFirstSearch (array) {
    // Write your code here.
    array.push(this.name)
    const dfs = (root) => {
      if (!root.children) {
        array.push(this.name)
        return
      }
      for (const val of root.children) {
        array.push(val.name)
        dfs(val)
      }
    }
    dfs(this)
    return array
  }
}

// Do not edit the line below.
exports.Node = Node

const nodeA = new Node('I')
