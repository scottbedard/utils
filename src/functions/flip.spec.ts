import { flip } from '..'

describe('flip', () => {
  const rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ]

  it('converts between rows and columns', () => {
    expect(flip(rows)).toEqual([
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ])
  })
})
