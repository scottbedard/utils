import { degreesToRadians } from '..'

describe('degreesToRadians', () => {
  it('converts degrees to radians', () => {
    expect(degreesToRadians(180)).toBe(Math.PI)
  })
})
