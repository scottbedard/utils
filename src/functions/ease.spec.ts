import {
  easeInOutSine,
  easeInSine,
  easeOutSine,
  easeInQuad,
  easeOutQuad,
  easeInOutQuad,
  easeInCubic,
  easeOutCubic,
  easeInOutCubic,
  easeInQuart,
  easeOutQuart,
  easeInOutQuart,
  easeInQuint,
  easeOutQuint,
  easeInOutQuint,
  easeInExpo,
  easeOutExpo,
  easeInOutExpo,
  easeInCirc,
  easeOutCirc,
  easeInOutCirc,
  easeInBack,
  easeOutBack,
  easeInOutBack,
  easeInElastic,
  easeOutElastic,
  easeInOutElastic,
  easeInBounce,
  easeOutBounce,
  easeInOutBounce,
} from '..'

describe('easing functions', () => {
  // asymmetrical in transitions should have a middle value between 0 and 0.5
  const asymmetricalIn = {
    easeInSine,
    easeInQuad,
    easeInCubic,
    easeInQuart,
    easeInQuint,
    easeInExpo,
    easeInCirc,
  }

  // asymmetrical out transitions should have a midde value between 0.5 and 1
  const asymmetricalOut = {
    easeOutSine,
    easeOutQuad,
    easeOutCubic,
    easeOutQuart,
    easeOutQuint,
    easeOutExpo,
    easeOutCirc,
  }

  // symmetrical transitions should have a middle value equal to 0.5
  const symmetrical = {
    easeInOutSine,
    easeInOutQuad,
    easeInOutCubic,
    easeInOutQuart,
    easeInOutQuint,
    easeInOutExpo,
    easeInOutCirc,
    easeInOutBack,
    easeInOutElastic,
    easeInOutBounce,
  }

  Object.entries(asymmetricalIn).forEach(([name, fn]) => {
    it(name, () => {
      expect(fn(0)).toBeCloseTo(0)
      expect(fn(0.5)).toBeGreaterThan(0)
      expect(fn(0.5)).toBeLessThan(0.5)
      expect(fn(1)).toBeCloseTo(1)
    })
  })

  Object.entries(asymmetricalOut).forEach(([name, fn]) => {
    it(name, () => {
      expect(fn(0)).toBeCloseTo(0)
      expect(fn(0.5)).toBeGreaterThan(0.5)
      expect(fn(0.5)).toBeLessThan(1)
      expect(fn(1)).toBeCloseTo(1)
    })
  })

  Object.entries(symmetrical).forEach(([name, fn]) => {
    it(name, () => {
      expect(fn(0)).toBeCloseTo(0)
      expect(fn(0.5)).toBeCloseTo(0.5)
      expect(fn(1)).toBeCloseTo(1)
    })
  })

  it('easeInBack', () => {
    expect(easeInBack(0)).toBeCloseTo(0)
    expect(easeInBack(0.5)).toBeLessThan(0)
    expect(easeInBack(1)).toBeCloseTo(1)
  })

  it('easeOutBack', () => {
    expect(easeOutBack(0)).toBeCloseTo(0)
    expect(easeOutBack(0.5)).toBeGreaterThan(1)
    expect(easeOutBack(1)).toBeCloseTo(1)
  })

  it('easeInElastic', () => {
    expect(easeInElastic(0)).toBeCloseTo(0)
    expect(easeInElastic(0.5)).toBeLessThan(0)
    expect(easeInElastic(1)).toBeCloseTo(1)
  })

  it('easeOutElastic', () => {
    expect(easeOutElastic(0)).toBeCloseTo(0)
    expect(easeOutElastic(0.5)).toBeGreaterThan(1)
    expect(easeOutElastic(1)).toBeCloseTo(1)
  })

  it('easeInBounce', () => {
    let up = 0
    let down = 0
    let prevVal = 0
    let prevDir: 'up' | 'down' = 'down'
    
    new Array(100).fill(0).forEach((x, i) => {
      const val = easeInBounce(i / 100)

      if (val > prevVal && prevDir === 'down') {
        up++
        prevDir = 'up'
      } else if (val < prevVal && prevDir === 'up') {
        down++
        prevDir = 'down'
      }

      prevVal = val
    })

    expect(easeInBounce(0)).toBeCloseTo(0)
    expect(up).toBe(4)
    expect(down).toBe(3)
    expect(easeInBounce(1)).toBeCloseTo(1)
  })

  it('easeOutBounce', () => {
    let up = 0
    let down = 0
    let prevVal = 0
    let prevDir: 'up' | 'down' = 'down'
    
    new Array(100).fill(0).forEach((x, i) => {
      const val = easeOutBounce(i / 100)

      if (val > prevVal && prevDir === 'down') {
        up++
        prevDir = 'up'
      } else if (val < prevVal && prevDir === 'up') {
        down++
        prevDir = 'down'
      }

      prevVal = val
    })

    expect(easeOutBounce(0)).toBeCloseTo(0)
    expect(up).toBe(4)
    expect(down).toBe(3)
    expect(easeOutBounce(1)).toBeCloseTo(1)
  })
})
