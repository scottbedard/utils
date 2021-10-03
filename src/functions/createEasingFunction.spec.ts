import {
  createEasingFunction,
  easeInOutCubic,
  easeInQuad,
  easeOutCirc,
} from '..'

describe('createEasingFunction', () => {
  const arr = [0, ...new Array(10).fill(0).map((x, i, arr) => (i + 1) / arr.length)]

  // linear should be exactly the same
  it('linear', () => {
    const ease = createEasingFunction(0, 0, 1, 1)

    arr.forEach(t => expect(ease(t)).toBe(t))
  })

  // and curves should be about equal to equivalent math fns
  it('easeInOutCubic', () => {
    const ease = createEasingFunction(0.65, 0, 0.35, 1)

    arr.forEach(t => expect(ease(t)).toBeCloseTo(easeInOutCubic(t), 1))
  })

  it('easeInQuad', () => {
    const ease = createEasingFunction(0.11, 0, 0.5, 0)

    arr.forEach(t => expect(ease(t)).toBeCloseTo(easeInQuad(t), 1))
  })

  it('easeOutCirc', () => {
    const ease = createEasingFunction(0, 0.55, 0.45, 1)

    arr.forEach(t => expect(ease(t)).toBeCloseTo(easeOutCirc(t), 1))
  })
})