const c1 = 1.70158
const c2 = c1 * 1.525
const c3 = c1 + 1
const c4 = (2 * Math.PI) / 3
const c5 = (2 * Math.PI) / 4.5

/**
 * Ease in sine
 *
 * https://cubic-bezier.com/#.12,0,.39,0
 */
export function easeInSine(x: number): number {
  return 1 - Math.cos((x * Math.PI) / 2)
}

/**
 * Ease out sine
 *
 * http://cubic-bezier.com/#0.61,1,0.88,1
 */
export function easeOutSine(x: number): number {
  return Math.sin((x * Math.PI) / 2)
}

/**
 * Ease in-out sine
 *
 * http://cubic-bezier.com/#0.37,0,0.63,1
 */
export function easeInOutSine(x: number): number {
  return -(Math.cos(Math.PI * x) - 1) / 2
}

/**
 * Ease in quad
 *
 * http://cubic-bezier.com/#0.11,0,0.5,0
 */
export function easeInQuad(x: number): number {
  return x * x
}

/**
 * Ease out quad
 *
 * http://cubic-bezier.com/#0.5,1,0.89,1
 */
export function easeOutQuad(x: number): number {
  return 1 - Math.pow(1 - x, 2)
}

/**
 * Ease in-out quad
 *
 * http://cubic-bezier.com/#0.45,0,0.55,1
 */
export function easeInOutQuad(x: number): number {
  return x < 0.5
    ? 2 * Math.pow(x, 2)
    : 1 - Math.pow(-2 * x + 2, 2) / 2
}

/**
 * Ease in cubic
 *
 * http://cubic-bezier.com/#0.32,0,0.67,0
 */
export function easeInCubic(x: number): number {
  return x * x * x
}

/**
 * Ease out cubic
 *
 * http://cubic-bezier.com/#0.33,1,0.68,1
 */
export function easeOutCubic(x: number): number {
  return 1 - Math.pow(1 - x, 3)
}

/**
 * Ease in-out cubic
 *
 * http://cubic-bezier.com/#0.65,0,0.35,1
 */
export function easeInOutCubic(x: number): number {
  return x < 0.5
    ? 4 * Math.pow(x, 3)
    : 1 - Math.pow(-2 * x + 2, 3) / 2
}

/**
 * Ease in quart
 * 
 * http://cubic-bezier.com/#0.5,0,0.75,0
 */
export function easeInQuart(x: number): number {
  return Math.pow(x, 4)
}

/**
 * Ease out quart
 * 
 * http://cubic-bezier.com/#0.25,1,0.5,1
 */
export function easeOutQuart(x: number): number {
  return 1 - Math.pow(1 - x, 4)
}

/**
 * Ease in-out quart
 * 
 * http://cubic-bezier.com/#0.76,0,0.24,1
 */
export function easeInOutQuart(x: number): number {
  return x < 0.5
    ? 8 * Math.pow(x, 4)
    : 1 - Math.pow(-2 * x + 2, 4) / 2
}

/**
 * Ease in quint
 *
 * http://cubic-bezier.com/#0.64,0,0.78,0
 */
export function easeInQuint(x: number): number {
  return Math.pow(x, 5)
}

/**
 * Ease out quint
 * 
 * http://cubic-bezier.com/#0.22,1,0.36,1
 */
export function easeOutQuint(x: number): number {
  return 1 - Math.pow(1 - x, 5)
}

/**
 * Ease in-out quint
 * 
 * http://cubic-bezier.com/#0.83,0,0.17,1
 */
export function easeInOutQuint(x: number): number {
  return x < 0.5
    ? 16 * Math.pow(x, 5)
    : 1 - Math.pow(-2 * x + 2, 5) / 2
}

/**
 * Ease in expo
 *
 * http://cubic-bezier.com/#0.7,0,0.84,0
 */
export function easeInExpo(x: number): number {
  return x === 0
    ? 0
    : Math.pow(2, 10 * x - 10)
}

/**
 * Ease out expo
 *
 * http://cubic-bezier.com/#0.16,1,0.3,1
 */
export function easeOutExpo(x: number): number {
  return x === 1 
    ? 1 
    : 1 - Math.pow(2, -10 * x)
}

/**
 * Ease in-out expo
 * 
 * http://cubic-bezier.com/#0.87,0,0.13,1
 */
export function easeInOutExpo(x: number): number {
  return x === 0
    ? 0
    : x === 1
      ? 1
      : x < 0.5
        ? Math.pow(2, 20 * x - 10) / 2
        : (2 - Math.pow(2, -20 * x + 10)) / 2
}

/**
 * Ease in circ
 *
 * http://cubic-bezier.com/#0.55,0,1,0.45
 */
export function easeInCirc(x: number): number {
  return 1 - Math.sqrt(1 - Math.pow(x, 2))
}

/**
 * Ease out circ
 *
 * http://cubic-bezier.com/#0,0.55,0.45,1
 */
export function easeOutCirc(x: number): number {
  return Math.sqrt(1 - Math.pow(x - 1, 2))
}

/**
 * Ease in-out circ
 *
 * http://cubic-bezier.com/#0.85,0,0.15,1
 */
export function easeInOutCirc(x: number): number {
  return x < 0.5
    ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
    : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2
}

/**
 * Ease in back
 * 
 * http://cubic-bezier.com/#0.36,0,0.66,-0.56
 */
export function easeInBack(x: number): number {
  return c3 * x * x * x - c1 * x * x
}

/**
 * Ease out back
 * 
 * http://cubic-bezier.com/#0.34,1.56,0.64,1
 */
export function easeOutBack(x: number): number {
  return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2)
}

/**
 * Ease in-out back
 *
 * http://cubic-bezier.com/#0.68,-0.6,0.32,1.6
 */
export function easeInOutBack(x: number): number {  
  return x < 0.5
    ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
    : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2
}

/**
 * Ease in elastic
 */
export function easeInElastic(x: number): number {
  return x === 0
    ? 0
    : x === 1
      ? 1
      : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4)
}

/**
 * Ease out elastic
 */
export function easeOutElastic(x: number): number {
  return x === 0
    ? 0
    : x === 1
      ? 1
      : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1
}

/**
 * Ease in-out elastic
 */
export function easeInOutElastic(x: number): number {
  return x === 0
    ? 0
    : x === 1
      ? 1
      : x < 0.5
        ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2
        : (Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1
}
