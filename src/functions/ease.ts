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
