import { lerp } from './lerp'

describe('lerp', () => {
  it('interpolates between numbers', () => {
    expect(lerp(0, 10, 0)).toBe(0)
    expect(lerp(0, 10, 0.5)).toBe(5)
    expect(lerp(0, 10, 1)).toBe(10)
    expect(lerp(0, 10, -1)).toBe(-10)
    expect(lerp(0, 10, 2)).toBe(20)
  })
})
