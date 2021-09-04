import { cols } from '..'

describe('cols', () => {
  const matrix = [
    0, 1, 2,
    3, 4, 5,
    6, 7, 8,
  ]

  it('chunks a matrix into columns', () => {
    expect(cols(matrix)).toEqual([
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ])
  })
})
