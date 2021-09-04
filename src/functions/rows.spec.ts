import { rows } from '..'

describe('rows', () => {
  const matrix = [
    0, 1, 2,
    3, 4, 5,
    6, 7, 8,
  ]
  
  it('chunks a square matrix into rows', () => {
    expect(rows(matrix)).toEqual([
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ])
  })
})
