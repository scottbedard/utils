import { parseColor } from '..'

describe('parseColor', () => {
  it('invalid', () => {
    expect(() => parseColor('not a valid color')).toThrow()
  })

  it('single hex', () => {
    expect(parseColor('#123')).toEqual([17, 34, 51, 1])
    expect(parseColor('#1230')).toEqual([17, 34, 51, 0])
  })

  it('double hex', () => {
    expect(parseColor('123456')).toEqual([18, 52, 86, 1])
    expect(parseColor('#123456')).toEqual([18, 52, 86, 1])
    expect(parseColor('123456ff')).toEqual([18, 52, 86, 1])
    expect(parseColor('#12345600')).toEqual([18, 52, 86, 0])
  })

  it('rgb & rgba', () => {
    expect(parseColor('rgb(12, 34, 56)')).toEqual([12, 34, 56, 1])
    expect(parseColor('rgba(12, 34, 56, 100)')).toEqual([12, 34, 56, 100 / 255])
    expect(parseColor('rgba(10%, 20%, 30%, 40%)')).toEqual([26, 51, 77, 0.4])
  })
})
