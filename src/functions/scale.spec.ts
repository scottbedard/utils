import { scale } from '..'

describe('scale', () => {
  it('scales a vector', () => {
    expect(scale([1, 2], 2)).toEqual([2, 4])
  })
})
