import { hslToRgb } from '..'

describe('hslToRgb', () => {
  it('black', () => {
    expect(hslToRgb([0, 0, 0])).toEqual([0, 0, 0, 1])
  })

  it('white', () => {
    expect(hslToRgb([0, 0, 1])).toEqual([255, 255, 255, 1])
  })

  it('red', () => {
    expect(hslToRgb([0, 1, 0.5])).toEqual([255, 0, 0, 1])
  })
  
  it('green', () => {
    expect(hslToRgb([120, 1, 0.5])).toEqual([0, 255, 0, 1])
  })
  
  it('blue', () => {
    expect(hslToRgb([240, 1, 0.5])).toEqual([0, 0, 255, 1])
  })

  it('yellow', () => {
    expect(hslToRgb([60, 1, 0.5])).toEqual([255, 255, 0, 1])
  })

  it('magenta', () => {
    expect(hslToRgb([300, 1, 0.5])).toEqual([255, 0, 255, 1])
  })
    
  it('hex', () => {
    // #123456
    expect(hslToRgb([210, 0.653846153846154, 0.20392156862745098, 1])).toEqual([18, 52, 86, 1])
  })
})
