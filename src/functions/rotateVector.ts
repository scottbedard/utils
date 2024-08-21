import { degreesToRadians } from './degreesToRadians'
import { Vec } from '../types/Vec'

/**
 * Rotate a vector counter-clockwise around the origin.
 */
export function rotateVector([x, y]: Vec<2>, degrees: number): Vec<2> {
  const radians = degreesToRadians(degrees)
  const cos = Math.cos(radians)
  const sin = Math.sin(radians)

  return [(x * cos) - (y * sin), (x * sin) + (y * cos)]
}
