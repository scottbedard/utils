import { rgbToHsl } from '..'

describe('rgbToHsl', () => {
  it('converts rgb to hsl', () => {
    // black
    expect(rgbToHsl([0, 0, 0])).toEqual([0, 0, 0, 1])

    // white
    expect(rgbToHsl([255, 255, 255])).toEqual([0, 0, 1, 1])

    // red
    expect(rgbToHsl([255, 0, 0])).toEqual([0, 1, 0.5, 1])

    // green
    expect(rgbToHsl([0, 255, 0])).toEqual([120, 1, 0.5, 1])

    // blue
    expect(rgbToHsl([0, 0, 255])).toEqual([240, 1, 0.5, 1])

    // #123456
    const hsl = rgbToHsl([18, 52, 86])
    expect(hsl[0]).toBe(210)
    expect(hsl[1]).toBeCloseTo(.654)
    expect(hsl[2]).toBeCloseTo(.204)
    expect(hsl[3]).toBe(1)
  })
})
