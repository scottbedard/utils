import { stringifyColor } from '..'

describe('stringifyColor', () => {
  it('hex', () => {
    expect(stringifyColor([1, 2, 3])).toBe('#010203')
  })

  it('hex alpha', () => {
    expect(stringifyColor([1, 2, 3, 0.5])).toBe('#01020380')
  })
})
