import {
  easeInOutSine,
  easeInSine,
  easeOutSine,
  easeInQuad,
  easeOutQuad,
  easeInOutQuad,
} from '..'

describe('easing functions', () => {
  // asymmetrical in transitions should have a middle value between 0 and 0.5
  const asymmetricalIn = {
    easeInSine,
    easeInQuad,
  }

  // asymmetrical out transitions should have a midde value between 0.5 and 1
  const asymmetricalOut = {
    easeOutSine,
    easeOutQuad,
  }

  // symmetrical transitions should have a middle value equal to 0.5
  const symmetrical = {
    easeInOutSine,
    easeInOutQuad,
  }

  Object.entries(symmetrical).forEach(([name, fn]) => {
    it(name, () => {
      expect(fn(0)).toBeCloseTo(0)
      expect(fn(0.5)).toBeCloseTo(0.5)
      expect(fn(1)).toBeCloseTo(1)
    })
  })

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
})
