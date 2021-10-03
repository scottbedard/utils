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