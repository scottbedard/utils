import { hslToRgb } from '..'

describe('hslToRgb', () => {
  it('converts rgb to hsl', () => {
    // black
    expect(hslToRgb([0, 0, 0])).toEqual([0, 0, 0, 1])

    // // white
    expect(hslToRgb([0, 0, 1])).toEqual([255, 255, 255, 1])

    // // red
    expect(hslToRgb([0, 1, 0.5])).toEqual([255, 0, 0, 1])

    // // green
    expect(hslToRgb([120, 1, 0.5])).toEqual([0, 255, 0, 1])

    // // blue
    expect(hslToRgb([240, 1, 0.5])).toEqual([0, 0, 255, 1])

    // #123456
    expect(hslToRgb([210, 0.653846153846154, 0.20392156862745098, 1])).toEqual([18, 52, 86, 1])
  })
})
