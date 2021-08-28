import { slope } from '..'

describe('slope', () => {
  it('calculates the slope of a line', () => {
    expect(slope([[0, 0], [1, 1]])).toBe(1)
  })

  it('calculates the slope between two vectors', () => {
    expect(slope([0, 0], [1, 1])).toBe(1)
  })
})
