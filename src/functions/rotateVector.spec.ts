import { rotateVector } from '..'

describe('rotate', () => {
  it('rotates a vector counter-clockwise around the origin', () => {
    const [x, y] = rotateVector([0, 1], 90)
    
    expect(x).toBe(-1)
    expect(y).toBeCloseTo(0)
  })
})
