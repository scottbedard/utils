import { isEven } from '..'

describe('isEven', () => {
  it('tests if a number is even', () => {
    expect(isEven(0)).toBe(true)
    expect(isEven(1)).toBe(false)
    expect(isEven(2)).toBe(true)
    expect(isEven(-2)).toBe(true)
  })
})