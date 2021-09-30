import { parseColor } from '..'

describe('parseColor', () => {
  it('invalid', () => {
    expect(() => parseColor('not a valid color')).toThrow()
  })

  it('hex', () => {
    expect(parseColor('123456')).toEqual([18, 52, 86, 0])
    expect(parseColor('#123456')).toEqual([18, 52, 86, 0])
    expect(parseColor('123456ff')).toEqual([18, 52, 86, 1])
    expect(parseColor('#123456ff')).toEqual([18, 52, 86, 1])
  })

  it('rgb & rgba', () => {
    expect(parseColor('rgb(12, 34, 56)')).toEqual([12, 34, 56, 0])
    expect(parseColor('rgba(12, 34, 56, 255)')).toEqual([12, 34, 56, 1])
  })
})
