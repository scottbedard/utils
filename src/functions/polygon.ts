import { rotateVector } from './rotateVector'
import { Vector2 } from '..'

/**
 * Create a regular polygon.
 */
export function polygon(sides: number, circumradius = 1): Vector2[] {
  return new Array(sides).fill(null).map((n, i) => {
    return rotateVector([0, circumradius], (360 / sides) * i)
  })
}
