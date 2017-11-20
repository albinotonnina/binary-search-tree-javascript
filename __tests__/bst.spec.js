import Bst from '../src/bst'

describe('Binary Search Tree', () => {
  it('should be an instance of Bst', () => {
    const bst = new Bst(0)
    expect(bst).toBeInstanceOf(Bst)
  })

  it('should have value=0', () => {
    const bst = new Bst('a value')

    expect(bst.value).toEqual('a value')
  })

  describe('Insert', () => {
    it('should insert right', () => {
      const bst = new Bst(0)

      bst.insert(1)

      expect(bst.left).toBeUndefined()
      expect(bst.right.value).toEqual(1)
    })

    it('should insert left', () => {
      const bst = new Bst(2)

      bst.insert(1)

      expect(bst.left.value).toEqual(1)
      expect(bst.right).toBeUndefined()
    })

    it('should insert left', () => {
      const bst = new Bst(2)

      bst.insert(1)

      expect(bst.left.value).toEqual(1)
      expect(bst.right).toBeUndefined()
    })

    it('should insert correctly', () => {
      const bst = new Bst(5)

      bst.insert(1)
      bst.insert(3)
      bst.insert(7)
      bst.insert(9)
      bst.insert(16)

      expect(bst.left.value).toEqual(1)
      expect(bst.left.right.value).toEqual(3)
      expect(bst.right.value).toEqual(7)
      expect(bst.right.right.value).toEqual(9)
      expect(bst.right.right.right.value).toEqual(16)
    })
  })

  describe('Contain', () => {
    it('should return', () => {
      const bst = new Bst(1)
      bst.insert(5)
      bst.insert(6)
      bst.insert(99)
      bst.insert(999)

      expect(bst.contains(1)).toBeTruthy()
      expect(bst.contains(33)).toBeFalsy()
      expect(bst.contains(999)).toBeTruthy()
      expect(bst.contains(888)).toBeFalsy()
    })
  })
  describe('DepthFirstLog', () => {
    it('should return', () => {
      const bst = new Bst(0)
      const mockCallback = jest.fn()

      bst.insert(1)
      bst.insert(2)
      bst.insert(3)
      bst.insert(4)

      bst.depthFirstLog(mockCallback)

      expect(mockCallback.mock.calls.length).toBe(5)

      expect(mockCallback.mock.calls[0][0]).toBe(0)

      expect(mockCallback.mock.calls[1][0]).toBe(1)

      expect(mockCallback.mock.calls[2][0]).toBe(2)
    })
  })
})
