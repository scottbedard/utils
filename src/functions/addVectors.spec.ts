import { addVectors } from '..'

describe('addVectors', () => {
  it('adds vectors together', () => {
    expect(addVectors([1, 2], [3, 4], [5, 6])).toEqual([9, 12])
  })
})
