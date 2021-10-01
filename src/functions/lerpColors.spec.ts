import { lerpColors } from '..'

describe('lerpColors', () => {
  it('from strings', () => {
    expect(lerpColors('#000000', '#ffffff', 0.5)).toBe('#808080')
    expect(lerpColors('#00000000', '#ffffffff', 0.5)).toBe('#80808080')
  })

  it('from vectors', () => {
    expect(lerpColors([0, 0, 0], [255, 255, 255], 0.5)).toBe('#808080')
    expect(lerpColors([0, 0, 0, 0], [255, 255, 255, 1], 0.5)).toBe('#80808080')
  })
})
