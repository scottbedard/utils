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
  return 1 - (1 - x) * (1 - x)
}

/**
 * Ease in-out quad
 *
 * http://cubic-bezier.com/#0.45,0,0.55,1
 */
export function easeInOutQuad(x: number): number {
  return x < 0.5
    ? 2 * x * x
    : 1 - Math.pow(-2 * x + 2, 2) / 2
}