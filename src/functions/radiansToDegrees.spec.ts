import { radiansToDegrees } from '..'

describe('radiansToDegrees', () => {
  it('converts radians to degrees', () => {
    expect(radiansToDegrees(Math.PI)).toBe(180)
  })
})
