import { bilerp } from './bilerp'

describe('bilerp', () => {
  it('interpolates between vectors', () => {
    expect(bilerp([0, 0], [10, 10], 0.5)).toEqual([5, 5])
  })
})
