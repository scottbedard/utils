import { flattenCols } from '..'

describe('flattenCols', () => {
  const cols = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ]

  it('flattens an array columns', () => {
    expect(flattenCols(cols)).toEqual([
      0, 1, 2,
      3, 4, 5,
      6, 7, 8,
    ])
  })
})
