import { rgbToHsl } from '..'

describe('rgbToHsl', () => {
  it('black', () => {
    expect(rgbToHsl([0, 0, 0])).toEqual([0, 0, 0, 1])
  })

  it('white', () => {
    expect(rgbToHsl([255, 255, 255])).toEqual([0, 0, 1, 1])
  })

  it('red', () => {
    expect(rgbToHsl([255, 0, 0])).toEqual([0, 1, 0.5, 1])
  })

  it('green', () => {
    expect(rgbToHsl([0, 255, 0])).toEqual([120, 1, 0.5, 1])
  })

  it('blue', () => {
    expect(rgbToHsl([0, 0, 255])).toEqual([240, 1, 0.5, 1])
  })

  it('yellow', () => {
    expect(rgbToHsl([255, 255, 0])).toEqual([60, 1, 0.5, 1])
  })

  it('magenta', () => {
    expect(rgbToHsl([255, 0, 255])).toEqual([300, 1, 0.5, 1])
  })
    
  it('hex', () => {
    const hsla = rgbToHsl('#123456')
    expect(hsla[0]).toBe(210)
    expect(hsla[1]).toBeCloseTo(.654)
    expect(hsla[2]).toBeCloseTo(.204)
    expect(hsla[3]).toBe(1)
  })
})
