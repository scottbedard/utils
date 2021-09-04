import { flattenRows } from '..'

describe('flattenRows', () => {
  const rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ]

  it('flattens an array rows', () => {
    expect(flattenRows(rows)).toEqual([
      0, 1, 2,
      3, 4, 5,
      6, 7, 8,
    ])
  })
})
