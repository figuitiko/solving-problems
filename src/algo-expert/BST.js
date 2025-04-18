class BST {
  constructor (root) {
    this.value = root.value
    this.left = root.left
    this.right = root.right
  }

  insert (value) {
    const recursive = (root) => {
      const newNode = {
        id: +value,
        left: null,
        right: null,
        value
      }
      if (!root.left && root.value > value) {
        root.left = newNode
        return
      } if (!root.right && root.value >= value) {
        root.right = newNode
        return
      }
      if (root.left && root.left.value > value) {
        recursive(root.left)
        return
      }
      if (root.right && root.right.value >= value) {
        recursive(root.right)
      }
    }
    recursive(this)
    return this
  }

  contains (value) {
    const recursive = (root) => {
      if (!root) return
      if (root.value === value) return true
      return recursive(root.left) || recursive(root.right)
    }
    return recursive(this)
  }

  remove (value) {
  }
}
const node14 = {
  id: '14', left: null, right: null, value: 14
}

const node22 = {
  id: '22', left: null, right: null, value: 22
}

const node13 = {
  id: '13', left: null, right: node14, value: 13
}
const node15 = {
  id: '15', left: node13, right: node22, value: 15
}
const node5a = {
  id: '5a', left: null, right: null, value: 5
}

const node1 = {
  id: '1', left: null, right: null, value: 1
}
const node2 = {
  id: '2', left: node1, right: null, value: 2
}
const node5 = {
  id: '5', left: node2, right: node5a, value: 5
}
const root = {
  id: '10', left: node5, right: node15, value: 10
}

const bst = new BST(root)
// console.log(bst.contains(15))
console.dir(JSON.stringify(bst.insert(12), null, 2))
