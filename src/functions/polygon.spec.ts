import { polygon } from '..'

describe('polygon', () => {
  it('creates a regular polygon', () => {
    const [
      [x1, y1],
      [x2, y2],
      [x3, y3],
      [x4, y4],
    ] = polygon(4, 2)

    expect(x1).toBe(0)
    expect(y1).toBe(2)

    expect(x2).toBe(-2)
    expect(y2).toBeCloseTo(0)

    expect(x3).toBeCloseTo(0)
    expect(y3).toBe(-2)

    expect(x4).toBeCloseTo(2)
    expect(y4).toBeCloseTo(0)
  })
})
