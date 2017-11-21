export default class BinarySearchTree {
  constructor(value) {
    this.value = value
  }

  insert(value) {
    const node = new BinarySearchTree(value)

    const recurse = bst => {
      if (bst.value > value && bst.left === undefined) {
        bst.left = node
      } else if (bst.value > value) {
        recurse(bst.left)
      } else if (bst.value < value && bst.right === undefined) {
        bst.right = node
      } else if (bst.value < value) {
        recurse(bst.right)
      }
    }

    recurse(this)
  }

  contains(value) {
    let doesContain = false

    const recurse = bst => {
      if (bst.value === value) {
        doesContain = true
      } else if (bst.left !== undefined && value < bst.value) {
        recurse(bst.left)
      } else if (bst.right !== undefined && value > bst.value) {
        recurse(bst.right)
      }
    }

    recurse(this)
    return doesContain
  }

  depthFirstLog(callback) {
    const recurse = bst => {
      callback.call(bst, bst.value)

      if (bst.left !== undefined) {
        recurse(bst.left)
      }

      if (bst.right !== undefined) {
        recurse(bst.right)
      }
    }

    recurse(this)
  }
}
