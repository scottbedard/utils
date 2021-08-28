import { measure } from '..'

describe('measure', () => {
  it('measures the distance between two vectors', () => {
    expect(measure([0, 0], [3, 4])).toBe(5)
  })
})