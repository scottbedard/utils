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