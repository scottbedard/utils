import { rotateVector } from './rotateVector'
import { Vector2 } from '../utils'

/**
 * Create a regular polygon starting at the 12 o'clock position,
 * and rotating counter-clockwise around the origin
 */
export function polygon(sides: number, circumradius = 1): Vector2[] {
  return new Array(sides).fill(null).map((n, i) => {
    return rotateVector([0, circumradius], (360 / sides) * i)
  })
}
