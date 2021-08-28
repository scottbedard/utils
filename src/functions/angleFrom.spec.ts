import { angleFrom } from '..'

describe('angleFrom', () => {
  it('calculates the angled distance from a vector', () => {
    const [ax, ay] = angleFrom([0, 0], 0, 1) // 3 o'clock
    expect(ax).toBe(1)
    expect(ay).toBe(0)

    const [bx, by] = angleFrom([0, 0], 90, 1) // 12 o'clock
    expect(bx).toBeCloseTo(0)
    expect(by).toBe(1)

    const [cx, cy] = angleFrom([0, 0], 180, 1) // 9 o'clock
    expect(cx).toBeCloseTo(-1)
    expect(cy).toBeCloseTo(0)

    const [dx, dy] = angleFrom([0, 0], 270, 1) // 6 o'clock
    expect(dx).toBeCloseTo(0)
    expect(dy).toBe(-1)

    const [ex, ey] = angleFrom([0, 0], 360, 1) // 3 o'clock
    expect(ex).toBe(1)
    expect(ey).toBeCloseTo(0)
  })
})
