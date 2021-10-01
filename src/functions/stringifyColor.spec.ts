import { stringifyColor } from '..'

describe('stringifyColor', () => {
  it('hex', () => {
    expect(stringifyColor([1, 2, 3])).toBe('#010203')
  })

  it('hex alpha', () => {
    expect(stringifyColor([1, 2, 3, 4])).toBe('#01020304')
  })
})
