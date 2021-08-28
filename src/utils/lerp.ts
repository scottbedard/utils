/**
 * Linear interpolation between two numbers.
 */
export function lerp(a: number, b: number, alpha: number): number {
  return (a * (1 - alpha)) + (b * alpha)
}
