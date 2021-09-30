import { lerpVectors } from '..'

describe('lerpVectors', () => {
  it('interpolates between vectors', () => {
    expect(lerpVectors([0, 0, 0], [1, 2, 3], 0.5)).toEqual([0.5, 1, 1.5])
  })

  it('interpolates between vectors of different dimensions', () => {
    expect(lerpVectors([1], [2, 4, 8], 0.25)).toEqual([1.25, 1, 2])
    expect(lerpVectors([2, 4, 8], [1], 0.25)).toEqual([1.75, 3, 6])
  })
})
