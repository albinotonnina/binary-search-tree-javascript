import Bst from './bst'

const bst = new Bst(0)

bst.insert(1)
bst.insert(2)
bst.insert(3)
bst.insert(4)
bst.insert(5)

bst.depthFirstLog(some => {
  console.log('logging', some)
})

